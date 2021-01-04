import { Component, OnInit } from '@angular/core';
import { ACTIVITIES,Activity } from "../../interface/interface";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { PhotoAddComponent} from '../../modal/photo-add/photo-add.component';

@Component({
  selector: 'app-photobook',
  templateUrl: './photobook.component.html',
  styleUrls: ['./photobook.component.css']
})
export class PhotobookComponent implements OnInit {
  activities = ACTIVITIES;
  constructor(public dialog: MatDialog,
    ) { }


  ngOnInit(): void {
  }
  remove() {
    if(confirm("정말 삭제 하시겠습니까?")){
      alert('삭제되었습니다.');
    }
  }
  addPhoto(activity?:Activity): void {
    const dialogRef = this.dialog.open(PhotoAddComponent, {
      width: '40%',
    });
  }
  
}
