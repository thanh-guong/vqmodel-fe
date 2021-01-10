import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { IAircraftClass } from '../../service/models.interface';
import { AircraftService } from '../../service/aircraft/aircraft.service';

@Component({
  selector: 'app-aircraft-classes',
  templateUrl: './aircraft-classes.component.html',
  styleUrls: ['./aircraft-classes.component.css']
})
export class AircraftClassesComponent implements OnInit {

  loading: boolean;

  aircraftClasses: IAircraftClass[];

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
