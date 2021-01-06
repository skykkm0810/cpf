import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { WorkerListComponent } from 'src/app/page/worker-list/worker-list.component';

@Component({
  selector: 'app-worker-add',
  templateUrl: './worker-add.component.html',
  styleUrls: ['./worker-add.component.css']
})
export class WorkerAddComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<WorkerListComponent>) { }


  ngOnInit(): void {
  }
  closeDialog(){
    this.dialogRef.close();
  }
  value() {
    var inputvalue = (document.getElementById('photoFile') as HTMLInputElement).value;
    (document.getElementsByClassName('replaceIF')[0] as HTMLInputElement ).innerHTML = inputvalue
    if( inputvalue == ""){
      (document.getElementsByClassName('replaceIF')[0] as HTMLInputElement ).innerHTML = "파일 없음";
    }
  }
}

