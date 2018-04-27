import {User} from '../user/user.model';

export class Restaurant {
    constructor(private _id: number, private _name: string, private _zipcode: number,
                private _address: string, private _budget: string, private _cuisine: string, private _likers: User[]) {
    }



    get id(): number {
        return this._id;
    }

    get name(): string {
        return this._name;
    }

    get zipcode(): number {
        return this._zipcode;
    }

    get address(): string {
        return this._address;
    }

    get budget(): string {
        return this._budget;
    }

    get cuisine(): string {
        return this._cuisine;
    }

    get likers(): User[] {
        return this._likers;
    }
}
