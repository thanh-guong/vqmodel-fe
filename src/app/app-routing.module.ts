import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AircraftsComponent} from './aircrafts/aircrafts.component';

import { environment } from '../environments/environment';
import {ReviewsComponent} from './reviews/reviews.component';
import {DistributorsComponent} from './distributors/distributors.component';
import {FactoryComponent} from './factory/factory.component';
import {ContactUsComponent} from './contact-us/contact-us.component';

const routes: Routes = [
  {path: environment.aircraftRoute, component: AircraftsComponent},
  {path: environment.factoryRoute, component: FactoryComponent},
  {path: environment.reviewsRoute, component: ReviewsComponent},
  {path: environment.distributorsRoute, component: DistributorsComponent},
  {path: environment.contactUsRoute, component: ContactUsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
