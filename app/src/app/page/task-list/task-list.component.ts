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

  constructor(
    public router : Router
  ) {
    this.dataSource = new MatTableDataSource(TASKS);
  }
  
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    console.log(this.filter);
  }

  chkCon: boolean = false;
  datas = TASKS;

  displayedColumns: string[] = taskHeader;
  dataSource: MatTableDataSource<Task>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  filter = taskFilter;
  selectedF = ['', ''];
  
  applyFilter(event: Event) {  
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if ( this.dataSource.paginator ) {
      this.dataSource.paginator.firstPage();
    }
    console.log(this.dataSource);
  }
  
  add(){
    this.router.navigate(['/taskAdd/']);
  }

  radio( s, f ) {
    if( f.tag === 'issue' ) {
      this.selectedF[0] = s.name;
    } else if ( f.tag === 'center' ) {
      this.selectedF[1] = s.name;
    } else {
      this.selectedF = ['', ''];
      let btns = document.querySelectorAll('input[type=radio]');
      console.log(btns);
      for( let i = 0; i < btns.length; i++ ) {
        (btns[i] as HTMLInputElement).checked = false;
      }

    }
    console.log(this.selectedF);

    this.datas = TASKS;
    console.log(this.datas);
    const d1 = this.datas.filter( d => {
      d.event === '낙상';
      console.log(d.event);
      console.log(this.selectedF[0]);
    });
    console.log(d1);

    // const d2 = d1.filter( d => {
    //   d.center == this.selectedF[1];
    // })

    // this.dataSource = new MatTableDataSource(d2);
  }

  radioFilter(e : Event){
    // var key =(e.target as HTMLElement).closest('.mat-radio-button').querySelector('.mat-radio-label-content').textContent.trim();
    // var keyoption = (e.target as HTMLElement).closest('.mat-radio-button');
    // var data = new Array;
    // var result : Task[] = [];
    // if( key !== '전체'){
    //   var allButton = document.querySelector('.all .mat-radio-button');
    //   allButton.classList.remove('mat-radio-checked')
    //   keyoption.classList.add('mat-radio-checked')
    //   keyoption.closest('.mat-radio-group').classList.add('chkOption');
    //   var chkGroupNum = document.getElementsByClassName('chkOption').length;
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
    // }
    // else{
    //   var optionsButton = document.querySelectorAll('.mat-radio-button');
    //   for(var i=1; i< optionsButton.length; i++){
    //     optionsButton[i].classList.remove('mat-radio-checked')
    //   }
    //   keyoption.classList.add('mat-radio-checked')
    // }
  }

  updateAllComplete( el, m ) {
    if ( el.type == 'all' ) {
      m.eventFilters.forEach( d => {
        d.completed = false;
      })
      m.centerFilters.forEach( d => {
        d.completed = false;
      })
    } else if ( el.type == 'event' ) {
      m.eventFilters.forEach( d => {
        d.completed = false;
      })
      m.allFilter.forEach( d => {
        d.completed = false;
      })
      el.completed = true;
    } else if ( el.type == 'center' ) {
      m.centerFilters.forEach( d => {
        d.completed = false;
      })
      m.allFilter.forEach( d => {
        d.completed = false;
      })
      el.completed = true;
    }
  }

  checkFilter( el ) {

  }
}
