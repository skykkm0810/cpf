import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {ActivityListComponent} from '../../page/activity-list/activity-list.component';

@Component({
  selector: 'app-activity-detail',
  templateUrl: './activity-detail.component.html',
  styleUrls: ['./activity-detail.component.css']
})
export class ActivityDetailComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<ActivityListComponent>) {
    
   }


  ngOnInit(): void {
  }
  closeDialog(){
    this.dialogRef.close();
  }

}
