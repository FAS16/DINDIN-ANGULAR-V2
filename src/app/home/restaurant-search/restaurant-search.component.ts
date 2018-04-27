import {Component, Input, OnInit} from '@angular/core';
import {RestaurantService} from '../../restaurant/restaurant.service';
import {RestaurantSearch} from './restaurant-search.model';
import {RestaurantSearchService} from './restaurant-search.service';

@Component({
  selector: 'app-restaurant-search',
  templateUrl: './restaurant-search.component.html',
  styleUrls: ['./restaurant-search.component.scss'],
    providers: [RestaurantService, RestaurantSearchService]
})
export class RestaurantSearchComponent implements OnInit {
    restaurantSearch: RestaurantSearch;

  constructor(private restaurantSearchService: RestaurantSearchService) { }

  ngOnInit() {
      this.restaurantSearchService.searchPrepared
          .subscribe(
              (search: RestaurantSearch) => {
                  this.restaurantSearch = search;
              }
          );
  }

}
