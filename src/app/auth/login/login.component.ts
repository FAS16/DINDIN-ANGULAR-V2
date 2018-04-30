import {Component, OnDestroy, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../auth.service';
import {RestaurantSearch} from '../../home/restaurant-search/restaurant-search.model';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  username: string;
  password: string;
  signedIn: boolean;
  sub: Subscription;

  constructor(private authService: AuthService) { }

  ngOnInit() {
      this.sub = this.authService.authenticated
          .subscribe(
              (authenticated: boolean) => {
                  this.signedIn = authenticated;
                  console.log('Recieved data [boolean] from subscription in LoginComponent: ' + this.signedIn)
              }
          );
  }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }

  onLogin(form: NgForm) {
    this.username = form.value.username;
    this.password = form.value.password;
    this.authService.signInUser(this.username, this.password);
    // console.log('signedIn: ' + this.signedIn);

  }
}
