import { Component, OnInit, AfterViewInit, ViewChild, Inject } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {REQUESTS , Request} from '../../interface/interface';
import {EMERGENCY , Emergency} from '../../interface/interface';
import {MEDICINE , Medicine} from '../../interface/interface';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Senior,SENIORS } from '../../interface/interface';
import { ContactFamilyComponent } from '../../modal/contact-family/contact-family.component';
import { EmergencySmsComponent } from '../../modal/emergency-sms/emergency-sms.component';
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
    public dialog2: MatDialog,
    public dialog3: MatDialog,
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
  cancel() {
    var show = document.getElementsByClassName('present')[0]  
    show.classList.remove('inputMediInfo');
    show.classList.add('display');
  }
  updateSenior( senior? : Senior ): void {
    const dialogRef = this.dialog.open(SeniorUpdateComponent, {
      width: '40%',
    });
  }
  removeList(){
    if(confirm('이 어르신의 정보를 삭제하시겠습니까?')){
      alert('삭제되었습니다.')
    }
  }
  contactFamily(){
    const dialogRef2 = this.dialog2.open(ContactFamilyComponent);

  }
  emergencySMS(){
    const dialogRef3 = this.dialog3.open(EmergencySmsComponent);

  }
  
}
