import {Component, OnInit} from '@angular/core';
import {RestaurantService} from '../../../restaurant/restaurant.service';
import {RestaurantSearchService} from '../restaurant-search.service';


@Component({
  selector: 'app-what',
  templateUrl: './what.component.html',
  styleUrls: ['./what.component.scss']
})
export class WhatComponent implements OnInit {
  cuisines: string[] = [];
  selectedCuisines: string[] = [];

  constructor(private restaurantService: RestaurantService,
                private restaurantSearchService: RestaurantSearchService) {
  }

  ngOnInit() {
      this.cuisines = this.restaurantService.cuisines;
      console.log('ngOnInit invoked in WhatComponent');

  }

    onCuisineSelected(cuisine: string) {
        const index: number = this.selectedCuisines.indexOf(cuisine.toLowerCase());
        if (index === -1) {
     this.selectedCuisines.push(cuisine.toLowerCase());
      console.log('Cuisines selected: ' + this.selectedCuisines);
      } if (index !== -1) {
            this.selectedCuisines.splice(index, 1);
            console.log('Cuisines selected: ' + this.selectedCuisines);
        }

        this.restaurantSearchService.searchPrepared.emit()
    }
    isSelected(cuisine: string): boolean {
        const index: number = this.selectedCuisines.indexOf(cuisine.toLowerCase());
        if (index !== -1) { // Den var der
            return true;
        } else {
            return false;
        }
    }
}
