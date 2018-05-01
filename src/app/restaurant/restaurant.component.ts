import { Component, OnInit } from '@angular/core';
import {RestaurantService} from './restaurant.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss'],
  providers: [RestaurantService]
})
export class RestaurantComponent implements OnInit {

  constructor() { }

  ngOnInit() {


  }

}
