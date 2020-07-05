import { Component, OnInit } from '@angular/core';
import {AircraftClass, AircraftsService} from './service/aircrafts.service';

@Component({
  selector: 'app-aircrafts',
  templateUrl: './aircrafts.component.html',
  styleUrls: ['./aircrafts.component.css']
})
export class AircraftsComponent implements OnInit {

  aircrafts: AircraftClass[];

  constructor(private aircraftsService: AircraftsService)
  {

  }

  ngOnInit(): void
  {
    this.aircrafts = this.aircraftsService.getAircraftClasses();
  }

}
