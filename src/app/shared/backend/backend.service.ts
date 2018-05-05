import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserService} from '../../user/user.service';
import {RestaurantService} from '../../restaurant/restaurant.service';
import {Restaurant} from '../../restaurant/restaurant.model';
import 'rxjs/Rx';
import {RestaurantSearchService} from '../../home/restaurant-search/restaurant-search.service';

@Injectable()
export class BackendService {
    constructor(private httpClient: HttpClient,
                private userService: UserService,
                private restaurantService: RestaurantService,
                private restaurantSearchService: RestaurantSearchService) {
    }

    getAllRestaurants() {
        this.httpClient.get<Restaurant[]>('http://130.225.170.248:8080/dindin/webapi/restaurants', {
            observe: 'body',
            responseType: 'json'
        })
            .map(
                (restaurants) => {
                    console.log('MAP: ' + restaurants);
                    for (const restaurant of restaurants) {
                        if (!restaurant['likers']) {
                            restaurants['likers'] = [];
                        }
                    }
                    return restaurants;
                }
            )
            .subscribe(
                (restaurants: Restaurant[]) => {
                    this.restaurantService.setRestaurants(restaurants);
                }
            );
    }
    getRestaurantsBySearch(URI: string) {
        this.httpClient.get<Restaurant[]>(URI, {
            observe: 'body',
            responseType: 'json'
        })
            .map(
                (restaurants) => {
                    console.log('MAP: ' + restaurants);
                    for (const restaurant of restaurants) {
                        if (!restaurant['likers']) {
                            restaurants['likers'] = [];
                        }
                    }
                    return restaurants;
                }
            )
            .subscribe(
                (restaurants: Restaurant[]) => {
                    this.restaurantSearchService.setResults(restaurants);
                    console.log(restaurants[0].name);
                }
            );
    }
    likeRestaurant() {
    }


    // getLikedRestaurant() {
    //     const URL = '';
    //     this.httpClient.get<Restaurant[]>(URL)
    //         .map(
    //             (restaurants) => {
    //                 // Tjek om der er noget, hvis ikke så initialiser
    //             }
    //         )
    //
    // }
}