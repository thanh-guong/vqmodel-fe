import {Component, Input, OnInit} from '@angular/core';
import { AircraftModel, AircraftService} from '../service/aircraft/aircraft.service';
import {ActivatedRoute} from "@angular/router";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-aircraft-models',
  templateUrl: './aircraft-models.component.html',
  styleUrls: ['./aircraft-models.component.css']
})
export class AircraftModelsComponent implements OnInit {

  loading: boolean;

  aircraftClassId: number;

  aircraftModels: AircraftModel[];

  constructor(private aircraftService: AircraftService, private activatedRoute: ActivatedRoute)
  {

  }

  ngOnInit(): void
  {
    this.loading = true;

    this.activatedRoute.paramMap.subscribe(params => {
      this.aircraftClassId = +params.get('aircraftClassId');
    });

    this.aircraftService.getAircraftModelsByClass(this.aircraftClassId).subscribe(
      data => {
        this.aircraftModels = data;
        this.loading = false;
      },
    error => {
        if (!environment.production)
        {
          console.log(error);
        }

        this.loading = true;
      }
    );
  }

}
