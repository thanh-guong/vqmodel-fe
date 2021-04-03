import {Component, Input, OnInit} from '@angular/core';
import {IAircraftModel, IImage} from '../../service/models.interface';
import {environment} from '../../../environments/environment';
import {AircraftService} from "../../service/aircraft/aircraft.service";

@Component({
  selector: 'app-accessory-card',
  templateUrl: './accessory-card.component.html',
  styleUrls: ['./accessory-card.component.css']
})
export class AccessoryCardComponent implements OnInit {

  @Input()
  id: number;

  @Input()
  name: string;

  @Input()
  productCode: string;

  @Input()
  modelId: number;

  @Input()
  image: IImage;

  aircraftModelName: string;

  public imageLoaded: boolean;

  constructor(private aircraftService: AircraftService) { }

  ngOnInit(): void {
    this.aircraftService.getAircraftModelById(this.modelId).subscribe(
      data => {
        this.aircraftModelName = data.name;
      }
    );
  }

  getAircraftModelPath(): string
  {
    return '/' + environment.aircraftModelDetailRoute + '/' + this.modelId;
  }

  onImageLoad(): void
  {
    this.imageLoaded = true;
  }
}
