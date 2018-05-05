import {Component, Input, OnInit} from '@angular/core';
import {Restaurant} from '../../restaurant.model';

@Component({
  selector: 'app-restaurant-item',
  templateUrl: './restaurant-item.component.html',
  styleUrls: ['./restaurant-item.component.scss']
})
export class RestaurantItemComponent implements OnInit {
  @Input() restaurant: Restaurant;
  @Input() index: number;

  constructor() { }

  ngOnInit() {
     console.log('ngOnInit invoked in restaurant-item');
  }

    onLike() {
        // Smid like op til bruger, og opdater brugerens likes
    }
}
