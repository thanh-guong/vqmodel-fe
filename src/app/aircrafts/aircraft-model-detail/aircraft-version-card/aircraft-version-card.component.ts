import {Component, Input, OnInit} from '@angular/core';
import {IAircraftVersion} from '../../../service/models.interface';

@Component({
  selector: 'app-aircraft-version-card',
  templateUrl: './aircraft-version-card.component.html',
  styleUrls: ['./aircraft-version-card.component.css']
})
export class AircraftVersionCardComponent implements OnInit {

  @Input()
  public aircraftVersion: IAircraftVersion;

  public carouselImagesUrls: [{}] = [{}];

  constructor() { }

  ngOnInit(): void
  {

  }
}
