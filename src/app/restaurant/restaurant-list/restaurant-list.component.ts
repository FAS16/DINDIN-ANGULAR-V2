import {Component, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Restaurant} from '../restaurant.model';
import {RestaurantService} from '../restaurant.service';
import {Subscription} from 'rxjs/Subscription';
import {RestaurantSearchService} from '../../home/restaurant-search/restaurant-search.service';
import {UserService} from '../../user/user.service';
import {ActivatedRoute, Params} from '@angular/router';

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
                private restaurantSearchService: RestaurantSearchService,
                private route: ActivatedRoute) {
    }

    ngOnInit() {
        console.log('ngOnInit invoked in RestaurantListComponent')
        //
        // this.restSub = this.userService.profileSelected
        //     .subscribe(
        //         (showProfile: boolean) => {
        //             console.log('Recieved data about profileMode');
        //             this.profileMode = showProfile;
        //             if (this.profileMode === true) {
        //                 console.log('profileMode activated')
        //                 this.userService.profileMode = this.profileMode;
        //                 this.restaurants = this.userService.currentUser.likedRestaurants;
        //             }
        //         }
        //     )

        this.route.params
            .subscribe(
                (params: Params) => {
                    if (params['results']) {
                        console.log('Route: RESULTS')
                        this.restaurants = this.restaurantSearchService.results;
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


        // if (this.restaurantSearchService.results.length > 0 && this.userService.profileMode === false) {
        //     this.restaurants = this.restaurantSearchService.results;
        // }

        // if (this.userService.profileMode === true) {
        //     this.restaurants = this.userService.currentUser.likedRestaurants;
        // }

        // if (this.userService.profileMode === true) {
        //     this.restaurants = this.userService.currentUser.likedRestaurants
        //     console.log(this.userService.profileMode + ' PROFILE MODE')
        // } else {
        //     console.log('NOT PROFILE MODE');
        //     this.restaurants = this.restaurantSearchService.results;
        // }
    }

    ngOnDestroy() {
        console.log('ngOnDestoy invoked in RestaurantListComponent');
        this.searchSub.unsubscribe();
        this.userService.profileMode = false;
        // this.restSub.unsubscribe();

    }

}
