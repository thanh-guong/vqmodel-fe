import { Component, OnInit } from '@angular/core';
import {environment} from '../../environments/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  aircraftRoute = environment.aircraftRoute;
  accessoriesRoute = environment.accessories;
  reviewsRoute = environment.reviewsRoute;
  distributorsRoute = environment.distributorsRoute;
  contactusRoute = environment.contactUsRoute;
  whoMadeThisWebsiteRoute = environment.whoMadeThisWebsiteRoute;

  constructor() { }

  ngOnInit(): void {
  }

}
