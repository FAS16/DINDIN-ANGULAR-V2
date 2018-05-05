import {RestaurantSearch} from './restaurant-search.model';
import {Subject} from 'rxjs/Subject';
import {Restaurant} from '../../restaurant/restaurant.model';

export class RestaurantSearchService {
    public searchEdited = new Subject<RestaurantSearch>();
    public resultsChanged = new Subject<Restaurant[]>();
    public search: RestaurantSearch = new RestaurantSearch(0, [], '');
    public searches: RestaurantSearch[] = [];
    public results: Restaurant[] = [];
    setResults(results: Restaurant[]) {
        this.results = results;
        this.resultsChanged.next(this.results.slice())
    }
    addZipcodeToSearch(zipcode: number) {
        this.search.zipcode = zipcode;
        this.searchEdited.next(this.search);
        console.log('Search area is: ' + this.search.zipcode);
    }
    addCuisinesToSearch(cuisines: string[]) {
        this.search.cuisines = cuisines;
        this.searchEdited.next(this.search);
    }
    addBudgetToSearch(budget: string) {
        this.search.budget = budget;
        this.searchEdited.next(this.search);
    }

    resetSearch() {
        this.search.zipcode = 0;
        this.search.cuisines = [];
        this.search.budget = '';
    }
}
