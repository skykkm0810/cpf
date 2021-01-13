import { Inject,Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CenterAComponent } from '../../page/center-a/center-a.component';
import { CenterBComponent } from '../../page/center-b/center-b.component';
import { CENTERS} from '../../interface/interface';
@Component({
  selector: 'app-center-update',
  templateUrl: './center-update.component.html',
  styleUrls: ['./center-update.component.css']
})
export class CenterUpdateComponent implements OnInit {

  constructor(
      private dialogRef: MatDialogRef<CenterBComponent>,
    ) {
      
      
    }
  
  center = CENTERS;
 
  
  ngOnInit(): void {
  }
  closeDialog(){
    this.dialogRef.close();
    // this.dialogRef2.close();
  }
}
