import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-dindin-omos',
    templateUrl: './aboutus.component.html',
    styleUrls: ['./aboutus.component..css', '../shared/master_styles.css']
})
export class AboutusComponent implements OnInit {
    satisfied_customers = 1099;

    constructor() { }

    ngOnInit() {
    }
    onClickCustomers() {
        this.satisfied_customers ++;
    }

}
