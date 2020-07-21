import { Component, OnInit } from '@angular/core';
import {AircraftClass, AircraftService} from '../service/aircraft/aircraft.service';

@Component({
  selector: 'app-aircraft-classes',
  templateUrl: './aircraft-classes.component.html',
  styleUrls: ['./aircraft-classes.component.css']
})
export class AircraftClassesComponent implements OnInit {

  aircraftClasses: AircraftClass[];

  constructor(private aircraftService: AircraftService)
  {

  }

  ngOnInit(): void
  {
    this.aircraftClasses = this.aircraftService.getAircraftClasses();
  }

}
