import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {Distributor, DistributorsService} from './service/distributors.service';

@Component({
  selector: 'app-distributors',
  templateUrl: './distributors.component.html',
  styleUrls: ['./distributors.component.css']
})
export class DistributorsComponent implements OnInit {
  displayedColumns: string[] = ['country', 'address', 'phone', 'web'];  // This has to match with the Distributor interface
  distributors: Distributor[];
  dataSource: MatTableDataSource<Distributor>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private distributorsService: DistributorsService)
  {
    this.distributors = this.distributorsService.getDistributors();
    this.dataSource = new MatTableDataSource<Distributor>(this.distributors);
  }

  ngOnInit(): void
  {
    this.dataSource.paginator = this.paginator;
  }
}
