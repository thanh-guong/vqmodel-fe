import {Component, Input, OnInit} from '@angular/core';
import {AircraftModel, AircraftService, AircraftVersion} from '../../service/aircraft/aircraft.service';
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

  constructor(private aircraftService: AircraftService, private activatedRoute: ActivatedRoute)
  {

  }

  ngOnInit(): void
  {
    this.loading = true;

    this.activatedRoute.paramMap.subscribe(params => {
      this.aircraftClassId = +params.get('aircraftClassId');
    });

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
          const randomImage = randomVersion.images[Math.floor(Math.random() * versions.length)].image;
          console.log(randomImage);

          this.aircraftModels[+am].image = this.generateUrlForImage(randomImage);
        }

        console.log(this.aircraftModels);
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

  public generateUrlForImage(image: string): string
  {
    // this is not an error
    return 'http://' + environment.remoteHost + ':' + environment.remotePort + image;
  }

}
