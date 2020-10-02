import { Component, OnInit } from '@angular/core';
import {AircraftModel, AircraftService, AircraftVersion} from "../../service/aircraft/aircraft.service";
import {ActivatedRoute} from "@angular/router";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-aircraft-model-detail',
  templateUrl: './aircraft-model-detail.component.html',
  styleUrls: ['./aircraft-model-detail.component.css']
})
export class AircraftModelDetailComponent implements OnInit {

  loading: boolean;

  aircraftModelId: number;

  public aircraftVersions: AircraftVersion[];

  public aircraftModel: AircraftModel;

  public aircraftModelName = 'AircraftModelName';

  constructor(private aircraftService: AircraftService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void
  {
    this.loading = true;

    this.activatedRoute.paramMap.subscribe(params => {
      this.aircraftModelId = +params.get('aircraftModelId');
    });

    // asks for aircraft versions using this model id
    this.aircraftService.getAircraftVersionsByModel(this.aircraftModelId).subscribe(
      data => {
        this.aircraftVersions = data;
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

    // asks for aircraft model
    this.aircraftService.getAircraftModelById(this.aircraftModelId).subscribe(
      data => {
        this.aircraftModel = data;
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
