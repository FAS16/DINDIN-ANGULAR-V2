import {Restaurant} from './restaurant.model';

export class RestaurantService {
    private _restaurants: Restaurant[] = [
        new Restaurant( 1, 'Amager kebab', 2300, 'Amagerbrogade 24', 'LOW', 'Tyrkisk', null),
        new Restaurant(2, 'Sushi Mania', 2770, 'Kastrupvej 24', 'MEDIUM', 'Kinesisk', null),
        new Restaurant(3, 'Silas Kebab', 2300, 'Tingvej 2', 'LOW', 'Tyrkisk', null)
    ];
    private _cuisines: string[] = [];


    get cuisines(): string[] {
        for ( let i = 0; i < this._restaurants.length; i++) {
            const element: number = this._cuisines.indexOf(this._restaurants[i].cuisine);
            if (element === -1) { // Hvis elementet ikke er der i forvejen
                this._cuisines.push(this._restaurants[i].cuisine);
            }
        }
        return this._cuisines.slice();
    }

    get restaurants(): Restaurant[] {
        return this._restaurants.slice(); // Slice - så der gives en kopi, og man ikke ændrer i listen i denne service
    }
}
