import { Component, OnInit } from '@angular/core';
import {environment} from '../../environments/environment';
import {AircraftModel, AircraftService, AircraftVersion} from '../service/aircraft/aircraft.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-aircraft-versions',
  templateUrl: './aircraft-versions.component.html',
  styleUrls: ['./aircraft-versions.component.css']
})
export class AircraftVersionsComponent implements OnInit {

  loading: boolean;

  aircraftModelId: number;

  aircraftVersions: AircraftVersion[];

  constructor(private aircraftService: AircraftService, private activatedRoute: ActivatedRoute)
  {

  }

  ngOnInit(): void
  {
    this.loading = true;

    this.activatedRoute.paramMap.subscribe(params => {
      this.aircraftModelId = +params.get('aircraftModelId');
    });

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
  }

}
