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
import { ReviewCardComponent } from './review-card/review-card.component';
import { DistributorsComponent } from './distributors/distributors.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import { ToolbarButtonComponent } from './toolbar-button/toolbar-button.component';
import { FactoryComponent } from './factory/factory.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import {MatInputModule} from '@angular/material/input';
import {ReactiveFormsModule} from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AircraftClassesComponent } from './aircraft-classes/aircraft-classes.component';
import { AircraftClassCardComponent } from './aircraft-class-card/aircraft-class-card.component';
import { AircraftModelsComponent } from './aircraft-models/aircraft-models.component';
import { AircraftModelCardComponent } from './aircraft-model-card/aircraft-model-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ReviewsComponent,
    ReviewCardComponent,
    DistributorsComponent,
    ToolbarButtonComponent,
    FactoryComponent,
    ContactUsComponent,
    HomeComponent,
    AircraftClassesComponent,
    AircraftClassCardComponent,
    AircraftModelsComponent,
    AircraftModelCardComponent,
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
