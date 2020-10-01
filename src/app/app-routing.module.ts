import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { environment } from '../environments/environment';
import {ReviewsComponent} from './reviews/reviews.component';
import {DistributorsComponent} from './distributors/distributors.component';
import {ContactUsComponent} from './contact-us/contact-us.component';
import {AircraftClassesComponent} from './aircraft-classes/aircraft-classes.component';
import {AircraftModelsComponent} from './aircraft-models/aircraft-models.component';
import {AircraftVersionsComponent} from './aircraft-versions/aircraft-versions.component';

const routes: Routes = [
  {path: environment.aircraftRoute, component: AircraftClassesComponent},
  {path: environment.aircraftModelsRoute + '/:aircraftClassId', component: AircraftModelsComponent},
  {path: environment.aircraftVersionRemoteRoute + '/:aircraftModelId', component: AircraftVersionsComponent},
  {path: environment.reviewsRoute, component: ReviewsComponent},
  {path: environment.distributorsRoute, component: DistributorsComponent},
  {path: environment.contactUsRoute, component: ContactUsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
