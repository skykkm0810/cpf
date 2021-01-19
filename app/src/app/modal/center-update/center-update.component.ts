import { Inject,Component, OnInit, Input } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CenterAComponent } from '../../page/center-a/center-a.component';
import { CENTERS} from '../../interface/interface';
import { PhxChannelService } from '../../service/phx-channel.service';
import { AdministratorComponent } from 'src/app/page/administrator/administrator.component';

@Component({
  selector: 'app-center-update',
  templateUrl: './center-update.component.html',
  styleUrls: ['./center-update.component.css']
})
export class CenterUpdateComponent implements OnInit {

  centerInfo : any;

  center: any = {
    id: '',
    name: '',
    address: '',
    limited: '',
    manager: '',
    contact: '',
    email: ''
  }
  
  constructor(
    private dialogRef: MatDialogRef<AdministratorComponent>,
    private phxChannel: PhxChannelService,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    this.centerInfo = data;
  }
  
  ngOnInit(): void {
    this.center = {
      id: this.centerInfo.idx,
      name: this.centerInfo.name,
      address: this.centerInfo.address,
      limited: this.centerInfo.maxUser,
      manager: this.centerInfo.manager,
      contact: this.centerInfo.contact,
      email: this.centerInfo.email,
    }
  }
  
  closeDialog(){
    this.dialogRef.close();
  }

  update() {
    this.phxChannel.up(
      "center",
      this.center
    )
  }
}
