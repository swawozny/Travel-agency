import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TripsComponent } from './components/trips/trips.component';
import { TripCreateComponent } from './components/trip-create/trip-create.component';
import { TripShoppingCartComponent } from './components/trip-shopping-cart/trip-shopping-cart.component';
import { TripDetailsComponent } from './components/trip-details/trip-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'trips', pathMatch: 'full' },
  { path: 'trips', component: TripsComponent },
  { path: 'add', component: TripCreateComponent },
  { path: 'shopping-cart', component: TripShoppingCartComponent },
  { path: 'trips/:id', component: TripDetailsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
