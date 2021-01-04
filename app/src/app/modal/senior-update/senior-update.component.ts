import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Senior } from 'src/app/interface/interface';
@Component({
  selector: 'app-senior-update',
  templateUrl: './senior-update.component.html',
  styleUrls: ['./senior-update.component.css']
})
export class SeniorUpdateComponent implements OnInit {
    constructor(
    public dialogRef2: MatDialogRef<SeniorUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Senior) {}
  

  ngOnInit(): void {
  }
  value() {
    var inputvalue = (document.getElementById('seniorImg') as HTMLInputElement).value;
    (document.getElementsByClassName('fileUpload')[0] as HTMLInputElement ).innerHTML = inputvalue
    if( inputvalue == ""){
      (document.getElementsByClassName('fileUpload')[0] as HTMLInputElement ).innerHTML = "파일 없음";
    }
  }
  closeDialog(){
    this.dialogRef2.close();
  }
}

