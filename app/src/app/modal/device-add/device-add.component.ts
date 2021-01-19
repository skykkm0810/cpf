import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Device, SelDeviceTYPE, SelSTATUS } from 'src/app/interface/interface';
import { DeviceListComponent } from 'src/app/page/device-list/device-list.component';
import { PhxChannelService } from 'src/app/service/phx-channel.service';

@Component({
  selector: 'app-device-add',
  templateUrl: './device-add.component.html',
  styleUrls: ['./device-add.component.css']
})
export class DeviceAddComponent implements OnInit {

  device: any = {
    id: '',
    type: '',
    name: '',
    status: '',
    location: '',
    center: '',
  };

  deviceTypes = SelDeviceTYPE;
  statuss = SelSTATUS;
  centers: any = [];

  constructor(
    private dialogRef: MatDialogRef<DeviceListComponent>,
    private phxChannel: PhxChannelService
  ) {
    phxChannel.Centers.subscribe( data => {
      this.centers = [];
      data.forEach(el => {
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

  closeDialog(){
    this.dialogRef.close();
  }

  add() {
    this.phxChannel.send( "device", this.device );
  }
}

