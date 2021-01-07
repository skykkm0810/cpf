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
    @Inject(MAT_DIALOG_DATA) public data: {centerName: string},
    ) {
      
      
    }
  
  center = CENTERS;
 
  
  ngOnInit(): void {
    var thisCenter;
      for(var i=0; i<this.center.length; i++){
        if(this.center[i].name == this.data.centerName){
           thisCenter = this.center[i];
        }
      }
  }
  closeDialog(){
    this.dialogRef.close();
    // this.dialogRef2.close();
  }
}
