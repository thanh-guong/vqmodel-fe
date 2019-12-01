import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card'; 
import { MatGridListModule } from '@angular/material/grid-list'; 

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { NewsComponent } from './news/news.component';
import { AircraftsComponent } from './aircrafts/aircrafts.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { EmailUsComponent } from './email-us/email-us.component';
import { DownloadsComponent } from './downloads/downloads.component';
import { ShowRoomComponent } from './show-room/show-room.component';
import { FactoryComponent } from './factory/factory.component';
import { ProductReviewsComponent } from './product-reviews/product-reviews.component';
import { DistributionComponent } from './distribution/distribution.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NewsComponent,
    AircraftsComponent,
    AccessoriesComponent,
    EmailUsComponent,
    DownloadsComponent,
    ShowRoomComponent,
    FactoryComponent,
    ProductReviewsComponent,
    DistributionComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatGridListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
