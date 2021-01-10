import {Component, Input, OnInit} from '@angular/core';
import {IAircraftVersion} from '../../../service/models.interface';

@Component({
  selector: 'app-aircraft-version-card',
  templateUrl: './aircraft-version-card.component.html',
  styleUrls: ['./aircraft-version-card.component.css']
})
export class AircraftVersionCardComponent implements OnInit {

  @Input()
  public name: string;

  @Input()
  public image: string;

  @Input()
  public id: number;

  public imageLoaded: boolean;

  @Input()
  public aircraftVersion: IAircraftVersion;

  constructor() { }

  ngOnInit(): void
  {

  }

  onImageLoad(): void
  {
    this.imageLoaded = true;
  }
}
