import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DietaryPhotoComponent } from '../../page/dietary-photo/dietary-photo.component';

@Component({
  selector: 'app-dietary-photo-add',
  templateUrl: './dietary-photo-add.component.html',
  styleUrls: ['./dietary-photo-add.component.css']
})
export class DietaryPhotoAddComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<DietaryPhotoComponent>,
  ) { }
  
  ngOnInit(): void {
    this.cssSizing();
    this.whattoday();
  }
  cssSizing(){
    var box = document.getElementsByClassName('photoUploadBox')[0] as HTMLElement;
    var boxWidth = box.offsetWidth;
    box.style.height = boxWidth + 'px';
    box.style.lineHeight = box.clientHeight + 'px'; 
  }
  cancel(){
    this.dialogRef.close();
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
  today ="";
  whattoday(){
    var year = new Date().getFullYear();
    var month = new Date().getMonth() + 1;
    var day = new Date().getDate();
    this.today = year+"-"+month+"-"+day;
    
  }
}
