import { Component } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'vqmodel';
  aircraftRoute = environment.aircraftRoute;

  public aircrafts =
    {
      name: 'Aircrafts',
      icon: 'airplanemode_active'
    };

  public factory =
    {
      name: 'Factory',
      icon: 'construction'
    };

  public reviews =
    {
      name: 'Reviews',
      icon: 'book_online'
    };

  public distributors =
    {
      name: 'Distributors',
      icon: 'send'
    };

  public contactUs =
    {
      name: 'Contact us',
      icon: 'email'
    };
}
