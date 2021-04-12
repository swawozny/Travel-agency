import { Component, OnInit, Output, EventEmitter, Input, Pipe, PipeTransform } from '@angular/core';
import { Trip } from '../trip';
import { TripService } from '../../services/trips.service';
import { BookedTripService } from 'src/app/services/bookedTrips.service';

@Component({
  selector: 'app-trip',
  templateUrl: './trip.component.html',
  styleUrls: ['./trip.component.css']
})
export class TripComponent implements OnInit {
  @Input()
  t!: Trip;
  @Output() reserveTrip: EventEmitter<any> = new EventEmitter();
  @Output() removeTripReservation: EventEmitter<any> = new EventEmitter();
  @Output() rateTrip: EventEmitter<any> = new EventEmitter();
  @Input()
  isHighest: boolean = false;
  @Input()
  isLowest: boolean = false;
  @Input()
  noPlaces: boolean = false;
  @Input()
  lowAmountOfPlaces: boolean = false;
  @Input()
  allPlacesReserved: boolean = false;
  
  @Input()
  tripFreePlaces!: number;
  @Input()
  tripStars!: number;
  constructor(private tripService: TripService, private bookedTripService: BookedTripService) { }

  ngOnInit(): void {
  }

  getColor(): string{
    let color;
    if(this.isHighest){
      color = "red";
    }
    else if(this.isLowest) {
      color = "green";
      
    }
    else {
      color = "gray";
    }

    return color;
  }

  removeTrip() {
    this.bookedTripService.removeBookedTrip(this.t);
    this.tripService.deleteTrip(this.t.key);
  }
}
