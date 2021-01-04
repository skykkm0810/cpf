import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DeviceListComponent } from 'src/app/page/device-list/device-list.component';

@Component({
  selector: 'app-device-add',
  templateUrl: './device-add.component.html',
  styleUrls: ['./device-add.component.css']
})
export class DeviceAddComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<DeviceListComponent>) { }

  ngOnInit(): void {
  }
  closeDialog(){
    this.dialogRef.close();
  }
}

