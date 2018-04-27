import {Restaurant} from '../restaurant/restaurant.model';

export class User {

    constructor(private _id: number, private _userName: string, private _firstName: String,
                private _lastName: string, private _password: string, private _likedRestaurants: Restaurant[]) {
    }
    get id(): number {
        return this._id;
    }

    get userName(): string {
        return this._userName;
    }

    get firstName(): String {
        return this._firstName;
    }

    get lastName(): string {
        return this._lastName;
    }

    get password(): string {
        return this._password;
    }

    get likedRestaurants(): Restaurant[] {
        return this._likedRestaurants;
    }
}
