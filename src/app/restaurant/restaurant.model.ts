import {User} from '../user/user.model';

export class Restaurant {
    constructor(public id: number,
                public name: string,
                public zipcode: number,
                public address: string,
                public budget: string,
                public cuisine: string,
                public likers: User[],
                public visits: number,
                public phone: string,
                public website: string,
                ) {
    }
}
