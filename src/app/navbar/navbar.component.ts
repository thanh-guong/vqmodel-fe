import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

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

  constructor()
  {

  }

  ngOnInit(): void
  {

  }

}
