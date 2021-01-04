import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import {NOTICELIST , NoticeList} from '../../interface/interface';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notice-list',
  templateUrl: './notice-list.component.html',
  styleUrls: ['./notice-list.component.css']
})
export class NoticeListComponent implements AfterViewInit {
  dataColumns: string[] = ["paperNum", "title", "update"];
  dataSource: MatTableDataSource<NoticeList>;
  constructor(
    public router : Router

  ) { 
    this.dataSource = new MatTableDataSource(NOTICELIST);
  }
  @ViewChild('pagnator') paginator: MatPaginator;
  @ViewChild('sort') sort: MatSort;

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  add(){
    this.router.navigate(['/noticeAdd/']);
  }
  detail(){
    this.router.navigate(['/noticeDetail/']);
  }
}
