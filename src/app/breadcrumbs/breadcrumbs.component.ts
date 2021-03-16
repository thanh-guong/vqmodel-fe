import {Component, Input, OnInit} from '@angular/core';

export interface Crumb
{
  order: number;
  name: string;
  url: string;
}

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnInit {

  @Input()
  crumbs: Crumb[];

  isLast = false;

  constructor() { }

  ngOnInit(): void
  {
    // this transforms the crumbs list in an ordered (using order as key) list
    this.crumbs.sort((a, b) => a.order - b.order);
  }

}
