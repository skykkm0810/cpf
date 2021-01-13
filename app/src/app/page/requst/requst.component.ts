import { Component, OnInit ,ViewChild,AfterViewInit} from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Request, REQUESTS} from '../../interface/interface';
@Component({
  selector: 'app-requst',
  templateUrl: './requst.component.html',
  styleUrls: ['./requst.component.css']
})
export class RequstComponent implements AfterViewInit {
  dataColumns: string[] = ["id", "who", "desc",'from','center','manager','requestDate','workDoneDate','progress'];
  dataSource: MatTableDataSource<Request>;
  constructor() {
    this.dataSource = new MatTableDataSource(REQUESTS);
   }
   @ViewChild('pagnator') paginator: MatPaginator;
   @ViewChild('sort') sort: MatSort;

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

}
