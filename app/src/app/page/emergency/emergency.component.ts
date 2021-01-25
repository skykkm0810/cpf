import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SocketioService } from 'src/app/service/socketio.service';
import {CALLEMERGENCY, callEmergency } from '../../interface/interface';
@Component({
  selector: 'app-emergency',
  templateUrl: './emergency.component.html',
  styleUrls: ['./emergency.component.css']
})
export class EmergencyComponent implements AfterViewInit {
<<<<<<< HEAD
  where :any;
  msg : any;
  why : any;
=======
  where :any
  why :any
>>>>>>> 9bb2c6605137b3124330443da27b8d70b0a5207c
  dataColumns: string[] = ["id","date","center","what","desc"];
  dataSource: MatTableDataSource<callEmergency>;
  @ViewChild('pagnator') paginator: MatPaginator;
  @ViewChild('sort') sort: MatSort;
  constructor(
    private nodeio: SocketioService
  ) {
    this.dataSource = new MatTableDataSource(CALLEMERGENCY);
   }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.nodeio.Emergency.subscribe( data => {
      // console.log(data);
    })
  }
  inputWhere(e:Event) {
    var tag = e.target as HTMLElement;
    this.where = tag.innerHTML;
  }
  inputWhy(e:Event){
    var tag = e.target as HTMLElement
    this.why = tag.closest('label').getElementsByClassName('mat-radio-label-content')[0].textContent;
  }
  emergencyCall(): void {
    if( this.where == undefined && this.why ==undefined){
      this.msg = "<신고문자>"
    }
    else{
      this.msg ='<'+ this.why +'> \n위치:'+this.where;
    }
    this.nodeio.emergencyCall( this.msg );
  }
  sendSMS(){
    var mes = "위치: "+this.where +"\n"+"요청사항:"+this.why; 
    console.log(mes)
  }
  place(e:Event){
    this.where = (e.target as HTMLElement).textContent;
  }
  for(){
    setTimeout(()=>{
    this.why = document.getElementsByClassName('mat-radio-checked')[0].querySelector('.mat-radio-label-content').textContent
    },100)
  }
}
