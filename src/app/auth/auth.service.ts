import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpResponse} from '@angular/common/http';
import {Credentials} from './credentials.model';
import {Subject} from 'rxjs/Subject';
import {Router} from '@angular/router';
import {UserService} from '../user/user.service';

@Injectable()
export class AuthService {

    private LOGIN_URL = 'http://localhost:8080/dindin/webapi/login';
    private _token: string;
    private credentials: Credentials;
    private _authenticated = new Subject<boolean>();

    constructor(private httpClient: HttpClient,
                private router: Router,
                private userService: UserService) {
    }


    signInUser(username: string, password: string) {
        this.credentials = new Credentials(username, password);
        console.log('Authorizing with: ' + username + ' :' + password);
        this.httpClient.post(this.LOGIN_URL, {username: username, password: password}, {
            observe: 'response'
        }).subscribe(
            (response: HttpResponse<any>) => {
                console.log(response);
                if (response.status === 200) {
                    console.log('Authorized')
                    this._token = response.headers.get('Authorization');
                    console.log('Retrieved token: ' + this._token);
                    if (this._token) {
                        localStorage.setItem('token', JSON.stringify({username: username, token: this._token}));
                        // this.userService.currentUser(JSON.parse(response.body.getAll())) ;
                        // this.userService.initUser(JSON.parse(JSON.stringify(response.body)));
                        this._authenticated.next(true);
                        this.router.navigate(['/']);

                    }
                }
            }, (error: HttpErrorResponse) => {
                if (error.status === 401) {
                    console.log('Unuthorized!')
                } else {
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
