import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {environment} from '../../../environments/environment';
import {IAircraftModel} from '../../service/models.interface';
import {AircraftService} from '../../service/aircraft/aircraft.service';

@Component({
  selector: 'app-aircraft-models',
  templateUrl: './aircraft-models.component.html',
  styleUrls: ['./aircraft-models.component.css']
})
export class AircraftModelsComponent implements OnInit {

  loading: boolean;

  aircraftClassId: number;

  aircraftModels: IAircraftModel[];

  aircraftClassName: string;

  constructor(private aircraftService: AircraftService, private activatedRoute: ActivatedRoute)
  {
  }

  ngOnInit(): void
  {
    this.loading = true;

    this.activatedRoute.paramMap.subscribe(params => {
      this.aircraftClassId = +params.get('aircraftClassId');
    });

    this.aircraftService.getAircraftClassById(this.aircraftClassId).subscribe(
      data => {
        this.aircraftClassName = data.name;
        this.loading = false;
      },
      error => {
        if (!environment.production) {
          console.log(error);
        }
      }
    );

    // get aircraft models
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

        this.loading = false;
      }
    );
  }

}
