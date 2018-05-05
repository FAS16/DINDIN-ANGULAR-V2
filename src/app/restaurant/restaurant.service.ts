import {Restaurant} from './restaurant.model';
import {Subject} from 'rxjs/Subject';
import {Subscription} from 'rxjs/Subscription';
import {RestaurantSearch} from '../home/restaurant-search/restaurant-search.model';

export class RestaurantService {
    restaurantsChanged = new Subject<Restaurant[]>();
    private restaurants: Restaurant[] = [
        new Restaurant( 1, 'Amager kebab', 2300, 'Amagerbrogade 24', 'LOW', 'Tyrkisk', null, 0, '', ''),
        new Restaurant(2, 'Sushi Mania', 2770, 'Kastrupvej 24', 'MEDIUM', 'Kinesisk', null,  0, '', ''),
        new Restaurant(3, 'Silas Kebab', 2300, 'Tingvej 2', 'LOW', 'Tyrkisk', null, 0, '', '')
    ];
    private _cuisines: string[] = [];


    get cuisines(): string[] {
        for ( let i = 0; i < this.restaurants.length; i++) {
            const element: number = this._cuisines.indexOf(this.restaurants[i].cuisine);
            if (element === -1) { // Hvis elementet ikke er der i forvejen
                this._cuisines.push(this.restaurants[i].cuisine);
            }
        }
        return this._cuisines.slice();
    }

    getRestaurants() {
        return this.restaurants.slice(); // Slice - så der gives en kopi, og man ikke ændrer i listen i denne service

    }

    setRestaurants(restaurants: Restaurant[]) {
        this.restaurants = restaurants;
        this.restaurantsChanged.next(this.restaurants.slice())
        console.log('RESTAURANTSERVICE efter setRestaurants er kørt: ' + this.restaurants)
    }
}
