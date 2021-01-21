import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Worker, workerHeader, WORKERS, workerFilter } from '../../interface/interface';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { WorkerAddComponent } from 'src/app/modal/worker-add/worker-add.component';
import { PhxChannelService } from 'src/app/service/phx-channel.service';

import { WorkerUpdateComponent} from 'src/app/modal/worker-update/worker-update.component';
@Component({
  selector: 'app-worker-list',
  templateUrl: './worker-list.component.html',
  styleUrls: ['./worker-list.component.css']
})
export class WorkerListComponent implements AfterViewInit {

  allComplete: boolean = false;
  
  displayedColumns: string[] = workerHeader;
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  filter = workerFilter;
  CheckFilter : any = [];
  
  constructor(
    public dialog: MatDialog,
    public dialog2: MatDialog,
    private phxChannel: PhxChannelService
  ) {
    this.dataSource = new MatTableDataSource([this.CheckFilter]);
    phxChannel.Instructors.subscribe( data => {
      this.CheckFilter = [];
      data.forEach( el => {
        this.CheckFilter.push({
          id: el.id,
          name: el.name,
          centerId: el.centerId,
          center: el.center,
          task: el.task,
          region: el.region,
          contact: el.contact
        })
      })

      this.dataSource = new MatTableDataSource(this.CheckFilter);
    })
  }

  updateWorker(){
    const dialogRef2 = this.dialog2.open(WorkerUpdateComponent, {
      width: '40%',
    });
  }
  removeList() {
    if(confirm('삭제하시겠습니까?')){
      alert('삭제하였습니다.')
    }
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.phxChannel.gets("instructor", { body: 0 });
  }
  
  addWorker( worker? : Worker ): void {
    const dialogRef = this.dialog.open(WorkerAddComponent, {
      width: '40%',
    });

  }
  applyFilter(event: Event) {  
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if ( this.dataSource.paginator ) {
      this.dataSource.paginator.firstPage();
    }
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
