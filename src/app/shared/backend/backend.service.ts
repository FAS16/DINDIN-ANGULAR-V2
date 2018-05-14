import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserService} from '../../user/user.service';
import {RestaurantService} from '../../restaurant/restaurant.service';
import {Restaurant} from '../../restaurant/restaurant.model';
import 'rxjs/Rx';
import {RestaurantSearchService} from '../../home/restaurant-search/restaurant-search.service';
import {User} from '../../user/user.model';

@Injectable()
export class BackendService {
    RESTAURANTS_URI = 'http://130.225.170.248:8080/dindin/webapi/restaurants/'
    USERS_URI = 'http://localhost:8080/dindin/webapi/users/'

    constructor(private httpClient: HttpClient,
                private userService: UserService,
                private restaurantService: RestaurantService,
                private restaurantSearchService: RestaurantSearchService) {
    }

    getAllRestaurants() {
        this.httpClient.get<Restaurant[]>(this.RESTAURANTS_URI, {
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
                }
            );
    }

    likeRestaurant(restaurant: Restaurant) {
        const userId = this.userService.currentUser.id;
        console.log('User id ' + userId + ' has liked restaurant id ' + restaurant.id);
        this.httpClient.put(this.USERS_URI + userId + '/likes', restaurant)
            .subscribe(
                (user: User) => {
                    console.log('End of PUT - restaurant liked');
                    console.log(user.likedRestaurants.toString());
                }
            );


    }

    unLikeRestaurant(restaurant: Restaurant) {
        const userId = this.userService.currentUser.id;
        console.log('User id ' + userId + ' has UNLIKE restaurant id' + restaurant.id);
        this.httpClient.request('DELETE', this.USERS_URI + userId + '/likes',  {body: restaurant})
            .subscribe(
                (user: User) => {
                    console.log('Ebd of DELETE - restaurant UNLIKED');
                    console.log((user.likedRestaurants.toString()));
                }
            )

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