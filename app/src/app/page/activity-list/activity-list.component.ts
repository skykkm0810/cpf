import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Activity, activityHeader, ACTIVITIES, activityFilter } from '../../interface/interface';
import { ActivityAddComponent} from '../../modal/activity-add/activity-add.component';
import { ActivityDetailComponent} from '../../modal/activity-detail/activity-detail.component';
import { ActivityUpdateComponent} from '../../modal/activity-update/activity-update.component';
@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.css']
})
export class ActivityListComponent implements AfterViewInit {

  allComplete: boolean = false;
  
  displayedColumns: string[] = activityHeader;
  dataSource: MatTableDataSource<Activity>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  filter = activityFilter
  
  constructor(
    public dialog: MatDialog,
    public dialog2: MatDialog,
    public dialog3: MatDialog,
  ) {
    this.dataSource = new MatTableDataSource(ACTIVITIES);
  }
  
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  addActivity() {
    const dialogRef = this.dialog.open(ActivityAddComponent, {
      width: '40%',
    });
  }
  detailActivity(event:Event) {
    var thisElement = event.target as HTMLElement;
    console.log(thisElement)
    if(thisElement.classList.contains('mat-button-wrapper') || thisElement.classList.contains('float-right')){
      event.preventDefault()
    }
    else {
      const dialogRef2 = this.dialog2.open(ActivityDetailComponent, {
        width: '600px'
      });
    }
  }
  updateActivity() {
    const dialogRef3 = this.dialog3.open(ActivityUpdateComponent, {
      width: '600px', height:'700px',
    });
  }
  removeList(){
    if(confirm('삭제하시겠습니까?')){
      alert('삭제되었습니다.')
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
