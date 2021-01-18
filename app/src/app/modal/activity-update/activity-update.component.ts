import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivityListComponent } from '../../page/activity-list/activity-list.component';

@Component({
  selector: 'app-activity-update',
  templateUrl: './activity-update.component.html',
  styleUrls: ['./activity-update.component.css']
})
export class ActivityUpdateComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<ActivityListComponent>,

  ) { 
  }

  ngOnInit(): void {
    this.cssSizing();
  }
  cssSizing(){
    var box = document.getElementsByClassName('background')[0] as HTMLElement;
    var boxWidth = box.offsetWidth;
    box.style.height = boxWidth + 'px';
    box.style.lineHeight = box.clientHeight + 'px'; 
  }
  showPicture(event : Event){
    console.log();
    var reader = new FileReader();
    var imgBox = document.getElementsByClassName('fakeUpload')[0] as HTMLElement;
    var file = (event.target as HTMLInputElement).files[0];
    imgBox.style.background = 'no-repeat center center / contain';
    reader.onload = function(e){
      imgBox.style.backgroundImage ='url('+reader.result+')';
      imgBox.innerHTML = "";
    }
    reader.readAsDataURL(file);
  }
  cancel(){
    this.dialogRef.close();
  }
}
