import { Component, OnInit } from '@angular/core';
import { AircraftModel, AircraftService} from '../service/aircraft/aircraft.service';

@Component({
  selector: 'app-aircraft-models',
  templateUrl: './aircraft-models.component.html',
  styleUrls: ['./aircraft-models.component.css']
})
export class AircraftModelsComponent implements OnInit {

  aircraftModels: AircraftModel[];

  constructor(private aircraftService: AircraftService)
  {

  }

  ngOnInit(): void
  {
    this.aircraftModels = this.aircraftService.getAircraftModels();
  }

}
