import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Timeline, TIMELINES } from '../../interface/interface';
import { Device, DEVICES } from '../../interface/interface';
import { Senior, SENIORS } from '../../interface/interface';
import { Request, REQUESTS } from '../../interface/interface';
import {log, LOG} from '../../interface/interface';
import { PhxChannelService } from '../../service/phx-channel.service';
import { CenterAddComponent} from '../../modal/center-add/center-add.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-center-b',
  templateUrl: './center-b.component.html',
  styleUrls: ['./center-b.component.css']
})
export class CenterBComponent implements AfterViewInit {

  timelines = TIMELINES;

  requestDisplayedColumns: string[] = [ 'id', 'progress', 'from', 'desc', 'who' ];
  requestDataSource: MatTableDataSource<Request>;
  seniorDisplayedColumns: string[] = [ 'id', 'name', 'gender', 'age', 'desc', 'latest' ];
  seniorDataSource: MatTableDataSource<Senior>;
  deviceDisplayedColumns: string[] = [ 'id', 'type', 'name', 'location', 'status' ];
  deviceDataSource: MatTableDataSource<Device>;
  deviceLogColumns: string[] = [ 'id','time',  'name', 'type', 'location', 'desc' ];
  deviceLogData: MatTableDataSource<log>;

  @ViewChild('pagnator1') paginator1: MatPaginator;
  @ViewChild('sort1') sort1: MatSort;
  @ViewChild('pagnator2') paginator2: MatPaginator;
  @ViewChild('sort2') sort2: MatSort;
  @ViewChild('pagnator3') paginator3: MatPaginator;
  @ViewChild('sort3') sort3: MatSort;
  @ViewChild('pagnator4') paginator4: MatPaginator;
  @ViewChild('sort4') sort4: MatSort;

  constructor(
    public dialog: MatDialog,
    ) {
    
    this.requestDataSource = new MatTableDataSource(REQUESTS);
    this.seniorDataSource = new MatTableDataSource(SENIORS);
    this.deviceDataSource = new MatTableDataSource(DEVICES);
    this.deviceLogData = new MatTableDataSource(LOG);
  }

  ngAfterViewInit(): void {
    this.requestDataSource.paginator = this.paginator1;
    this.requestDataSource.sort = this.sort1;
    this.seniorDataSource.paginator = this.paginator2;
    this.seniorDataSource.sort = this.sort2;
    this.deviceDataSource.paginator = this.paginator3;
    this.deviceDataSource.sort = this.sort3;
    this.deviceLogData.paginator = this.paginator4;
    this.deviceLogData.sort = this.sort4;
  }
  addCenter(){
    const dialogRef = this.dialog.open(CenterAddComponent, {
      width: '40%',
    });
  }
}
