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

@Component({
  selector: 'app-center-a',
  templateUrl: './center-a.component.html',
  styleUrls: ['./center-a.component.css']
})
export class CenterAComponent implements AfterViewInit {

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

  constructor( private phxChannel: PhxChannelService ) {
    this.requestDataSource = new MatTableDataSource(REQUESTS);
    this.seniorDataSource = new MatTableDataSource(SENIORS);
    this.deviceDataSource = new MatTableDataSource(DEVICES);
    this.deviceLogData = new MatTableDataSource(LOG);
    phxChannel.Devices.subscribe( data => {
      console.log(data);
      // this.deviceDataSource = new MatTableDataSource(data);
    })
  }
  
  ngAfterViewInit(): void {
    // this.phxChannel.reqDevices();
    this.requestDataSource.paginator = this.paginator1;
    this.requestDataSource.sort = this.sort1;
    this.seniorDataSource.paginator = this.paginator2;
    this.seniorDataSource.sort = this.sort2;
    this.deviceDataSource.paginator = this.paginator3;
    this.deviceDataSource.sort = this.sort3;
    this.deviceLogData.paginator = this.paginator4;
    this.deviceLogData.sort = this.sort4;
  }
  
  select(){
    this.phxChannel.send(
      "device",
      "deviceAdd",
      {
        centerId: 1,
        type: '로봇',
        name: 'RB-01',
        location: '활동실',
        status: '정상'
      })
  }

}
