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
  sub: Subscription;
  authFailed = false;

  constructor(private authService: AuthService) { }

  ngOnInit() {
          this.sub = this.authService.authenticated
              .subscribe(
                  (authenticated: boolean) => {
                      this.authFailed = authenticated;
                      console.log('Recieved data [boolean] from subscription in LoginComponent: ' + this.authFailed)
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

  }
}
