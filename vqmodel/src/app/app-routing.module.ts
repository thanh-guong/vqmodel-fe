import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccessoriesComponent } from './accessories/accessories.component';
import { AircraftsComponent } from './aircrafts/aircrafts.component';
import { DistributionComponent } from './distribution/distribution.component';
import { DownloadsComponent } from './downloads/downloads.component';
import { EmailUsComponent } from './email-us/email-us.component';
import { FactoryComponent } from './factory/factory.component';
import { NewsComponent } from './news/news.component';
import { ProductReviewsComponent } from './product-reviews/product-reviews.component';
import { ShowRoomComponent } from './show-room/show-room.component';


const routes: Routes = 
[
  {path: 'accessories', component: AccessoriesComponent},
  {path: 'aircrafts', component: AircraftsComponent},
  {path: 'distribution', component: DistributionComponent},
  {path: 'downloads', component: DownloadsComponent},
  {path: 'email-us', component: EmailUsComponent},
  {path: 'factory', component: FactoryComponent},
  {path: 'news', component: NewsComponent},
  {path: 'product-reviews', component: ProductReviewsComponent},
  {path: 'showroom', component: ShowRoomComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
