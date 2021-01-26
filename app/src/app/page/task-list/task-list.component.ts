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
  array :any
  arrayC :any
  arrayE :any
  allcall(){
    this.dataSource = new MatTableDataSource(TASKS);
  }
  checkFilter( el,m:Event ) {
      var container = (m.target as HTMLElement).closest('.filterContainer');
      var arrayE = new Array ;
      var array = new Array ;
      var arrayC = new Array ;
      if(TASKS[i].event == el.name){
        if(container.classList.contains('one')){
          
        }
        else{
          container.classList
        }
          for(var i=0; i<TASKS.length; i++){
          arrayE.push(TASKS[i]);
          }
      }
        else if(TASKS[i].center == el.name){
          for(var i=0; i<TASKS.length; i++){
            arrayC.push(TASKS[i]);
          }
      }
      console.log(arrayE)
      console.log(arrayC)
      if(arrayE.length > 0 && arrayC.length > 0){
        alert('both')
        array = arrayE.filter(x => arrayC.includes(x));
        console.log(array)
        this.dataSource = new MatTableDataSource(array);

      }
      else if (arrayE.length < 0 && arrayC.length > 0 ){
        alert('second')

        this.dataSource = new MatTableDataSource(arrayC);
      }
      else if (arrayE.length > 0 && arrayC.length < 0 ){
        alert('first')

        this.dataSource = new MatTableDataSource(arrayE);
      }
  }
}
