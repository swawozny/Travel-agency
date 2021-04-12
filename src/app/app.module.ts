import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TripsComponent } from './components/trips/trips.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule} from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TripComponent } from './components/trip/trip.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TripCreateComponent } from './components/trip-create/trip-create.component';
import { TripRatingComponent } from './components/trip-rating/trip-rating.component';
import { TripShoppingCartComponent } from './components/trip-shopping-cart/trip-shopping-cart.component';
import { FilterByDestinationPipe } from './components/filters/filterByDestination.pipe';
import { FilterByPricePipe } from './components/filters/filterByPrice.pipe';
import { FilterByDatePipe } from './components/filters/filterByDate.pipe';
import { FilterByStarsPipe } from './components/filters/filterByStars.pipe';
import { AngularFireModule } from "@angular/fire";
import { environment } from '../environments/environment';
import { AngularFirestoreModule} from '@angular/fire/firestore';
import { ShoppingCartPositionComponent } from './components/shopping-cart-position/shopping-cart-position.component';
import { TripDetailsComponent } from './components/trip-details/trip-details.component';

@NgModule({
  declarations: [
    AppComponent,
    TripsComponent,
    TripComponent,
    TripCreateComponent,
    TripRatingComponent,
    TripShoppingCartComponent,
    FilterByDestinationPipe,
    FilterByPricePipe,
    FilterByDatePipe,
    FilterByStarsPipe,
    ShoppingCartPositionComponent,
    TripDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
