import { Component, OnInit, AfterViewInit, ViewChild, Inject } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {REQUESTS , Request} from '../../interface/interface';
import {EMERGENCY , Emergency} from '../../interface/interface';
import {MEDICINE , Medicine} from '../../interface/interface';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Senior,SENIORS } from '../../interface/interface';
import { SeniorContactComponent } from '../../modal/senior-contact/senior-contact.component';
import { SeniorUpdateComponent } from '../../modal/senior-update/senior-update.component';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';


@Component({
  selector: 'app-senior-detail',
  templateUrl: './senior-detail.component.html',
  styleUrls: ['./senior-detail.component.css']
})
export class SeniorDetailComponent implements AfterViewInit {
  requestColumns: string[] = ["id","progress","from","desc"];
  requestData: MatTableDataSource<Request>;
  emergencyColumns: string[] = ["date","situation","process","add"];
  emergencyData: MatTableDataSource<Emergency>;
  medicineColumns: string[] = ["date","reason","guard","mediName"];
  medicineData: MatTableDataSource<Medicine>;
  @ViewChild('pagnator1') paginator1: MatPaginator;
  @ViewChild('sort1') sort1: MatSort;
  @ViewChild('pagnator2') paginator2: MatPaginator;
  @ViewChild('sort2') sort2: MatSort;
  @ViewChild('pagnator3') paginator3: MatPaginator;
  @ViewChild('sort3') sort3: MatSort;
  constructor(
    public dialog: MatDialog,
    public route : ActivatedRoute,
  ) {
    this.requestData = new MatTableDataSource(REQUESTS);
    this.emergencyData = new MatTableDataSource(EMERGENCY);
    this.medicineData = new MatTableDataSource(MEDICINE);
  }
  
  senior : any;

  ngAfterViewInit(): void {
    this.requestData.paginator = this.paginator1;
    this.requestData.sort = this.sort1;
    this.emergencyData.paginator = this.paginator2;
    this.emergencyData.sort = this.sort2;
    this.medicineData.paginator = this.paginator3;
    this.medicineData.sort = this.sort3;
    
    this.senior = this.route.snapshot.paramMap.get('data');
    console.log(this.senior);
    console.log(this.route.snapshot.params);
    this.route.queryParams
      .subscribe( param => {
        console.log(param['data']);
      })
  }

  present(){
    var show = document.getElementsByClassName('present')[0]  
    show.classList.remove('display');
    show.classList.add('inputMediInfo');
  }
  remove() {
    var show = document.getElementsByClassName('present')[0]  
    show.classList.remove('inputMediInfo');
    show.classList.add('display');
  }
  updateSenior( senior? : Senior ): void {
    const dialogRef = this.dialog.open(SeniorUpdateComponent, {
      width: '40%',
    });
  }
  // openNumber(obj1,obj2,obj3,obj4){
  //   const dialogRef2 = this.dialog.open(SeniorContactComponent, {
  //     width: '30%',
  //     data: {name: obj1, contact: obj2, guardian: obj3, guardianContact: obj4}
  //   });
  // }
  
}
