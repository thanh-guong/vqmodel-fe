import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-aircraft-card',
  templateUrl: './aircraft-card.component.html',
  styleUrls: ['./aircraft-card.component.css']
})
export class AircraftCardComponent implements OnInit {

  @Input()
  public name: string;

  @Input()
  public image: string;

  constructor() { }

  ngOnInit(): void {
  }

}
