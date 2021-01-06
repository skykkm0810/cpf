import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { VideosComponent } from 'src/app/page/videos/videos.component';

@Component({
  selector: 'app-videos-add',
  templateUrl: './videos-add.component.html',
  styleUrls: ['./videos-add.component.css']
})
export class VideosAddComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<VideosComponent>) { }

  ngOnInit(): void {
  }
  value() {
    var inputvalue = (document.getElementById('seniorImg') as HTMLInputElement).value;
    (document.getElementsByClassName('fileUpload')[0] as HTMLInputElement ).innerHTML = inputvalue
    if( inputvalue == ""){
      (document.getElementsByClassName('fileUpload')[0] as HTMLInputElement ).innerHTML = "파일 없음";
    }
  }
  closeDialog(){
    this.dialogRef.close();
  }
}
