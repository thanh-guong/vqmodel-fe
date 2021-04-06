import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { ReviewsComponent } from './reviews/reviews.component';
import { ReviewCardComponent } from './reviews/review-card/review-card.component';
import { DistributorsComponent } from './distributors/distributors.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import { ToolbarButtonComponent } from './toolbar-button/toolbar-button.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import {MatInputModule} from '@angular/material/input';
import {ReactiveFormsModule} from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AircraftClassesComponent } from './aircrafts/aircraft-classes/aircraft-classes.component';
import { AircraftClassCardComponent } from './aircrafts/aircraft-classes/aircraft-class-card/aircraft-class-card.component';
import { AircraftModelsComponent } from './aircrafts/aircraft-models/aircraft-models.component';
import { AircraftModelCardComponent } from './aircrafts/aircraft-models/aircraft-model-card/aircraft-model-card.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { AircraftVersionCardComponent } from './aircrafts/aircraft-model-detail/aircraft-version-card/aircraft-version-card.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { AircraftModelDetailComponent } from './aircrafts/aircraft-model-detail/aircraft-model-detail.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { DistributorCardComponent } from './distributors/distributor-card/distributor-card.component';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { AccessoryCardComponent } from './accessories/accessory-card/accessory-card.component';
import { FooterComponent } from './footer/footer.component';
import { WhoMadeThisWebsiteComponent } from './who-made-this-website/who-made-this-website.component';
import { ThanhGuongComponent } from './thanh-guong/thanh-guong.component';

@NgModule({
  declarations: [
    AppComponent,
    ReviewsComponent,
    ReviewCardComponent,
    DistributorsComponent,
    ToolbarButtonComponent,
    ContactUsComponent,
    HomeComponent,
    AircraftClassesComponent,
    AircraftClassCardComponent,
    AircraftModelsComponent,
    AircraftModelCardComponent,
    ProgressBarComponent,
    AircraftVersionCardComponent,
    AircraftModelDetailComponent,
    DistributorCardComponent,
    BreadcrumbsComponent,
    AccessoriesComponent,
    AccessoryCardComponent,
    FooterComponent,
    WhoMadeThisWebsiteComponent,
    ThanhGuongComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FlexLayoutModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatCardModule,
        MatGridListModule,
        MatPaginatorModule,
        MatTableModule,
        MatInputModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule,
        HttpClientModule,
        MatProgressBarModule,
        IvyCarouselModule,
        MatProgressSpinnerModule,
        ClipboardModule,
        MatSnackBarModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
