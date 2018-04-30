import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserService} from '../../user/user.service';
import {RestaurantService} from '../../restaurant/restaurant.service';
import {RestaurantSearchService} from '../../home/restaurant-search/restaurant-search.service';

@Injectable()
export class BackendService {

    constructor(private httpClient: HttpClient,
                private userService: UserService,
                private restaurantService: RestaurantService,
                private  searchService: RestaurantSearchService) {
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