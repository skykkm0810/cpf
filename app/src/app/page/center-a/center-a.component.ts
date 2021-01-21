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
import { FnService } from 'src/app/service/fn.service';



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
  devices: any = [];
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
    private gen: GenService,
    private fn: FnService
  ) {
    this.requestDataSource = new MatTableDataSource(REQUESTS);
    this.seniorDataSource = new MatTableDataSource(SENIORS);
    this.deviceDataSource = new MatTableDataSource([]);
    this.deviceLogData = new MatTableDataSource([]);

    phxChannel.Devices.subscribe( data => {
      this.devices = [];
      data.body.forEach( el => {
        let _d = fn.dateFormatting( el.inserted );
        this.devices.push({
          id: el.id,
          name: el.name,
          center: el.center,
          centerId: el.centerId,
          location: el.location,
          status: el.status,
          type: el.type,
          inserted: _d
        })
      })
      // if ( data.centerId == this.centerId ) {
      //   this.devices.push(data);
      // }
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
    this.phxChannel.gets('device', { centerId: this.centerId });
    // this.phxChannel.get('center', { centerId: this.centerId });
  }
  
  select(){
    this.phxChannel.send(
      "device",
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
  filterView(e){
    var number = (e.index);
    var requestFilter = document.getElementsByClassName('requestList')[0] as HTMLElement;
    var userFilter = document.getElementsByClassName('userList')[0] as HTMLElement;
    var deviceFilter = document.getElementsByClassName('deviceList')[0] as HTMLElement;

    switch (number){
      case 1 :
          requestFilter.style.display = 'block';
          userFilter.style.display = 'none';
          deviceFilter.style.display = 'none';
          break;
      case 2 :
          userFilter.style.display = 'block';
          requestFilter.style.display = 'none';
          deviceFilter.style.display = 'none';

          break;
      case 3 :
          requestFilter.style.display = 'none';
          userFilter.style.display = 'none';
          deviceFilter.style.display = 'block';
          break;
      default : 
          requestFilter.style.display = 'none';
          userFilter.style.display = 'none';
          deviceFilter.style.display = 'none';
    }
  }
  requestFilter(e : Event){
    this.requestDataSource = new MatTableDataSource(REQUESTS);
    var key =(e.target as HTMLElement).closest('.mat-radio-button').querySelector('.mat-radio-label-content').textContent.trim();
    var data = new Array;
    var result : Request[] = [];
    if( key !== '전체'){
      data = this.requestDataSource.filteredData;
      for(var i =0; i< data.length; i++){
        if(data[i].progress == key){
          result.push(data[i])
        }
      }
      this.requestDataSource = new MatTableDataSource(result);
    }
  }
  userFilter(e : Event){
    this.seniorDataSource = new MatTableDataSource(SENIORS);
    var value =(e.target as HTMLElement).closest('.mat-radio-button').querySelector('.mat-radio-label-content').textContent.trim();
    var data = new Array;
    var result : Senior[] = [];
    if( value !== '전체'){
      var extract = value.match(/\d/g);
      var key = Number(extract.join(""));
      data = this.seniorDataSource.filteredData;
      for(var i =0; i< data.length; i++){
        if(data[i].age >= key && data[i].age < key+10){
          result.push(data[i])
        }
      }
      this.seniorDataSource = new MatTableDataSource(result);
    }
  }
  deviceFilter(e : Event){
    this.deviceDataSource = new MatTableDataSource(DEVICES);
    var key =(e.target as HTMLElement).closest('.mat-radio-button').querySelector('.mat-radio-label-content').textContent.trim();
    var data = new Array;
    var result : Device[] = [];
    if( key !== '전체'){
      data = this.deviceDataSource.filteredData;
      for(var i =0; i< data.length; i++){
        if(data[i].type == key){
          result.push(data[i])
        }
      }
      console.log(result)
      this.deviceDataSource = new MatTableDataSource(result);
    }
  }
}
