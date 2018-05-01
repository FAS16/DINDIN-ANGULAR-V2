import {User} from './user.model';
import {Restaurant} from '../restaurant/restaurant.model';
import {Subject} from 'rxjs/Subject';

export class UserService {
    public userInitialized = new Subject<User>();
    public currentUser: User;

    constructor() {
    }

    initUser(user: User) {
        this.currentUser = user;
        this.userInitialized.next(this.currentUser)
    }
}