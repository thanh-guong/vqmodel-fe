import {Component, Input, OnInit} from '@angular/core';
import {Crumb} from '../breadcrumbs/breadcrumbs.component';
import {IAircraftAccessory} from '../service/models.interface';
import {environment} from '../../environments/environment';
import {AccessoriesService} from '../service/accessories/accessories.service';

@Component({
  selector: 'app-accessories',
  templateUrl: './accessories.component.html',
  styleUrls: ['./accessories.component.css']
})
export class AccessoriesComponent implements OnInit {

  loading: boolean;

  accessories: IAircraftAccessory[];

  constructor(private accessoriesService: AccessoriesService) { }

  ngOnInit(): void
  {
    this.loading = false;

    this.accessoriesService.getAllAccessories().subscribe(
      data => {
        this.accessories = data;
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
