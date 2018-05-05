import {Component, ElementRef, OnInit, Renderer, Renderer2} from '@angular/core';
import {BackendService} from './shared/backend/backend.service';
import {RestaurantService} from './restaurant/restaurant.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    constructor(private element: ElementRef, private renderer: Renderer2, private backendService: BackendService,
                private restaurantService: RestaurantService) {}
    ngOnInit() {

        this.backendService.getAllRestaurants();
        console.log('SE HER 1: dette sker først: ' + this.restaurantService.getRestaurants());
        // Navbar farveskift v. scroll
        const navbar: HTMLElement = this.element.nativeElement.children[0].children[0];
        this.renderer.listen('window', 'scroll', (event) => {
            const number = window.scrollY;
            if (number > 150 || window.pageYOffset > 150) {
                // add logic
                navbar.classList.remove('navbar-transparent');
            } else {
                // remove logic
                navbar.classList.add('navbar-transparent');
            }
        });
    }
}
