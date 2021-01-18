import { Component, OnInit } from '@angular/core';
import { DIETARYS} from '../../interface/interface';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DietaryPhotoAddComponent} from '../../modal/dietary-photo-add/dietary-photo-add.component';
import { DietaryPhotoUpdateComponent } from '../../modal/dietary-photo-update/dietary-photo-update.component';
@Component({
  selector: 'app-dietary-photo',
  templateUrl: './dietary-photo.component.html',
  styleUrls: ['./dietary-photo.component.css']
})
export class DietaryPhotoComponent implements OnInit {
  Month = new Date().getMonth();

  dietarys = DIETARYS
  constructor(
    public dialog: MatDialog,
    public dialog2:MatDialog,
  ) { }

  ngOnInit(): void {

  }
  addPhoto(){
      const dialogRef = this.dialog.open(DietaryPhotoAddComponent);
  }
  
  menuclick(e : Event){
      if((e.target as HTMLElement).classList.contains('edit')){
        const dialogRef2 = this.dialog2.open(DietaryPhotoUpdateComponent);
      } 
      else if((e.target as HTMLElement).classList.contains('remove')){
        if(confirm('삭제하시겠습니까?')){
          alert('삭제되었습니다.');
        }
      }
     
    
  }
}
