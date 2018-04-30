import {Component, OnInit} from '@angular/core';
import {RestaurantSearchService} from '../restaurant-search.service';

@Component({
    selector: 'app-budget',
    templateUrl: './budget.component.html',
    styleUrls: ['./budget.component.scss']
})
export class BudgetComponent implements OnInit {
    selectedBudget: string;
    private LOW = 'LOW';
    private MEDIUM = 'MEDIUM';
    private HIGH = 'HIGH';

    constructor(private restaurantSearchService: RestaurantSearchService) {
    }

    ngOnInit() {
        this.selectedBudget = this.restaurantSearchService.search.budget.slice();
    }

    onLowBudgetSelected() {
        if (this.selectedBudget === this.LOW) {
            this.selectedBudget = '';
        } else {
            this.selectedBudget = this.LOW;
        }
        this.restaurantSearchService.addBudgetToSearch(this.selectedBudget);
        console.log('Current selected budget: ' + this.selectedBudget);
    }

    onMediumBudgetSelected() {
        if (this.selectedBudget === this.MEDIUM) {
            this.selectedBudget = '';
        } else {
            this.selectedBudget = this.MEDIUM;
        }
        this.restaurantSearchService.addBudgetToSearch(this.selectedBudget);
        console.log('Current selected budget: ' + this.selectedBudget);
    }

    onHighBudgetSelected() {
        if (this.selectedBudget === this.HIGH) {
            this.selectedBudget = '';
        } else {
            this.selectedBudget = this.HIGH;
        }

        this.restaurantSearchService.addBudgetToSearch(this.selectedBudget);
        console.log('Current selected budget: ' + this.selectedBudget);

    }

    isSelected() {

    }


}
