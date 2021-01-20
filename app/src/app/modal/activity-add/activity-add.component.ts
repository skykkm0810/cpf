import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { PhxChannelService } from 'src/app/service/phx-channel.service';
import {ActivityListComponent} from '../../page/activity-list/activity-list.component';
@Component({
  selector: 'app-activity-add',
  templateUrl: './activity-add.component.html',
  styleUrls: ['./activity-add.component.css']
})
export class ActivityAddComponent implements OnInit {

  centers: any;
  instructors: any;

  activity: any = {
    name: '',
    instructorId: '',
    contact: '',
    centerId: '',
    date: '',
    status: '',
  }

  constructor(
    private dialogRef: MatDialogRef<ActivityListComponent>,
    private phxChannel: PhxChannelService
  ) {
    this.centers = [];
    phxChannel.Centers.subscribe( data => {
      this.centers = [];
      data.forEach(el => {
        this.centers.push({
          value: el.id,
          name: el.name
        })
      })
    })
    phxChannel.Instructors.subscribe( data => {
      this.instructors = [];
      data.forEach(el => {
        this.instructors.push({
          value: el.id,
          name: el.name,
          contact: el.contact
        })
      })
    })
  }


  ngOnInit(): void {
  }
  closeDialog(){
    this.dialogRef.close();
  }
}

