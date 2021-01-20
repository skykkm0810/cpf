import { Component, OnInit, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PhxChannelService } from 'src/app/service/phx-channel.service';
import { CenterAComponent } from '../../page/center-a/center-a.component';
@Component({
  selector: 'app-center-add',
  templateUrl: './center-add.component.html',
  styleUrls: ['./center-add.component.css']
})

export class CenterAddComponent implements OnInit {
  // @Input() center: any;
  center: any = {
    name: '',
    address: '',
    limited: '',
    manager: '',
    contact: '',
    email: ''
  }

  constructor(
    private dialogRef: MatDialogRef<CenterAComponent>,
    private phxChannel: PhxChannelService
  ) {
    phxChannel.Centers.subscribe( data => {
      this.closeDialog();
    })
  }

  ngOnInit(): void {
  }

  closeDialog(){
    this.dialogRef.close();
  }

  add() {
    this.phxChannel.send(
      "center",
      this.center
    )
  }
}
