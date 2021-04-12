import { Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import { TripService } from '../../services/trips.service';
import { Trip } from '../trip';
import { BookedTripService } from 'src/app/services/bookedTrips.service';

@Component({
  selector: 'app-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.css']
})
export class TripsComponent implements OnInit {
  isOn:boolean = true;
  tripsList: any;
  
  sortedTripsList: any;
  tripsFreePlaces: { key: string; freePlaces: number; }[] = [];
  lowPriceTripId: string = "";
  highPriceTripId: string = "";
  bookedTrips: any;
  searchText0: string = "";
  minPrice!: number;
  maxPrice!: number;
  minDate: string = "";
  maxDate: string = "";
  stars!: number;

  
  constructor(private tripService: TripService, private bookedTripService: BookedTripService) {
  }

  ngOnInit() {
    this.getTripsList();
    this.getSortedTripsList();
    this.getBookedTripsLength();
  }


   getSortedTripsList(){
     this.tripService.getSortedTripsList().subscribe(
      trips => { this.sortedTripsList = trips;
        this.highPriceTripId = this.sortedTripsList[0].key;
        this.lowPriceTripId = this.sortedTripsList[this.sortedTripsList.length - 1].key;
      }
    )
   }

  
  setTripFreePlaces(trip: Trip, value: any){
    this.tripService.updateTrip(trip.key,{freePlaces: value});
  }
  
  reserveTrip(trip: Trip):void {
    if(trip.freePlaces > 0){
      this.setTripFreePlaces(trip, trip.freePlaces-1);
      this.bookedTripService.bookTrip(trip);
    } 
  }
  
  removeTripReservation(trip: Trip):void {
    if(trip.freePlaces + 1 <= trip.maxPlaces){ 
      this.setTripFreePlaces(trip, trip.freePlaces+1);
      this.bookedTripService.removeBooking(trip);
    }
  }

  rateTrip(trip: Trip, stars: number): void {
    this.tripService.updateTrip(trip.key, {stars: stars})
  }

  getBookedTripsLength(){
    this.bookedTripService.getBookedTrips().subscribe(
      res => this.bookedTrips = res.length
    )
  }

  getTripsList() {
    this.tripService.getTripsList().subscribe(
      (      trips: any) => {this.tripsList = trips;
    }
    )
  }


}

