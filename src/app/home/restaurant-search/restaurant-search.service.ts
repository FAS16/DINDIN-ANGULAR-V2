import {RestaurantSearch} from './restaurant-search.model';
import {Subject} from 'rxjs/Subject';
import {Restaurant} from '../../restaurant/restaurant.model';

export class RestaurantSearchService {
    public searchEdited = new Subject<RestaurantSearch>();
    public resultsChanged = new Subject<Restaurant[]>();
    public search: RestaurantSearch = new RestaurantSearch([], [], []);
    public results: Restaurant[] = [];

    setResults(results: Restaurant[]) {
        this.results = results;
        this.resultsChanged.next(this.results.slice())
    }

    addZipcodeToSearch(zipcode: number[]) {
        this.search.zipcodes = zipcode;
        this.searchEdited.next(this.search);
        console.log('Search area is: ' + this.search.zipcodes);
    }

    addCuisinesToSearch(cuisines: string[]) {
        this.search.cuisines = cuisines;
        this.searchEdited.next(this.search);
    }

    addBudgetToSearch(budget: string[]) {
        this.search.budgets = budget;
        this.searchEdited.next(this.search);
    }

    resetSearch() {
        this.search.zipcodes = [];
        this.search.cuisines = [];
        this.search.budgets = [];
        this.searchEdited.next(this.search);
    }

    isCriteriaCompleted(): boolean {
        if (this.search.zipcodes.length > 0 &&
            this.search.cuisines.length > 0 &&
            this.search.budgets.length > 0) {
            return true;
        }
        return false;
    }
}
