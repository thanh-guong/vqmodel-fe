import {Component, OnInit} from '@angular/core';
import { environment } from '../../environments/environment';
import { DistributorsService } from '../service/distributors/distributors.service';
import {IDistributor} from '../service/models.interface';

@Component({
  selector: 'app-distributors',
  templateUrl: './distributors.component.html',
  styleUrls: ['./distributors.component.css']
})
export class DistributorsComponent implements OnInit {
  loading: boolean;
  distributors: IDistributor[];

  constructor(private distributorsService: DistributorsService)
  {}

  ngOnInit(): void
  {
    this.loading = true;
    this.distributorsService.getAllDistributors().subscribe(
      data => {
        this.distributors = data;
        this.loading = false;
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
