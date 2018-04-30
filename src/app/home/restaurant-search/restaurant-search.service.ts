import {RestaurantSearch} from './restaurant-search.model';
import {Subject} from 'rxjs/Subject';

export class RestaurantSearchService {
    private _searchEdited = new Subject<RestaurantSearch>();
    private _search: RestaurantSearch = new RestaurantSearch(0, [], '');
    private _searches: RestaurantSearch[] = [];

        get searches(): RestaurantSearch[] {
        return this._searches.slice();
    }
    get search(): RestaurantSearch {
        return this._search;
    }

    get searchEdited(): Subject<RestaurantSearch> {
        return this._searchEdited;
    }
    addZipcodeToSearch(zipcode: number) {
        this._search.area = zipcode;
        this._searchEdited.next(this._search);
        console.log('Search area is: ' + this._search.area);
    }
    addCuisinesToSearch(cuisines: string[]) {
        this._search.cuisines = cuisines;
        this._searchEdited.next(this._search);
    }
    addBudgetToSearch(budget: string) {
        this._search.budget = budget;
        this._searchEdited.next(this._search);
    }
}
