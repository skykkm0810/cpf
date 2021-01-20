import { Component, OnInit, AfterViewInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { PhxChannelService } from 'src/app/service/phx-channel.service';
import {ActivityListComponent} from '../../page/activity-list/activity-list.component';
import { SelPROGRESS } from '../../interface/interface';
@Component({
  selector: 'app-activity-add',
  templateUrl: './activity-add.component.html',
  styleUrls: ['./activity-add.component.css']
})
export class ActivityAddComponent implements AfterViewInit {

  centers: any;
  instructors: any;
  progress = SelPROGRESS;

  activity: any = {
    name: '',
    instructorId: '',
    contact: '',
    centerId: '',
    date: '',
    progress: '',
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


  ngAfterViewInit(): void {
    this.phxChannel.gets("instructor", { body: '' })
    this.phxChannel.gets("center", { body: '' })
  }

  closeDialog(){
    this.dialogRef.close();
  }

  add() {
    if( !this.activity.name || !this.activity.instructorId || !this.activity.centerId || !this.activity.date || !this.activity.progress ) {
      alert('활동명과 강사명, 시설, 일정, 상태는 필수 입력 항목입니다.');
    } else {
      this.phxChannel.send( "activity", this.activity );
    }
  }
}

