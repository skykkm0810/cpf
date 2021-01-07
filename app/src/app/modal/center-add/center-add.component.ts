import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CenterAComponent } from '../../page/center-a/center-a.component';
@Component({
  selector: 'app-center-add',
  templateUrl: './center-add.component.html',
  styleUrls: ['./center-add.component.css']
})
export class CenterAddComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<CenterAComponent>) { }

  ngOnInit(): void {
  }
  closeDialog(){
    this.dialogRef.close();
  }
}
