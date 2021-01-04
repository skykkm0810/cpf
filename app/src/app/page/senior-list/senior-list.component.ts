import { Component, OnInit,Inject } from '@angular/core';
import { Senior, SENIORS } from '../../interface/interface';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { SeniorAddComponent } from '../../modal/senior-add/senior-add.component';
import { Router } from '@angular/router';
import { SeniorContactComponent } from '../../modal/senior-contact/senior-contact.component';
@Component({
  selector: 'app-senior-list',
  templateUrl: './senior-list.component.html',
  styleUrls: ['./senior-list.component.css']
})
export class SeniorListComponent implements OnInit {

  seniors = SENIORS;

  constructor(
    public dialog: MatDialog,
    public router : Router
    ) { }

  ngOnInit(): void {
  }
  detail( id : number ){
    this.router.navigate(['/seniorDetail/' + id]);
  }
  addSenior( senior? : Senior ): void {
    const dialogRef = this.dialog.open(SeniorAddComponent, {
      width: '40%',
    });
  }
 
  openNumber(obj1,obj2,obj3,obj4){
    const dialogRef2 = this.dialog.open(SeniorContactComponent, {
      width: '30%',
      data: {name: obj1, contact: obj2, guardian: obj3, guardianContact: obj4}
    });
  }
  
}

// @Component({
//   selector: 'app-senior-update',
//   templateUrl: '../../modal/senior-update/senior-update.component.html',
// })
// export class SeniorUpdateComponent {

//   constructor(
//     public dialogRef2: MatDialogRef<SeniorUpdateComponent>,
//     @Inject(MAT_DIALOG_DATA) public data: Senior) {}

 

// }
