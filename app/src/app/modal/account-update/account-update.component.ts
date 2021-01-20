import { Component, Inject, OnInit } from '@angular/core';
import { AdministratorComponent} from '../../page/administrator/administrator.component';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { SelLEVEL } from 'src/app/interface/interface';
import { PhxChannelService } from 'src/app/service/phx-channel.service';
@Component({
  selector: 'app-account-update',
  templateUrl: './account-update.component.html',
  styleUrls: ['./account-update.component.css']
})
export class AccountUpdateComponent implements OnInit {

  accountInfo: any;

  account: any = {
    id: '',
    uname: '',
    pwd: '',
    name: '',
    birth: '',
    contact: '',
    centerId: '',
    level: ''
  }

  levels = SelLEVEL;

  centers: any;

  constructor(
    private dialogRef: MatDialogRef<AdministratorComponent>,
    private phxChannel: PhxChannelService,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    this.accountInfo = data;
    this.centers = [];
    phxChannel.Centers.subscribe( data => {
      this.centers = [];
      data.forEach(el => {
        this.centers.push({
          value: el.id,
          name: el.name
        })
      });
    })
   }


  ngOnInit(): void {
    this.phxChannel.gets('center', '');
    this.account = {
      id: this.accountInfo.id,
      uname: this.accountInfo.uname,
      pwd: '',
      name: this.accountInfo.name,
      birth: this.accountInfo.birth,
      contact: this.accountInfo.contact,
      centerId: this.accountInfo.centerId,
      level: this.accountInfo.level
    }
  }

  adjustDialog(){
    if(confirm('적용하시겠습니까?')){
      this.update();
      this.dialogRef.close();
    }
  }

  closeDialog(){
    this.dialogRef.close();
  }

  update() {
    if ( this.account.pwd == '' ) {
      delete this.account.pwd;
    }
    this.phxChannel.up(
      "account",
      this.account
    )
  }
}
