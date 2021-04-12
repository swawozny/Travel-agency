import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { BookedTripService } from 'src/app/services/bookedTrips.service';
import { element } from 'protractor';

@Component({
  selector: 'app-trip-shopping-cart',
  templateUrl: './trip-shopping-cart.component.html',
  styleUrls: ['./trip-shopping-cart.component.css']
})
export class TripShoppingCartComponent implements OnInit {

  shoppingCartList: any;
  totalSum: any;
  constructor(private bookedTripService: BookedTripService) { }

  ngOnInit(): void {
    this.getShoppingCartList();
    this.getTotalPrice(); 
  }

  getShoppingCartList(){
    this.bookedTripService.getBookedTrips().subscribe( res =>
      {this.shoppingCartList = res
  }
    )
  }

  
  getTotalPrice() {
    let totalSum = 0;
    this.bookedTripService.getBookedTrips().subscribe( res =>
      {res.forEach( element =>
        totalSum += element.quantity * element.price
      ),
      this.totalSum = totalSum;
    }
    )
  }

}
