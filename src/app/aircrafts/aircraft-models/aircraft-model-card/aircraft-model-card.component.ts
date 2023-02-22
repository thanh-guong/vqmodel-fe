import { Component, Input, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-aircraft-model-card',
  templateUrl: './aircraft-model-card.component.html',
  styleUrls: ['./aircraft-model-card.component.css']
})
export class AircraftModelCardComponent implements OnInit {

  @Input()
  public name: string = "";

  @Input()
  public image: string = "";

  @Input()
  public id: number = -1;

  public imageLoaded: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  getAircraftModelPath(): string
  {
    return '/' + environment.aircraftModelDetailRoute + '/' + this.id;
  }

  onImageLoad(): void
  {
    this.imageLoaded = true;
  }

}
