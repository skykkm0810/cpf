import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Activity, activityHeader, ACTIVITIES, activityFilter } from '../../interface/interface';
import { ActivityAddComponent} from '../../modal/activity-add/activity-add.component';
import { ActivityDetailComponent} from '../../modal/activity-detail/activity-detail.component';
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
  ) {
    this.dataSource = new MatTableDataSource(ACTIVITIES);
  }
  
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  addActivity( activity? : Activity ): void {
    const dialogRef = this.dialog.open(ActivityAddComponent, {
      width: '40%',
    });
  }
  applyFilter(event: Event) {  
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if ( this.dataSource.paginator ) {
      this.dataSource.paginator.firstPage();
    }
    console.log(this.dataSource);
  }
  
  updateAllComplete() {
    this.allComplete = this.filter.subFilters != null && this.filter.subFilters.every(t => t.completed);
  }
  detailActivity(activity?:Activity): void {
    const dialogRef2 = this.dialog.open(ActivityDetailComponent, {
      width: '40%',
    });
  }
  someComplete(): boolean {
    if (this.filter.subFilters == null) {
      return false;
    }
    return this.filter.subFilters.filter(t => t.completed).length > 0 && !this.allComplete;
  }

  setAll(completed: boolean) {
    this.allComplete = completed;
    if (this.filter.subFilters == null) {
      return;
    }
    this.filter.subFilters.forEach(t => t.completed = completed);
  }

}
