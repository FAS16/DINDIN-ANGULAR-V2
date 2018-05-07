import {Component, OnDestroy, OnInit} from '@angular/core';
import {RestaurantService} from './restaurant.service';
import {RestaurantSearchService} from '../home/restaurant-search/restaurant-search.service';
import {Subscription} from 'rxjs/Subscription';
import {Restaurant} from './restaurant.model';

@Component({
    selector: 'app-restaurant',
    templateUrl: './restaurant.component.html',
    styleUrls: ['./restaurant.component.scss', '../shared/styles/customs.css'],
})
export class RestaurantComponent implements OnInit, OnDestroy {

    numOfResults: number
    private sub: Subscription;

    constructor(private restaurantSearchService: RestaurantSearchService) {
    }

    ngOnInit() {
        this.sub = this.restaurantSearchService.resultsChanged
            .subscribe(
                (results: Restaurant[]) => {
                    this.numOfResults = results.length;
                }
            )
        this.numOfResults = this.restaurantSearchService.results.length;
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

}
