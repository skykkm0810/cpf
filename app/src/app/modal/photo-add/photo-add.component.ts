import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {PhotobookComponent} from '../../page/photobook/photobook.component';

@Component({
  selector: 'app-photo-add',
  templateUrl: './photo-add.component.html',
  styleUrls: ['./photo-add.component.css']
})
export class PhotoAddComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<PhotobookComponent>) { }
  date = new Date();
  today = this.date.getFullYear()+". "+ (this.date.getMonth() + 1)+". "+this.date.getDate()+". "+ this.date.getHours() +":"+ this.date.getMinutes();
  ngOnInit(): void {
  }
  closeDialog(){
    this.dialogRef.close();
  }
  value() {
    var inputvalue = (document.getElementById('photoFile') as HTMLInputElement).value;
    (document.getElementsByClassName('replaceIF')[0] as HTMLInputElement ).innerHTML = inputvalue
    if( inputvalue == ""){
      (document.getElementsByClassName('replaceIF')[0] as HTMLInputElement ).innerHTML = "파일 없음";
    }
  }
}
