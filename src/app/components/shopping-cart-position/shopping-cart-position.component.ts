import { Component, OnInit, Input } from '@angular/core';
import { BookedTrip } from '../bookedTrip';

@Component({
  selector: 'app-shopping-cart-position',
  templateUrl: './shopping-cart-position.component.html',
  styleUrls: ['./shopping-cart-position.component.css']
})
export class ShoppingCartPositionComponent implements OnInit {

  @Input()
  t!: BookedTrip;
  constructor() { }

  ngOnInit(): void {
  }

}
