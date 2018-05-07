import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {Credentials} from './credentials.model';
import {Router} from '@angular/router';
import {UserService} from '../user/user.service';
import {User} from '../user/user.model';
import {ToastrService} from 'ngx-toastr';

@Injectable()
export class AuthService {

    private LOCAL_URL = 'http://localhost:8080/dindin/webapi/login';
    // private LOGIN_URL = 'http://130.225.170.248:8080/dindin/webapi/login';
    private token: string;
    private credentials: Credentials;
    private user: User;

    constructor(private httpClient: HttpClient,
                private router: Router,
                private userService: UserService,
                private toast: ToastrService) {
    }


    signInUser(username: string, password: string) {
        this.credentials = new Credentials(username, password);
        console.log('Authorizing with: ' + username + ' :' + password);
        this.httpClient.post(this.LOCAL_URL, this.credentials, { // {username: username, password: password}
            observe: 'response'
        }).subscribe(
            (response: HttpResponse<any>) => {
                console.log(response);
                if (response.status === 200) {
                    this.user = response.body;
                    console.log('User signed in: ' + this.user.username);
                    this.userService.initUser(this.user);
                    console.log('Authorized')
                    // Retrieve token and store locally
                    this.token = response.headers.get('Authorization');
                    console.log('Retrieved token: ' + this.token);
                    if (this.token) {
                        localStorage.setItem('token', JSON.stringify({username: username, token: this.token}));
                        this.router.navigate(['/']);
                    }
                    this.toast.success('Du er logget ind!', 'Velkommen');
                }
            }, (error: HttpErrorResponse) => {
                if (error.status === 401) {
                    console.log('Unuthorized!')
                    this.toast.error('401 - Unauthorized', 'Forkert brugernavn/adgangskode');
                } else {
                    this.toast.error('Prøv igen', 'Fejl');
                    console.log('An error occured')
                }
            });
    }

    signOutUser() {
        this.token = null;
        localStorage.removeItem('token');
        this.userService.initUser(null);
    }

    isAuthenticated(): boolean {
        return this.token != null;
    }
}
