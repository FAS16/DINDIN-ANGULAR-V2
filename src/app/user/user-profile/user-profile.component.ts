import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {Restaurant} from '../../restaurant/restaurant.model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  likes: Restaurant[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.likes = this.userService.currentUser.likedRestaurants;
  }

}
