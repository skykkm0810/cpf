import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Activity, activityHeader, ACTIVITIES, activityFilter } from '../../interface/interface';
import { ActivityAddComponent} from '../../modal/activity-add/activity-add.component';
import { ActivityDetailComponent} from '../../modal/activity-detail/activity-detail.component';
import { ActivityUpdateComponent} from '../../modal/activity-update/activity-update.component';
import { PhxChannelService } from 'src/app/service/phx-channel.service';
import { convertActionBinding } from '@angular/compiler/src/compiler_util/expression_converter';


@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.css']
})
export class ActivityListComponent implements AfterViewInit {

  allComplete: boolean = false;
  
  displayedColumns: string[] = activityHeader;
  dataSource: MatTableDataSource<any>;
  activities: any = [];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  filter = activityFilter
  
  constructor(
    public dialog: MatDialog,
    public dialog2: MatDialog,
    public dialog3: MatDialog,
    private phxChannel: PhxChannelService
  ) {
    this.dataSource = new MatTableDataSource([]);
    phxChannel.Activities.subscribe( data => {
      this.activities = [];
      data.forEach( el => {
        // console.log(el.center[0].name);
        let con
        if ( el.contact == null ) {
          con = el.instructor[0].contact;
        } else {
          con = el.contact;
        }
        // console.log(con);
        this.activities.push({
          id: el.id,
          name: el.name,
          contact: con,
          center: el.center[0].name,
          centerId: el.center[0].id,
          instructor: el.instructor[0].name,
          instructorId: el.instructor[0].id,
          progress: el.progress,
          datetime: el.datetime
        })
      })
      this.dataSource = new MatTableDataSource(this.activities);
    })
  }
  
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.phxChannel.gets("activity", '');
  }
  addActivity() {
    const dialogRef = this.dialog.open(ActivityAddComponent, {
      width: '40%',
    });
  }
  detailActivity(event:Event) {
    var thisElement = event.target as HTMLElement;
    if(thisElement.classList.contains('mat-button-wrapper') || thisElement.classList.contains('float-right')){
      event.preventDefault()
    }
    else {
      const dialogRef2 = this.dialog2.open(ActivityDetailComponent, {
        width: '600px'
      });
    }
  }
  updateActivity( info ) {
    const dialogRef = this.dialog3.open(ActivityUpdateComponent, {
      width: '40%', data: info
    });
  }
  removeActivity( info ){
    if(confirm('삭제하시겠습니까?')){
      this.phxChannel.del("activity", { id: info.id });
    }
  }
  applyFilter(event: Event) {  
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if ( this.dataSource.paginator ) {
      this.dataSource.paginator.firstPage();
    }
    console.log(this.dataSource);
  }

  radioFilter(e : Event){
    this.dataSource = new MatTableDataSource(ACTIVITIES);
    var key =(e.target as HTMLElement).closest('.mat-radio-button').querySelector('.mat-radio-label-content').textContent.trim();
    var data = new Array;
    var result : Activity[] = [];
    if( key !== '전체'){
      data = this.dataSource.filteredData;
      for(var i =0; i< data.length; i++){
        if(data[i].progress == key){
          result.push(data[i])
        }
      }
      this.dataSource = new MatTableDataSource(result);
    }
  }
}
