import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { WorkerListComponent } from 'src/app/page/worker-list/worker-list.component';
import { SelTASKS } from 'src/app/interface/interface';
import { PhxChannelService } from 'src/app/service/phx-channel.service';

@Component({
  selector: 'app-worker-update',
  templateUrl: './worker-update.component.html',
  styleUrls: ['./worker-update.component.css']
})
export class WorkerUpdateComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<WorkerListComponent>,
    private phxChannel: PhxChannelService,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    phxChannel.Centers.subscribe( data => {
      this.centers = [];
      data.forEach( el => {
        this.centers.push({
          id: el.id,
          name: el.name
        })
      });
    })
    this.info = data;
    console.log(this.info);
  }

  ngOnInit(): void {
  }

  instructor: any = {
    id: '',
    name: '',
    contact: '',
    photo: '',
    task: '',
    centerId: '',
    region: '',
  }

  info: any;
  tasks = SelTASKS;
  centers: any = [];

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

  up() {
    console.log(this.instructor);
  }
}
