import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import {Senior , SENIORS} from '../../interface/interface';
import { MatDialogRef,MatDialog} from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AttendantsAddComponent} from '../../modal/attendants-add/attendants-add.component';
@Component({
  selector: 'app-attendants',
  templateUrl: './attendants.component.html',
  styleUrls: ['./attendants.component.css']
})

export class AttendantsComponent implements AfterViewInit {
  dataColumns: string[] = ["id", "photo", "name","gender","age","desc","temp","guardian"];
  dataSource: MatTableDataSource<Senior>;
  constructor(
    public dialog: MatDialog,
  ) { 
    this.dataSource = new MatTableDataSource(SENIORS);
  }
  @ViewChild('pagnator') paginator: MatPaginator;
  @ViewChild('sort') sort: MatSort;

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  addAttandant(): void {
    const dialogRef = this.dialog.open(AttendantsAddComponent)
  }

}