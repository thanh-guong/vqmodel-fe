import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AircraftsComponent} from './aircrafts/aircrafts.component';

import { environment } from '../environments/environment';
import {ReviewsComponent} from './reviews/reviews.component';

const routes: Routes = [
  {path: environment.aircraftRoute, component: AircraftsComponent},
  {path: environment.reviewsRoute, component: ReviewsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
