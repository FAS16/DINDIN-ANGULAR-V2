import {RestaurantSearch} from './restaurant-search.model';
import {EventEmitter} from '@angular/core';

export class RestaurantSearchService {
    private _searchPrepared = new EventEmitter<RestaurantSearch>();
    private _searches: RestaurantSearch[] = [];
    private _search: RestaurantSearch;

    get searches(): RestaurantSearch[] {
        return this._searches.slice();
    }
    get search(): RestaurantSearch {
        return this._search;
    }
    get searchPrepared(): EventEmitter<RestaurantSearch> {
        return this._searchPrepared;
    }
}
