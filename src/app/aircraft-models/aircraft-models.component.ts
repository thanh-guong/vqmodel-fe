import {Component, Input, OnInit} from '@angular/core';
import { AircraftModel, AircraftService} from '../service/aircraft/aircraft.service';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-aircraft-models',
  templateUrl: './aircraft-models.component.html',
  styleUrls: ['./aircraft-models.component.css']
})
export class AircraftModelsComponent implements OnInit {

  aircraftClassId: number;

  aircraftModels: AircraftModel[];

  constructor(private aircraftService: AircraftService, private activatedRoute: ActivatedRoute)
  {

  }

  ngOnInit(): void
  {
    this.activatedRoute.paramMap.subscribe(params => {
      this.aircraftClassId = +params.get('aircraftClassId');
    });

    this.aircraftService.getAircraftModelsByClass(this.aircraftClassId).subscribe(
      data => {
        this.aircraftModels = data;
      },
    error => {console.log(error); }
    );
  }

}
