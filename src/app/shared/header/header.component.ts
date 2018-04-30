import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../auth/auth.service';
import {UserService} from '../../user/user.service';
import {User} from '../../user/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user: User;

  constructor(private authService: AuthService, private userService: UserService) { }

  ngOnInit() {
    this.user = this.userService.currentUser;
    console.log('User in headerComponent: ' + this.user)
  }
    onSignOut() {
    this.authService.signOutUser();
    }

}
