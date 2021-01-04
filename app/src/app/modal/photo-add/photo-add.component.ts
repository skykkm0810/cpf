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

  ngOnInit(): void {
  }
  closeDialog(){
    this.dialogRef.close();
  }
}
