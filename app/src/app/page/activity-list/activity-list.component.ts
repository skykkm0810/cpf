import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Activity, activityHeader, ACTIVITIES, activityFilter } from '../../interface/interface';

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
  
  constructor() {
    this.dataSource = new MatTableDataSource(ACTIVITIES);
  }
  
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
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
