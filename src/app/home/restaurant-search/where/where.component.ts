import {Component, OnInit} from '@angular/core';
import {RestaurantSearchService} from '../restaurant-search.service';
import {NgForm} from '@angular/forms';

@Component({
    selector: 'app-where',
    templateUrl: './where.component.html',
    styleUrls: ['./where.component.scss']
})
export class WhereComponent implements OnInit {
    selectedZipcode: number;
    constructor(private restaurantSearchService: RestaurantSearchService) {
    }

    ngOnInit() {
        this.selectedZipcode = this.restaurantSearchService.search.zipcode;
    }

    onSubmit(form: NgForm) {
        const value = form.value;
        const zipcode = value.zipcode;
        this.selectedZipcode = +zipcode;
        this.restaurantSearchService.addZipcodeToSearch(this.selectedZipcode);
        console.log('Selected zipcode is: ' + zipcode);
    }

}
