import {Component, OnInit} from '@angular/core';
import {RestaurantSearchService} from '../restaurant-search.service';
import {NgForm} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';

@Component({
    selector: 'app-where',
    templateUrl: './where.component.html',
    styleUrls: ['./where.component.scss']
})
export class WhereComponent implements OnInit {
    selectedZipcodes: number[];

    constructor(private restaurantSearchService: RestaurantSearchService,
                private toast: ToastrService ) {
    }

    ngOnInit() {
        this.selectedZipcodes = this.restaurantSearchService.search.zipcodes;
    }

    onSubmit(form: NgForm) {
        const value = form.value;
        const zipcode = +value.zipcode;

        const index: number = this.selectedZipcodes.indexOf(zipcode);

        if (index === -1) {
            this.selectedZipcodes.push(zipcode);
            this.restaurantSearchService.addZipcodeToSearch(this.selectedZipcodes);
            console.log('Selected zipcodes are: ' + this.selectedZipcodes.toString());
            form.reset();
        } else{
            this.toast.warning('', 'Dette postnummer er allerede valgt');
        }

    }

}
