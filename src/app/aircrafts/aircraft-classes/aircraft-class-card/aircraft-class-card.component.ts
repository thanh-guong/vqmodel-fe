import {Component, Input, OnInit} from '@angular/core';
import {environment} from '../../../../environments/environment';

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

  @Input()
  public id: number;

  public imageLoaded: boolean;

  constructor() { }

  ngOnInit(): void { }

  getAircraftModelPath(): string
  {
    return '/' + environment.aircraftModelsRoute + '/' + this.id;
  }

  onImageLoad(): void
  {
    this.imageLoaded = true;
  }
}
