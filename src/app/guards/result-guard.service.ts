import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {RestaurantSearchService} from '../home/restaurant-search/restaurant-search.service';

@Injectable()
export class ResultGuard implements CanActivate{
    constructor(private restaurantSearchService: RestaurantSearchService, private router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        console.log('RESULT GUARD INVOKED');
        if (!this.restaurantSearchService.criteriaCompleted) {
            this.router.navigate(['/']);
        }
        return this.restaurantSearchService.criteriaCompleted;
    }
}
