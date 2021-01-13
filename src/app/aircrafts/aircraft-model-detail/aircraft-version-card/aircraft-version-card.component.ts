import {Component, Input, OnInit} from '@angular/core';
import {IAircraftVersion, IImage} from '../../../service/models.interface';

@Component({
  selector: 'app-aircraft-version-card',
  templateUrl: './aircraft-version-card.component.html',
  styleUrls: ['./aircraft-version-card.component.css']
})
export class AircraftVersionCardComponent implements OnInit {

  @Input()
  public name: string;

  @Input()
  public image: IImage;

  @Input()
  public productCode: string;

  public imageLoaded: boolean;

  constructor() { }

  ngOnInit(): void
  {

  }

  onImageLoad(): void
  {
    this.imageLoaded = true;
  }
}
