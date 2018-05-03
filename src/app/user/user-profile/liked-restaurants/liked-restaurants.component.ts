import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liked-restaurants',
  templateUrl: './liked-restaurants.component.html',
  styleUrls: ['./liked-restaurants.component.scss']
})
export class LikedRestaurantsComponent implements OnInit {

  toggled = false;

  constructor() { }

  ngOnInit() {
  }

  onToggle() {
    this.toggled = !this.toggled;
  }

}
