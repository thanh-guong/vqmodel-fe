import { Component } from '@angular/core';
import { environment } from '../environments/environment';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{

  title = 'vqmodel';

  public aircrafts =
    {
      name: 'Aircrafts',
      icon: 'airplanemode_active',
      route: environment.aircraftRoute,
    };

  public reviews =
    {
      name: 'Reviews',
      icon: 'book_online',
      route: environment.reviewsRoute,
    };

  public distributors =
    {
      name: 'Distributors',
      icon: 'send',
      route: environment.distributorsRoute,
    };

  public contactUs =
    {
      name: 'Contact us',
      icon: 'email',
      route: environment.contactUsRoute,
    };

  constructor(public router: Router)
  {

  }
}
