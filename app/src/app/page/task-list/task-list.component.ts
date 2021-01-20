import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Task, taskHeader, TASKS, taskFilter } from '../../interface/interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements AfterViewInit {

  allComplete: boolean = false;
  
  displayedColumns: string[] = taskHeader;
  dataSource: MatTableDataSource<Task>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
   filter = taskFilter
  
  constructor(
    public router : Router
  ) {
    this.dataSource = new MatTableDataSource(TASKS);
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
  add(){
    this.router.navigate(['/taskAdd/']);
  }
  radioFilter(e : Event){
    var key =(e.target as HTMLElement).closest('.mat-radio-button').querySelector('.mat-radio-label-content').textContent.trim();
    var keyoption = (e.target as HTMLElement).closest('.mat-radio-button');
    var data = new Array;
    var result : Task[] = [];
    if( key !== '전체'){
      var allButton = document.querySelector('.all .mat-radio-button');
      allButton.classList.remove('mat-radio-checked')
      keyoption.classList.add('mat-radio-checked')
      keyoption.closest('.mat-radio-group').classList.add('chkOption');
      var chkGroupNum = document.getElementsByClassName('chkOption').length;
      // if(chkGroupNum == 1){
      //   this.dataSource = new MatTableDataSource(TASKS);
      //   data = this.dataSource.filteredData;
      //    for(var i =0; i< data.length; i++){
      //      if(data[i].event == key){
      //        result.push(data[i])
      //       }
      //     }
      //   this.dataSource = new MatTableDataSource(result);
      // }
      // if(chkGroupNum == 2){
      //   this.dataSource = new MatTableDataSource(TASKS);
      //   data = this.dataSource.filteredData;

      // }
    }
    else{
      var optionsButton = document.querySelectorAll('.mat-radio-button');
      for(var i=1; i< optionsButton.length; i++){
        optionsButton[i].classList.remove('mat-radio-checked')
      }
      keyoption.classList.add('mat-radio-checked')
    }
  }
}
