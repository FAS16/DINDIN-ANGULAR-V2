import {User} from './user.model';
import {Restaurant} from '../restaurant/restaurant.model';
import {Subject} from 'rxjs/Subject';

export class UserService {
    public userInitialized = new Subject<User>();
    public profileSelected = new Subject<true>();
    public currentUser: User;

    constructor() {
    }

    initUser(user: User) {
        this.currentUser = user;
        this.userInitialized.next(this.currentUser)
    }

    addLike(restaurant: Restaurant) {
        this.currentUser.likedRestaurants.push(restaurant);
    }

    removeLike(restaurant: Restaurant) {
        let toBeDeleted = null;
        for (const like of this.currentUser.likedRestaurants) {
            if (like.id === restaurant.id) {
                toBeDeleted = like;
            }
        }
        const index = this.currentUser.likedRestaurants.indexOf(toBeDeleted);
        if (index !== -1) {
            this.currentUser.likedRestaurants.splice(index, 1);
        }
    }
}
