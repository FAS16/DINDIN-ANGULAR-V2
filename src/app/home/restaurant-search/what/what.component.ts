import {Component, OnDestroy, OnInit} from '@angular/core';
import {RestaurantSearchService} from '../restaurant-search.service';
import {BackendService} from '../../../shared/backend/backend.service';
import {RestaurantService} from '../../../restaurant/restaurant.service';
import {Subscription} from 'rxjs/Subscription';
import {Restaurant} from '../../../restaurant/restaurant.model';
import {RestaurantSearch} from '../restaurant-search.model';

@Component({
    selector: 'app-what',
    templateUrl: './what.component.html',
    styleUrls: ['./what.component.scss'],
})
export class WhatComponent implements OnInit, OnDestroy {
    cuisines: string[] = [];
    selectedCuisines: string[] = [];
    restaurants: Restaurant[];
    private restaurantSub: Subscription;
    private searchSub: Subscription;

    constructor(private restaurantService: RestaurantService,
                private restaurantSearchService: RestaurantSearchService,
                private backendService: BackendService) {}

    ngOnInit() {
        console.log('ngOnInit invoked in WhatComponent');

        this.restaurantSub = this.restaurantService.restaurantsChanged
            .subscribe(
                (restaurants: Restaurant[]) => {
                    this.restaurants = restaurants;
                    console.log('Recived data from subscription in WhatComponent: ' + restaurants + this.restaurants)
                }
            )
        this.searchSub = this.restaurantSearchService.searchEdited
            .subscribe(
                (search: RestaurantSearch) => {
                    this.selectedCuisines = search.cuisines;
                }
            )
        this.restaurants = this.restaurantService.getRestaurants();
        this.selectedCuisines = this.restaurantSearchService.search.cuisines.slice();
        this.initCuisines();
    }

    ngOnDestroy() {
        this.restaurantSub.unsubscribe();
        this.searchSub.unsubscribe();
    }

    initCuisines() {
        for ( let i = 0; i < this.restaurants.length; i++) {
            const element: number = this.cuisines.indexOf(this.restaurants[i].cuisine);
            if (element === -1) { // Hvis elementet ikke er der i forvejen
                this.cuisines.push(this.restaurants[i].cuisine);
            }
        }
    }

    onCuisineSelected(cuisine: string) {
        const index: number = this.selectedCuisines.indexOf(cuisine.toLowerCase());
        if (index === -1) {
            this.selectedCuisines.push(cuisine.toLowerCase());
        }
        if (index !== -1) {
            this.selectedCuisines.splice(index, 1);
        }
        this.restaurantSearchService.addCuisinesToSearch(this.selectedCuisines);
        console.log('Cuisines selected so far: ' + this.selectedCuisines);
    }

    isSelected(cuisine: string): boolean {
        const index: number = this.selectedCuisines.indexOf(cuisine.toLowerCase());
        if (index !== -1) {
            return true;
        } else {
            return false;
        }
    }
}
