import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {ActivityListComponent} from '../../page/activity-list/activity-list.component';
@Component({
  selector: 'app-activity-add',
  templateUrl: './activity-add.component.html',
  styleUrls: ['./activity-add.component.css']
})
export class ActivityAddComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<ActivityListComponent>) { }


  ngOnInit(): void {
  }
  closeDialog(){
    this.dialogRef.close();
  }
}

