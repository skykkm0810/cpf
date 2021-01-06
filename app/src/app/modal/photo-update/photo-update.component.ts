import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {PhotobookComponent} from '../../page/photobook/photobook.component';


@Component({
  selector: 'app-photo-update',
  templateUrl: './photo-update.component.html',
  styleUrls: ['./photo-update.component.css']
})
export class PhotoUpdateComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<PhotobookComponent>) { }


  ngOnInit(): void {
  }
  date = new Date();
  today = this.date.getFullYear()+". "+ (this.date.getMonth() + 1)+". "+this.date.getDate()+". "+ this.date.getHours() +":"+ this.date.getMinutes();
  closeDialog(){
    this.dialogRef.close();
  }
}

