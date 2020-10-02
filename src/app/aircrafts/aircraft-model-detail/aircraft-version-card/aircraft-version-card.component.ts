import {Component, Input, OnInit} from '@angular/core';
import {environment} from '../../../../environments/environment';
import {AircraftVersion} from '../../../service/aircraft/aircraft.service';

@Component({
  selector: 'app-aircraft-version-card',
  templateUrl: './aircraft-version-card.component.html',
  styleUrls: ['./aircraft-version-card.component.css']
})
export class AircraftVersionCardComponent implements OnInit {

  @Input()
  public aircraftVersion: AircraftVersion;

  public carouselImagesUrls: [{}] = [{}];

  constructor() { }

  ngOnInit(): void
  {
    console.log(this.aircraftVersion);

    // iterate over aircraft model images
    for (const key in this.aircraftVersion.images)
    {
      const url = this.generateUrlForImage(+key);
      this.carouselImagesUrls.push({path: url});
    }

    // remove the first (empty) item
    this.carouselImagesUrls.shift();
  }

  generateUrlForImage(index: number): string
  {
    // @ts-ignore
    return 'http://' + environment.remoteHost + ':' + environment.remotePort + this.aircraftVersion.images[index].image;
  }

}
