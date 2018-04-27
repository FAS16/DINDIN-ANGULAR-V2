export class RestaurantSearch {

    constructor(private _area: string, private _cuisine: string[], private _budget: string){
    }

    get area(): string {
        return this._area;
    }

    set area(value: string) {
        this._area = value;
    }
    get cuisine(): string[] {
        return this._cuisine;
    }

    set cuisine(value: string[]) {
        this._cuisine = value;
    }

    get budget(): string {
        return this._budget;
    }

    set budget(value: string) {
        this._budget = value;
    }
}