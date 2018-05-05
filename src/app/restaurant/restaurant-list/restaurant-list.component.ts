import { Component, OnInit } from '@angular/core';
import {Restaurant} from '../restaurant.model';
import {RestaurantService} from '../restaurant.service';
import {Subscription} from 'rxjs/Subscription';
import {RestaurantSearchService} from '../../home/restaurant-search/restaurant-search.service';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.scss']
})
export class RestaurantListComponent implements OnInit {
  restaurants: Restaurant[];
    private sub: Subscription;

  constructor(private restaurantService: RestaurantService,
              private restaurantSearchService: RestaurantSearchService) { }

  ngOnInit() {
      console.log('ngOnInit invoked in RestaurantListComponent')
      // this.sub = this.restaurantService.restaurantsChanged
      //     .subscribe(
      //         (restaurants: Restaurant[]) => {
      //             this.restaurants = restaurants;
      //             console.log('Received data from subscription in RestaurantListComponent: ' + restaurants + this.restaurants)
      //         }
      //     )
      // this.restaurants = this.restaurantService.getRestaurants();

      this.sub = this.restaurantSearchService.resultsChanged
          .subscribe(
              (restaurants: Restaurant[]) => {
                  this.restaurants = restaurants;
                  console.log('Received data from subscription in RestaurantListComponent: ' + restaurants + this.restaurants)
              }
          )
      this.restaurants = this.restaurantSearchService.results;
      console.log('RestaurantListComponent restaurants: ' + this.restaurants)
  }

}
