import {Component, Input, OnInit} from '@angular/core';
import {Restaurant} from '../../restaurant.model';
import {UserService} from '../../../user/user.service';
import {BackendService} from '../../../shared/backend/backend.service';
import {ToastrService} from 'ngx-toastr';
import {AuthService} from '../../../auth/auth.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-restaurant-item',
    templateUrl: './restaurant-item.component.html',
    styleUrls: ['./restaurant-item.component.scss']
})
export class RestaurantItemComponent implements OnInit {
    @Input() restaurant: Restaurant;
    @Input() index: number;
    likePressed = false;
    likeStatus = 'like';

    constructor(private userService: UserService,
                private backendService: BackendService,
                private toast: ToastrService,
                private authService: AuthService,
                private router: Router,
                private route: ActivatedRoute) {
    }

    ngOnInit() {
        console.log('ngOnInit invoked in restaurant-item');

        if (this.userService.currentUser !== null) {
            if (this.isLiked(this.restaurant)) {
                this.likePressed = true;
                this.likeStatus = 'unlike';
                console.log('User has already liked: ' + this.restaurant.name);
            }
        }
    }

    onLike() {

        if (!this.authService.isAuthenticated()) {
            this.toast.warning('Du skal være logget ind for at like.', 'Fejl');
        } else {
            this.likePressed = !this.likePressed;
            if (this.likePressed) {
                this.likeStatus = 'Unlike';
            }
            if (!this.likePressed) {
                this.likeStatus = 'Like';
            }
            if (this.isLiked(this.restaurant)) {
                this.userService.removeLike(this.restaurant)
                this.backendService.unLikeRestaurant(this.restaurant);
            } else if (!this.isLiked(this.restaurant)) {
                this.userService.addLike(this.restaurant);
                this.backendService.likeRestaurant(this.restaurant);
            }
        }
    }

    isLiked(inputRestaurant: Restaurant): boolean {
        if(this.authService.isAuthenticated())
        for (const restaurant of this.userService.currentUser.likedRestaurants) {
            if (restaurant.id === inputRestaurant.id) {
                return true;
            }
        }
        return false;
    }

    onRestaurantSelected() {
        // this.router.navigate([this.restaurant.id], {relativeTo: this.route})
        this.router.navigate(['/restaurant/' + this.restaurant.id])
    }
}
