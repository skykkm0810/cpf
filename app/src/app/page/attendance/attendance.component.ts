import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import {Attendance , ATTENDANCE, CENTERS} from '../../interface/interface';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})

export class AttendanceComponent implements AfterViewInit {
  dataColumns: string[] = ["date", "attand", "strange","center"];
  dataSource: MatTableDataSource<Attendance>;
  centers = CENTERS;
  constructor(
    public router : Router

  ) { 
    this.dataSource = new MatTableDataSource(ATTENDANCE);
  }
  @ViewChild('pagnator') paginator: MatPaginator;
  @ViewChild('sort') sort: MatSort;

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  fuc(id : number){
    this.router.navigate(['/attendants/'+ id]);
  }
  Filter(){
    this.dataSource = new MatTableDataSource(ATTENDANCE)
    var key = document.querySelector('option:checked').textContent
    var data = new Array;
    var result : Attendance[] = [];

    if(key !== '시설 선택' ){
      data = this.dataSource.filteredData;
      for(var i=0; i<data.length; i++){
        if(data[i].center == key){
          result.push(data[i])
        }
      }
      this.dataSource = new MatTableDataSource(result)
    }
  }
}
