import {Component, Input, OnInit} from '@angular/core';
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-aircraft-version-card',
  templateUrl: './aircraft-version-card.component.html',
  styleUrls: ['./aircraft-version-card.component.css']
})
export class AircraftVersionCardComponent implements OnInit {

  @Input()
  public name: string;

  @Input()
  public images;

  @Input()
  public id: number;

  public image: string;

  constructor()
  {

  }

  generateUrlForImage(index: number): string
  {
    return this.image = 'http://' + environment.remoteHost + ':' + environment.remotePort + this.images[index].image;
  }

  ngOnInit(): void
  {
    let nextIndex = 1;

    setTimeout(() =>
    {
      this.image = this.generateUrlForImage(nextIndex);
      nextIndex++;
    },
      3000);
  }

}
