import {Component, OnInit} from '@angular/core';
import {AircraftClass, AircraftModel, AircraftService} from '../../service/aircraft/aircraft.service';
import {ActivatedRoute} from "@angular/router";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-aircraft-models',
  templateUrl: './aircraft-models.component.html',
  styleUrls: ['./aircraft-models.component.css']
})
export class AircraftModelsComponent implements OnInit {

  loading: boolean;

  aircraftClassId: number;

  aircraftModels: AircraftModel[];

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

        // extract a random picture from each model versions
        for (const am in this.aircraftModels)
        {
          let versions: object;

          versions = this.aircraftModels[+am].versions;
          console.log(versions);

          // @ts-ignore
          const randomVersion = versions[Math.floor(Math.random() * versions.length)];
          console.log(randomVersion);

          // @ts-ignore
          const randomIndex = Math.floor(Math.random() * randomVersion.images.length);
          console.log(randomIndex);
          const randomImage = randomVersion.images[randomIndex].image;
          console.log(randomImage);

          this.aircraftModels[+am].image = this.aircraftService.generateUrlForImage(randomImage);
        }

        console.log(this.aircraftModels);
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
