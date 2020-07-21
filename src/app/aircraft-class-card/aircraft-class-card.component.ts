import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-aircraft-class-card',
  templateUrl: './aircraft-class-card.component.html',
  styleUrls: ['./aircraft-class-card.component.css']
})
export class AircraftClassCardComponent implements OnInit {

  @Input()
  public name: string;

  @Input()
  public image: string;

  constructor() { }

  ngOnInit(): void {
  }

}
