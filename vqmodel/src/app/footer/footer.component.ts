import { Component, OnInit } from '@angular/core';

export interface Tile
{
  cols: number;
  routerLink: string;
  rows: number;
  text: string;
}

@Component
({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

export class FooterComponent implements OnInit {

  tiles: Tile[] = [
    {text: 'News', routerLink: 'news' , cols: 1, rows: 1},
    {text: 'Aircrafts', routerLink: 'aircrafts' ,cols: 1, rows: 1},
    {text: 'Accessories', routerLink: 'accessories' ,cols: 1, rows: 1},
    {text: 'Email us', routerLink: 'email-us' ,cols: 1, rows: 1},
    {text: 'Downloads', routerLink: 'downloads' , cols: 1, rows: 1},
    {text: 'Showroom', routerLink: 'showroom' ,cols: 1, rows: 1},
    {text: 'Factory', routerLink: 'factory' ,cols: 1, rows: 1},
    {text: 'Product reviews', routerLink: 'product-reviews' ,cols: 1, rows: 1},
    {text: 'Distribution', routerLink: 'distribution' ,cols: 1, rows: 1},
  ];

  constructor() 
  { 

  }

  ngOnInit() 
  {

  }

}
