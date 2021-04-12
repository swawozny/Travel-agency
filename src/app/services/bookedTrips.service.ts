import { Injectable } from '@angular/core';

import { BookedTrip } from '../components/bookedTrip';

import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';


import { map } from 'rxjs/operators';
import { Trip } from '../components/trip';
import firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class BookedTripService {

  bookedTripsRef: AngularFirestoreCollection<BookedTrip>;
  dbPATH = '/bookedTrips';
  bookedTripId: any;

  constructor(private db: AngularFirestore) {
    this.bookedTripsRef = db.collection<BookedTrip>(this.dbPATH);
   }
 
   removeBookedTrip(trip: Trip){
     this.bookedTripsRef.doc(trip.key).delete();
   }

  createBookedTrip(trip: Trip) {
    this.bookedTripsRef.doc(trip.key).set({key: trip.key, tripId:trip.key, name: trip.name, price: trip.price, quantity: 1 });
  }

  bookTrip(trip: Trip) {
    this.db
    .collection(this.dbPATH)
    .doc(trip.key)
    .get().subscribe( (doc: any) => {
      if(doc.exists){
        const tripRef = this.db.collection(this.dbPATH).doc(trip.key);
        const increment = firebase.firestore.FieldValue.increment(1);
        tripRef.update({quantity: increment})
      }
      else {
        this.createBookedTrip(trip);

      }
    }
    )
  }

  removeBooking(trip: Trip) {
    this.db
    .collection(this.dbPATH)
    .doc(trip.key)
    .get().subscribe( (doc: any) => {
        if(trip.maxPlaces == trip.freePlaces + 1) {
          this.deleteBookedTrip(trip);
        }
        else {
          const tripsRef = this.db.collection(this.dbPATH).doc(trip.key);
          const decrement = firebase.firestore.FieldValue.increment(-1);
          tripsRef.update({quantity: decrement})
        }
      }
    )

  }

  deleteBookedTrip(trip: Trip) {
    this.bookedTripsRef.doc(trip.key).delete();
  }

  getBookedTrips() {
    return this.bookedTripsRef
    .snapshotChanges()
    .pipe(map(trips => {
      return trips.map(a => {
        let data = a.payload.doc.data();
        let key = a.payload.doc.id;
        return {...data, key};
      });
    }));
    
  }
}