import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Timeline, TIMELINES } from '../../interface/interface';
import { Device, DEVICES } from '../../interface/interface';
import { Senior, SENIORS } from '../../interface/interface';
import { Request, REQUESTS } from '../../interface/interface';

import { PhxChannelService } from '../../service/phx-channel.service';
import { GenService } from '../../service/gen.service';

@Component({
  selector: 'app-center-a',
  templateUrl: './center-a.component.html',
  styleUrls: ['./center-a.component.css']
})
export class CenterAComponent implements AfterViewInit {

  timelines = TIMELINES;
  deviceCalled : boolean = false;

  requestDisplayedColumns: string[] = [ 'id', 'progress', 'from', 'desc', 'who' ];
  requestDataSource: MatTableDataSource<Request>;
  seniorDisplayedColumns: string[] = [ 'id', 'name', 'gender', 'age', 'desc', 'latest' ];
  seniorDataSource: MatTableDataSource<Senior>;
  deviceDisplayedColumns: string[] = [ 'id', 'type', 'name', 'location', 'status' ];
  deviceDataSource: MatTableDataSource<Device>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor( 
    private phxChannel: PhxChannelService,
    private gen: GenService
    ) {
    this.requestDataSource = new MatTableDataSource(REQUESTS);
    this.seniorDataSource = new MatTableDataSource(SENIORS);
    this.deviceDataSource = new MatTableDataSource(DEVICES);
    phxChannel.Devices.subscribe( data => {
      console.log(data);
      // this.deviceDataSource = new MatTableDataSource(data);
    })
  }
  
  ngAfterViewInit(): void {
    // this.phxChannel.reqDevices();
    this.deviceDataSource.paginator = this.paginator;
    this.deviceDataSource.sort = this.sort;
  }
  
  select(){
    this.deviceCalled = true;
    this.phxChannel.send(
      "device",
      "device:add",
      this.gen.genDevice()
    )
  }
}
