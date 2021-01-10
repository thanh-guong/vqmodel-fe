import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {IAircraftModel, IAircraftVersion} from '../../service/models.interface';
import {AircraftService} from '../../service/aircraft/aircraft.service';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-aircraft-model-detail',
  templateUrl: './aircraft-model-detail.component.html',
  styleUrls: ['./aircraft-model-detail.component.css']
})
export class AircraftModelDetailComponent implements OnInit {

  loading: boolean;

  aircraftModelId: number;

  public aircraftVersions: IAircraftVersion[];

  public aircraftModel: IAircraftModel;

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
      },
      error => {
        if (!environment.production)
        {
          console.log(error);
        }
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
          this.loading = false;
        }

        this.loading = false;
      }
    );
  }

}
