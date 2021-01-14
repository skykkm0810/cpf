import { Component, OnInit } from '@angular/core';
import { AdministratorComponent} from '../../page/administrator/administrator.component';
import { MatDialogRef} from '@angular/material/dialog';
import { PhxChannelService } from 'src/app/service/phx-channel.service';
import { SelLEVEL } from '../../interface/interface';

@Component({
  selector: 'app-account-add',
  templateUrl: './account-add.component.html',
  styleUrls: ['./account-add.component.css']
})
export class AccountAddComponent implements OnInit {

  account: any = {
    uname: '',
    pwd: '',
    name: '',
    birth: '',
    contact: '',
    centerId: '',
    level: ''
  }

  levels = SelLEVEL;

  constructor(
    private dialogRef: MatDialogRef<AdministratorComponent>,
    private phxChannel: PhxChannelService,
  ) { }

  ngOnInit(): void {
  }
  addDialog(){
    if(confirm('추가하시겠습니까?')){
      this.dialogRef.close();
    }
  }
  closeDialog(){
    this.dialogRef.close();
  }

  add() {
    this.phxChannel.send(
      "account",
      this.account
    )
  }

}
