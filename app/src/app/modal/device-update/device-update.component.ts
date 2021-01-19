import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { SelDeviceTYPE, SelSTATUS } from 'src/app/interface/interface';
import { DeviceListComponent } from 'src/app/page/device-list/device-list.component';
import { PhxChannelService } from 'src/app/service/phx-channel.service';

@Component({
  selector: 'app-device-update',
  templateUrl: './device-update.component.html',
  styleUrls: ['./device-update.component.css']
})
export class DeviceUpdateComponent implements OnInit {

  info: any;

  device: any = {
    id: '',
    type: '',
    name: '',
    status: '',
    location: '',
    centerId: '',
  };

  deviceTypes = SelDeviceTYPE;
  statuss = SelSTATUS;
  centers: any = [];

  constructor(
    private dialogRef: MatDialogRef<DeviceListComponent>,
    private phxChannel: PhxChannelService,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    this.info = data;
    this.centers = [];
    phxChannel.Centers.subscribe( data => {
      this.centers = [];
      data.forEach(el => {
        this.centers.push({
          id: el.id,
          name: el.name
        })
      });
    })
    phxChannel.Devices.subscribe( data => {
      this.closeDialog();
    })
  }
  
  ngOnInit(): void {
    this.phxChannel.gets("center", { body: '' });
    this.device = {
      id: this.info.id,
      type: this.info.type,
      name: this.info.name,
      status: this.info.status,
      location: this.info.location,
      centerId: this.info.center,
    }
  }

  up() {
    this.phxChannel.up(
      "device",
      this.device
    )
  }

  closeDialog(){
    this.dialogRef.close();
  }
}
