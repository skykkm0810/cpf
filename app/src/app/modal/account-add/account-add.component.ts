import { Component, OnInit } from '@angular/core';
import { AdministratorComponent} from '../../page/administrator/administrator.component';
import { MatDialogRef} from '@angular/material/dialog';
@Component({
  selector: 'app-account-add',
  templateUrl: './account-add.component.html',
  styleUrls: ['./account-add.component.css']
})
export class AccountAddComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<AdministratorComponent>) { }


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

}
