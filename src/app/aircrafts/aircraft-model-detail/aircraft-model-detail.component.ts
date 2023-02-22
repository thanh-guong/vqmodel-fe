import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {IAircraftModel, IAircraftVersion} from '../../service/models.interface';
import {AircraftService} from '../../service/aircraft/aircraft.service';
import {environment} from '../../../environments/environment';
import {Crumb} from '../../breadcrumbs/breadcrumbs.component';

@Component({
  selector: 'app-aircraft-model-detail',
  templateUrl: './aircraft-model-detail.component.html',
  styleUrls: ['./aircraft-model-detail.component.css']
})
export class AircraftModelDetailComponent implements OnInit {

  loading: boolean = false;

  aircraftModelId: number = -1;

  public aircraftVersions: IAircraftVersion[] = [];

  public aircraftModel!: IAircraftModel;

  public aircraftModelName = 'AircraftModelName';

  breadcrumbs: Crumb[] = [];

  constructor(private aircraftService: AircraftService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void
  {
    this.loading = true;

    this.activatedRoute.paramMap.subscribe(params => {
      // @ts-ignore
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

        this.setBreadCrumbs();
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

  setBreadCrumbs(): void
  {
    this.breadcrumbs = [
      { order: 0, name: 'Aircraft Classes', url: environment.aircraftRoute },
      { order: 1, name: this.aircraftModel.aircraft_class.name, url: environment.aircraftModelsRoute + '/' + this.aircraftModel.aircraft_class.id },
      { order: 2, name: this.aircraftModel.name, url: environment.aircraftModelDetailRoute + '/' + this.aircraftModel.id }
    ];
  }

}
