import {Component, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Restaurant} from '../restaurant.model';
import {RestaurantService} from '../restaurant.service';
import {Subscription} from 'rxjs/Subscription';
import {RestaurantSearchService} from '../../home/restaurant-search/restaurant-search.service';
import {UserService} from '../../user/user.service';

@Component({
    selector: 'app-restaurant-list',
    templateUrl: './restaurant-list.component.html',
    styleUrls: ['./restaurant-list.component.scss']
})
export class RestaurantListComponent implements OnInit, OnDestroy {
    @Input() private restaurants: Restaurant[];
    private searchSub: Subscription;
    private restSub: Subscription;
    private profileMode = false;


    constructor(private userService: UserService,
                private restaurantSearchService: RestaurantSearchService) {
    }

    ngOnInit() {
        console.log('ngOnInit invoked in RestaurantListComponent')

        this.restSub = this.userService.profileSelected
            .subscribe(
                (showProfile: boolean) => {
                    console.log('Recieved data about profileMode');
                    this.profileMode = showProfile;
                    if (this.profileMode) {
                        console.log('profileMode activated')
                    }
                }
            )

        this.searchSub = this.restaurantSearchService.resultsChanged
            .subscribe(
                (restaurants: Restaurant[]) => {
                    this.restaurants = restaurants;
                    console.log('Received data from subscription in RestaurantListComponent: ' + restaurants + this.restaurants)
                }
            )
    }

    ngOnDestroy() {
        this.searchSub.unsubscribe();
        this.restSub.unsubscribe();
    }

}
