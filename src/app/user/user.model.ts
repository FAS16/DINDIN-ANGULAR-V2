import {Restaurant} from '../restaurant/restaurant.model';

export class User {

    constructor(public id: number, public username: string, public email: string, public firstName: string,
                public lastName: string, public likedRestaurants: Restaurant[], public created: string) {
    }


}