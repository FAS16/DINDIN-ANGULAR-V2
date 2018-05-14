import {Component, OnDestroy, OnInit} from '@angular/core';
import {RestaurantSearchService} from '../restaurant-search.service';
import {RestaurantSearch} from '../restaurant-search.model';
import {Subscription} from 'rxjs/Subscription';

@Component({
    selector: 'app-budget',
    templateUrl: './budget.component.html',
    styleUrls: ['./budget.component.scss']
})
export class BudgetComponent implements OnInit, OnDestroy {
    selectedBudgets: string[];
    private LOW = 'LOW';
    private MEDIUM = 'MEDIUM';
    private HIGH = 'HIGH';
    private sub: Subscription;

    constructor(private restaurantSearchService: RestaurantSearchService) {

    }

    ngOnInit() {
        this.selectedBudgets = this.restaurantSearchService.search.budgets.slice();
        this.sub = this.restaurantSearchService.searchEdited
            .subscribe(
                (search: RestaurantSearch) => {
                    this.selectedBudgets = search.budgets;
                }
            )
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    onLowBudgetSelected() {
        const index = this.selectedBudgets.indexOf(this.LOW);
        if (index !== -1) {
            this.selectedBudgets.splice(index, 1);
        } else {
            this.selectedBudgets.push(this.LOW);
        }
        this.restaurantSearchService.addBudgetToSearch(this.selectedBudgets);
        console.log('Current selected budgets: ' + this.selectedBudgets);
    }

    onMediumBudgetSelected() {
        const index = this.selectedBudgets.indexOf(this.MEDIUM);
        if (index !== -1) {
            this.selectedBudgets.splice(index, 1);
        } else {
            this.selectedBudgets.push(this.MEDIUM);
        }
        this.restaurantSearchService.addBudgetToSearch(this.selectedBudgets);
        console.log('Current selected budgets: ' + this.selectedBudgets);
    }

    onHighBudgetSelected() {
        const index = this.selectedBudgets.indexOf(this.HIGH);
        if (index !== -1) {
            this.selectedBudgets.splice(index, 1);
        } else {
            this.selectedBudgets.push(this.HIGH);
        }

        this.restaurantSearchService.addBudgetToSearch(this.selectedBudgets);
        console.log('Current selected budgets: ' + this.selectedBudgets);

    }


}
