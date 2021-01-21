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
  where :any
  why :any
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

  emergencyCall(): void {
    var mes = "위치: "+this.where +"\n"+"신고사항:"+this.why; 
    this.nodeio.emergencyCall( mes );
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
