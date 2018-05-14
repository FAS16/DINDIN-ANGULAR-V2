import {Component, OnDestroy, OnInit} from '@angular/core';
import {RestaurantSearch} from './restaurant-search.model';
import {RestaurantSearchService} from './restaurant-search.service';
import {BackendService} from '../../shared/backend/backend.service';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {ToastrService} from 'ngx-toastr';


@Component({
    selector: 'app-restaurant-search',
    templateUrl: './restaurant-search.component.html',
    styleUrls: ['./restaurant-search.component.scss'],
})
export class RestaurantSearchComponent implements OnInit, OnDestroy {
    restaurantSearch: RestaurantSearch = new RestaurantSearch([], [], []);
    sub: Subscription;
    searchURI: string;

    constructor(private restaurantSearchService: RestaurantSearchService,
                private router: Router,
                private backendService: BackendService,
                private toast: ToastrService) {
    }

    ngOnInit() {
        this.restaurantSearchService.resetSearch(); // Reset - when fx user presses the back button in the browser
        console.log('ngOnInit invoked in RestaurantSearchComponent')
        this.sub = this.restaurantSearchService.searchEdited
            .subscribe(
                (search: RestaurantSearch) => {
                    this.restaurantSearch = search;
                    console.log('Recieved data [Search] from subscription in RestaurantSearchComponent')
                }
            );
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    onSearch() {
        if (this.restaurantSearchService.isCriteriaCompleted()) {
            this.restaurantSearchService.resetResults(); // Reset - so the prior search results doest show
            this.backendService.getRestaurantsBySearch(this.defineURI());
            this.restaurantSearchService.resetSearch(); // Reset - when fx user presses the back button in the browser
            this.router.navigate(['/results']);
        } else {
            this.toast.error('Søgning kan kun foretages, hvis alle tre kriterier vælges', 'Mangler søgekriterier');
        }
    }

    defineURI(): string {
        this.searchURI = 'http://130.225.170.248:8080/dindin/webapi/restaurants?';
        //   this.searchURI = 'http://localhost:8080/dindin/webapi/restaurants?';
        if (this.restaurantSearch.zipcodes.length > 0) {
            for (const zipcode of this.restaurantSearch.zipcodes) {
                this.searchURI += 'zipcode=' + zipcode;
                this.searchURI += '&';
            }
        }
        if (this.restaurantSearch.cuisines.length > 0) {
            for (const cuisine of this.restaurantSearch.cuisines) {
                this.searchURI += 'cuisine=' + cuisine.toLowerCase();
                this.searchURI += '&';
            }
        }
        if (this.restaurantSearch.budgets.length > 0) {
            for (const budget of this.restaurantSearch.budgets) {
                this.searchURI += 'budget=' + budget.toLowerCase();
                this.searchURI += '&';
            }
        }
        // this.searchURI.slice(0, -1); // Fjerner det sidste '&'
        console.log(this.searchURI);
        return this.searchURI;
    }

    reset() {
        this.restaurantSearchService.resetSearch();
    }
}
