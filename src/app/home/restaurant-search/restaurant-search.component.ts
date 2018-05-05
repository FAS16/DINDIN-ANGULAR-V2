import {Component, OnDestroy, OnInit} from '@angular/core';
import {RestaurantSearch} from './restaurant-search.model';
import {RestaurantSearchService} from './restaurant-search.service';
import {Subscription} from 'rxjs/Subscription';
import {BackendService} from '../../shared/backend/backend.service';
import {RestaurantService} from '../../restaurant/restaurant.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Restaurant} from '../../restaurant/restaurant.model';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-restaurant-search',
  templateUrl: './restaurant-search.component.html',
  styleUrls: ['./restaurant-search.component.scss'],
})
export class RestaurantSearchComponent implements OnInit, OnDestroy {
    restaurantSearch: RestaurantSearch = new RestaurantSearch(0, null, '');
    sub: Subscription;
    searchURI: string;

  constructor(private restaurantSearchService: RestaurantSearchService,
              private router: Router,
              private backendService: BackendService,
              private route: ActivatedRoute,
              private httpClient: HttpClient) { }

  ngOnInit() {
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
        this.backendService.getRestaurantsBySearch(this.defineURI());
        this.router.navigate(['/results']);
        this.restaurantSearchService.resetSearch();
  }

    defineURI(): string {
      // this.searchURI = 'http://130.225.170.248:8080/dindin/webapi/restaurants?';
        this.searchURI = 'http://localhost:8080/dindin/webapi/restaurants?';
      if (this.restaurantSearch.zipcode !== 0) {
          this.searchURI += 'zipcode=' + this.restaurantSearch.zipcode;
      }
      if (this.restaurantSearch.cuisines.length > 0) {
          for (const cuisine of this.restaurantSearch.cuisines) {
              this.searchURI += '&cuisine=' + cuisine.toLowerCase();
          }
      }
      if (this.restaurantSearch.budget !== null) {
          this.searchURI += '&budget=' + this.restaurantSearch.budget.toLowerCase();
      }
      console.log(this.searchURI);
      return this.searchURI;
    }
}
