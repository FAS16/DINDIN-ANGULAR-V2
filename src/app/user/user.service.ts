import {User} from './user.model';
import {Restaurant} from '../restaurant/restaurant.model';
import {Subject} from 'rxjs/Subject';

export class UserService {
    private userInitialized = new Subject<User>();
    private _currentUser: User;

    constructor() {
    }

    get currentUser(): User {
        return this._currentUser;
    }


    set initUser(value: User) {
        this._currentUser = value;
        this.userInitialized.next(this._currentUser)
    }
}