import { Component, OnInit } from '@angular/core';
import { ACTIVITIES,Activity } from "../../interface/interface";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { PhotoAddComponent} from '../../modal/photo-add/photo-add.component';
import { PhotoUpdateComponent} from '../../modal/photo-update/photo-update.component';

@Component({
  selector: 'app-photobook',
  templateUrl: './photobook.component.html',
  styleUrls: ['./photobook.component.css']
})
export class PhotobookComponent implements OnInit {
  activities = ACTIVITIES;
  constructor(public dialog: MatDialog,
    ) { }

  ngOnInit(): void {
  }
  remove() {
    if(confirm("정말 삭제 하시겠습니까?")){
      alert('삭제되었습니다.');
    }
  }
  addPhoto(activity?:Activity): void {
    const dialogRef = this.dialog.open(PhotoAddComponent, {
      width: '40%',
    });
  }
  updatePhoto(activity?:Activity): void {
    const dialogRef2 = this.dialog.open(PhotoUpdateComponent, {
      width: '40%',
    });
  }
  Filter(){
    var filter, input, text,card ;
    input = document.getElementById('filter');
    filter = input.value;
    card = document.getElementsByClassName('gridItem')
    
    for(var i=0; i<card.length; i++){
      card[i].style.display = 'none';
      text = card[i].getElementsByTagName('input');
      for(var j=0; j< text.length; j++){
        if(text[j].value.indexOf(filter) > -1) {
          card[i].style.display="block";
        }
      }
    }

  }

  
}
