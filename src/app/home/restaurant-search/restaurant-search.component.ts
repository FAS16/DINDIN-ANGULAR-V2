import {Component, OnDestroy, OnInit} from '@angular/core';
import {RestaurantSearch} from './restaurant-search.model';
import {RestaurantSearchService} from './restaurant-search.service';
import {Subscription} from 'rxjs/Subscription';
import {BackendService} from '../../shared/backend/backend.service';
import {RestaurantService} from '../../restaurant/restaurant.service';

@Component({
  selector: 'app-restaurant-search',
  templateUrl: './restaurant-search.component.html',
  styleUrls: ['./restaurant-search.component.scss'],
    providers: [RestaurantService, RestaurantSearchService]
})
export class RestaurantSearchComponent implements OnInit, OnDestroy {
    restaurantSearch: RestaurantSearch = new RestaurantSearch(0, null, '');
    sub: Subscription;

  constructor(private restaurantSearchService: RestaurantSearchService,
              private backendService: BackendService,
              private restaurantService: RestaurantService) { }

  ngOnInit() {
      console.log('ngOnInit invoked in RestaurantSearchComponent')
      this.sub = this.restaurantSearchService.searchEdited
          .subscribe(
              (search: RestaurantSearch) => {
                  this.restaurantSearch = search;
                  console.log('Recieved data [Search] from subscription in RestaurantSearchComponent')
              }
          );
  }
  ngOnDestroy() {
      this.sub.unsubscribe();
  }

}
