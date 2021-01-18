import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { SelTASKS } from 'src/app/interface/interface';
import { WorkerListComponent } from 'src/app/page/worker-list/worker-list.component';
import { PhxChannelService } from 'src/app/service/phx-channel.service';

@Component({
  selector: 'app-worker-add',
  templateUrl: './worker-add.component.html',
  styleUrls: ['./worker-add.component.css']
})
export class WorkerAddComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<WorkerListComponent>,
    private phxChannel: PhxChannelService,
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
  }

  ngOnInit(): void {
    this.phxChannel.gets("center", { body: '' })
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

  tasks = SelTASKS;
  centers: any = [];

  closeDialog(){
    this.dialogRef.close();
  }

  value() {
    // var inputvalue = (document.getElementById('photoFile') as HTMLInputElement).value;
    // (document.getElementsByClassName('replaceIF')[0] as HTMLInputElement ).innerHTML = inputvalue
    // if( inputvalue == ""){
    //   (document.getElementsByClassName('replaceIF')[0] as HTMLInputElement ).innerHTML = "파일 없음";
    // }
  }

  add() {
    this.phxChannel.send( "instructor", this.instructor );
  }
}

