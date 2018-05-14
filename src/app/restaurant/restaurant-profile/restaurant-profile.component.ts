import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Restaurant} from '../restaurant.model';
import {RestaurantService} from '../restaurant.service';

@Component({
  selector: 'app-restaurant-profile',
  templateUrl: './restaurant-profile.component.html',
  styleUrls: ['./restaurant-profile.component.scss']
})
export class RestaurantProfileComponent implements OnInit {
  restaurant: Restaurant;
  id: number;

  constructor(private route: ActivatedRoute,
              private restaurantService: RestaurantService) { }

  ngOnInit() {
    // const id = this.route.snapshot.params['id'];
    // this.restaurant = this.restaurantService.getRestaurant(this.id);

      this.route.params
          .subscribe(
              (params: Params) => {
                this.id = +params['id'];
                this.restaurant = this.restaurantService.getRestaurant(this.id);
                console.log('OPENEN PROFILE OF RESTAURANT' + this.restaurant.id + this.restaurant.name + this.restaurant.phone);

              }
          )
  }

}
