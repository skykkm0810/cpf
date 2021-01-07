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
import { GenService } from '../../service/gen.service';
import { min } from 'date-fns';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CenterAddComponent} from '../../modal/center-add/center-add.component';
import { CenterUpdateComponent} from '../../modal/center-update/center-update.component';

@Component({
  selector: 'app-center-a',
  templateUrl: './center-a.component.html',
  styleUrls: ['./center-a.component.css']
})
export class CenterAComponent implements AfterViewInit {

  centerId = 1;

  center: any;

  timelines = TIMELINES;
  deviceCalled: boolean = false;
  devices: Device[] = [];
  seniors: Senior[] = [];

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
    private phxChannel: PhxChannelService,
    private gen: GenService
  ) {
    this.requestDataSource = new MatTableDataSource(REQUESTS);
    this.seniorDataSource = new MatTableDataSource(SENIORS);
    this.deviceDataSource = new MatTableDataSource([]);
    this.deviceLogData = new MatTableDataSource([]);

    phxChannel.Devices.subscribe( data => {
      if ( data.centerId == this.centerId ) {
        this.devices.push(data);
      }
      this.deviceDataSource = new MatTableDataSource(this.devices);
    })
    phxChannel.Seniors.subscribe( data => {
      this.seniors.push(data);
      this.seniorDataSource = new MatTableDataSource(this.seniors);
    })
    phxChannel.Center.subscribe( data => {
      console.log(data);
      // this.center = data;
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
    this.phxChannel.gets('device');
    this.phxChannel.get('center', { centerId: this.centerId });
  }
  
  select(){
    this.phxChannel.send(
      "device",
      "device:add",
      this.gen.genDevice()
    )
  }

  intoRestroom(event: Event) {
    var thisTime = new Date().getHours() + ":" +new Date().getMinutes() + ":" + new Date().getSeconds();
    var thisElement = (event.target as HTMLElement);
    var useage = (event.target as HTMLElement).querySelector('.useOrNot') as HTMLElement;
    var usedTime = thisElement.querySelector('.usedtime') as HTMLElement;
    var intoTime = thisElement.querySelector('.intoTime .time') as HTMLElement;
    var flowtime = thisElement.querySelector('.timeflow') as HTMLElement;
    // var seconds = 0;
    // var minutes = 0;
    // var flowing;
    // var time: null | ReturnType<typeof setInterval>
    // time = window.setInterval(function(){
    //   seconds = seconds + 1
    //   if(seconds == 60){
    //     seconds = 0; 
    //     minutes = minutes + 1;
    //   }
    //   if (minutes > 0 ){
    //     flowing =minutes+"분 "+ seconds+"초"
    //   }
    //   else{
    //     flowing = seconds+"초";
    //   }
    //   return flowing;
    // },1000)
    if(thisElement.classList.contains('using')){
      thisElement.classList.remove('using');
      usedTime.innerHTML = thisTime;
      useage.innerHTML = '비어 있음';
    }
    else{
      thisElement.classList.add('using');
      
      useage.innerHTML = '사용중';
      intoTime.innerHTML = thisTime;
      // flowtime.innerHTML = time;
    }
  }

  addCenter(){
    const dialogRef = this.dialog.open(CenterAddComponent, {
      width: '40%',
    });
  }
  updateCenter(){
    const dialogRef2 = this.dialog.open(CenterUpdateComponent, {
      width: '40%',
    });
  }
}
