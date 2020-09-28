import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {Distributor, DistributorsService} from '../service/distributors/distributors.service';
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-distributors',
  templateUrl: './distributors.component.html',
  styleUrls: ['./distributors.component.css']
})
export class DistributorsComponent implements OnInit {
  loading: boolean;
  displayedColumns: string[] = ['name', 'country', 'phone', 'web', ];  // This has to match with the Distributor interface
  dataSource: MatTableDataSource<Distributor>;

  constructor(private distributorsService: DistributorsService)
  {}

  ngOnInit(): void
  {
    this.loading = true;
    this.distributorsService.getAllDistributors().subscribe(
      data => {
        this.dataSource = new MatTableDataSource<Distributor>(data);
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
