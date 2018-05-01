import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../../auth/auth.service';
import {UserService} from '../../user/user.service';
import {User} from '../../user/user.model';
import {Subscription} from 'rxjs/Subscription';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy{
  user: User;
  sub: Subscription;

  constructor(private authService: AuthService,
              private userService: UserService,
              private router: Router) { }

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
    this.router.navigate(['/login']);
    }

}
