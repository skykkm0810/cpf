import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PhxChannelService } from 'src/app/service/phx-channel.service';
import { ActivityListComponent } from '../../page/activity-list/activity-list.component';
import { SelPROGRESS } from 'src/app/interface/interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-activity-update',
  templateUrl: './activity-update.component.html',
  styleUrls: ['./activity-update.component.css']
})
export class ActivityUpdateComponent implements OnInit {

  info: any;
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
    private phxChannel: PhxChannelService,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    this.info = data;
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
    this.phxChannel.gets("instructor", { body: '' })
    this.phxChannel.gets("center", { body: '' })
    this.activity = {
      id: this.info.id,
      instructorId: this.info.instructorId,
      contact: this.info.contact,
      centerId: this.info.centerId,
      date: this.info.datetime,
      progress: this.info.progress
    }
    console.log(this.activity);
  }

  closeDialog(){
    this.dialogRef.close();
  }

  up() {
    if( !this.activity.name || !this.activity.instructorId || !this.activity.centerId || !this.activity.date || !this.activity.progress ) {
      alert('활동명과 일정, 상태는 필수 입력 항목입니다.');
    } else {
      this.phxChannel.up( "activity", this.activity );
    }
  }
}
