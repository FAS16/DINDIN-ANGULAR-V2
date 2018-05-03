import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {Credentials} from './credentials.model';
import {Subject} from 'rxjs/Subject';
import {Router} from '@angular/router';
import {UserService} from '../user/user.service';
import {User} from '../user/user.model';

@Injectable()
export class AuthService {

    // private LOGIN_URL = 'http://localhost:8080/dindin/webapi/login';
    private LOGIN_URL = 'http://130.225.170.248:8080/dindin/webapi/login';
    private _token: string;
    private credentials: Credentials;
    private _authenticated = new Subject<boolean>();
    private user: User;
    authFailed = false;
    // private newUser= new User(1, 'brugernavn', 'mail', 'fornavn', 'efternavn', [], 'skabt');

    constructor(private httpClient: HttpClient,
                private router: Router,
                private userService: UserService) {
    }


    signInUser(username: string, password: string) {
        this.credentials = new Credentials(username, password);
        console.log('Authorizing with: ' + username + ' :' + password);
        this.httpClient.post(this.LOGIN_URL, this.credentials , { // {username: username, password: password}
            observe: 'response'
        }). subscribe(
            (response: HttpResponse<any>) => {
                const res = response;
                console.log(res);
                if (response.status === 200) {
                    this.authFailed = false;
                    console.log(response)
                    console.log(this.user);
                    this.user = response.body;
                    console.log(this.user.firstName);
                    this.userService.initUser(this.user);
                    console.log(this.userService.currentUser);
                    console.log(this.userService.currentUser.email);

                    console.log('Authorized')
                    this._token = response.headers.get('Authorization');
                    console.log('Retrieved token: ' + this._token);
                    if (this._token) {
                        localStorage.setItem('token', JSON.stringify({username: username, token: this._token}));
                        this._authenticated.next(true);
                        this.router.navigate(['/']);

                    }
                }
            }, (error: HttpErrorResponse) => {
                if (error.status === 401) {
                    this.authFailed = true;
                    console.log('Unuthorized!')
                } else {
                    this.authFailed = true;
                    console.log('An error occured')
                }
            });
    }

    signOutUser() {
        this._token = null;
        localStorage.removeItem('token');
    }
    isAuthenticated(): boolean {
        return this._token != null;
    }


    get authenticated(): Subject<boolean> {
        return this._authenticated;
    }

    get token(): string {
        return this._token;
    }
}
