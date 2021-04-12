import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-trip-rating',
  templateUrl: './trip-rating.component.html',
  styleUrls: ['./trip-rating.component.css']
})



export class TripRatingComponent implements OnInit {
  @Output() rateTrip: EventEmitter<any> = new EventEmitter();
  @Input()
  trip!: any;
  @Input()
  stars!: number;

  constructor() { }

  ngOnInit(): void {
  }

  getColor(stars: number):string {
    if(stars <= this.stars) return "gold";
    else return "black";
  }


}
