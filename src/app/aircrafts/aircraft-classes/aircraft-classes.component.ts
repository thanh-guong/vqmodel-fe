import { Component, OnInit } from '@angular/core';
import {AircraftClass, AircraftService} from '../../service/aircraft/aircraft.service';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-aircraft-classes',
  templateUrl: './aircraft-classes.component.html',
  styleUrls: ['./aircraft-classes.component.css']
})
export class AircraftClassesComponent implements OnInit {

  loading: boolean;

  aircraftClasses: AircraftClass[];

  constructor(private aircraftService: AircraftService)
  {

  }

  ngOnInit(): void
  {
    this.loading = true;

    this.aircraftService.getAllAircraftClasses().subscribe(
      data => {
      this.aircraftClasses = data;
      this.loading = false;
    },
        error => {
        if (!environment.production)
        {
          console.log(error);
        }

        this.loading = false;
      });
  }

}
