import { Component, OnInit } from '@angular/core';
import { AdministratorComponent} from '../../page/administrator/administrator.component';
import { MatDialogRef} from '@angular/material/dialog';
@Component({
  selector: 'app-account-update',
  templateUrl: './account-update.component.html',
  styleUrls: ['./account-update.component.css']
})
export class AccountUpdateComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<AdministratorComponent>) { }


  ngOnInit(): void {
  }
  adjustDialog(){
    if(confirm('적용하시겠습니까?')){
      this.dialogRef.close();
    }
  }
  closeDialog(){
    this.dialogRef.close();
  }
}
