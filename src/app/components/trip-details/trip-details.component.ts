import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Trip } from '../trip';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { TripService } from 'src/app/services/trips.service';
import { BookedTripService } from 'src/app/services/bookedTrips.service';

@Component({
  selector: 'app-trip-details',
  templateUrl: './trip-details.component.html',
  styleUrls: ['./trip-details.component.css']
})
export class TripDetailsComponent implements OnInit {

  t!: Trip;
  isHighest: boolean = false;
  isLowest: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private tripService: TripService,
    private bookedTripService: BookedTripService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getTrip();
    this.checkPrice();
  }

  checkPrice(){
    this.tripService.getSortedTripsList().subscribe(
     trips => { 
       if(trips[0].key == this.t.key){
         this.isHighest = true;
       }
       if(trips[trips.length - 1].key == this.t.key){
         this.isLowest = true;
       }
     }
   )
  }

  getTrip(): void {
    let index = this.route.snapshot.paramMap.get('id');
    this.tripService.getTripsList()
      .subscribe(trips => this.t = trips.filter(
        trip => index == trip.key
      )[0]
      );
  }

  goBack(): void {
    this.location.back();
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

}
