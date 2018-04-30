export class RestaurantSearch {

    constructor(private _zipcode: number, private _cuisines: string[], private _budget: string){
    }

    get area(): number {
        return this._zipcode;
    }

    set area(value: number) {
        this._zipcode = value;
    }
    get cuisines(): string[] {
        return this._cuisines;
    }

    set cuisines(value: string[]) {
        this._cuisines = value;
    }

    get budget(): string {
        return this._budget;
    }

    set budget(value: string) {
        this._budget = value;
    }
}