import { Injectable } from '@angular/core';

import { Trip } from '../components/trip';

import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TripService {

  tripsRef: AngularFirestoreCollection<Trip>;
  dbPATH = '/trips';
  tripsFreePlaces: any;

  constructor(private db: AngularFirestore) {
    this.tripsRef = db.collection<Trip>(this.dbPATH);
   }
 

  createTrip(trip: Trip) {
    this.tripsRef.add({ ... trip });
  }

  updateTrip(id: string, value: any) {
    this.tripsRef.doc(id).update(value);
  }

  deleteTrip(id: string) {
    this.tripsRef.doc(id).delete();
  }


  getSortedTripsList(){
  return this.tripsRef.snapshotChanges().pipe(
    map(trips => {
      return trips.sort( (a,b) => 
      b.payload.doc.data().price - a.payload.doc.data().price
      ).map(
        a => {
          var data = a.payload.doc.data();
          var key = a.payload.doc.id;
          return {...data, key};
        });
      }
        )
  )
  }

  getTripsList()  {
    return this.tripsRef
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
