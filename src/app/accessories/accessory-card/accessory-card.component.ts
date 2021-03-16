import {Component, Input, OnInit} from '@angular/core';
import {IAircraftModel} from '../../service/models.interface';
import {environment} from "../../../environments/environment";

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
  model: IAircraftModel;

  constructor() { }

  ngOnInit(): void {
  }

  getAircraftModelPath(): string
  {
    return environment.aircraftModelsRoute + '/' + this.model.id;
  }
}
