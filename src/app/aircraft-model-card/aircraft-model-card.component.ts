import {Component, Input, OnInit} from '@angular/core';
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-aircraft-model-card',
  templateUrl: './aircraft-model-card.component.html',
  styleUrls: ['./aircraft-model-card.component.css']
})
export class AircraftModelCardComponent implements OnInit {

  @Input()
  public name: string;

  @Input()
  public image: string;

  @Input()
  public id: number;

  constructor() { }

  ngOnInit(): void {
  }

  getAircraftModelPath(): string
  {
    return '/' + environment.aircraftVersionRemoteRoute + '/' + this.id;
  }

}
