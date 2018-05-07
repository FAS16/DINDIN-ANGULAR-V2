import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../../auth/auth.service';
import {UserService} from '../../user/user.service';
import {User} from '../../user/user.model';
import {Subscription} from 'rxjs/Subscription';
import {Router} from '@angular/router';
import {RestaurantService} from '../../restaurant/restaurant.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy{
  user: User;
  sub: Subscription;

  constructor(private authService: AuthService,
              private router: Router,
              private userService: UserService,
              private toast: ToastrService) { }

  ngOnInit() {console.log('ngOnInit invoked in HeaderComponent')
      this.sub = this.userService.userInitialized
          .subscribe(
              (user: User) => {
                  this.user = user;
                  console.log('Recieved data [User] from subscription in HeaderComponent')
              }
          );
  }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    onSignOut() {
    this.authService.signOutUser();
    this.toast.info('', 'Logget ud');
    this.router.navigate(['/login']);
    }

    onProfileChosen() {
        this.userService.profileSelected.next(true);
        console.log('Sending true to profileSelected');
    }
}
