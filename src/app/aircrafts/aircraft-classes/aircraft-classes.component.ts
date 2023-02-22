import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { IAircraftClass } from '../../service/models.interface';
import { AircraftService } from '../../service/aircraft/aircraft.service';
import {Crumb} from '../../breadcrumbs/breadcrumbs.component';

@Component({
  selector: 'app-aircraft-classes',
  templateUrl: './aircraft-classes.component.html',
  styleUrls: ['./aircraft-classes.component.css']
})
export class AircraftClassesComponent implements OnInit {

  loading: boolean = false;

  aircraftClasses: IAircraftClass[] = [];

  breadcrumbs: Crumb[] = [{ order: 0, name: 'Aircraft Classes', url: environment.aircraftRoute}];

  constructor(private aircraftService: AircraftService)
  {

  }

  ngOnInit(): void
  {
    this.loading = true;

    if (!environment.production && environment.solitary_mode) {
      this.aircraftClasses = this.aircraftService.getAircraftClasses();
      this.loading = false;
    }

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
