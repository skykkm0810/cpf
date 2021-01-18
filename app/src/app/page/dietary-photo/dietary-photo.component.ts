import { Component, OnInit } from '@angular/core';
import { DIETARYS} from '../../interface/interface';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DietaryPhotoAddComponent} from '../../modal/dietary-photo-add/dietary-photo-add.component';
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
  ) { }

  ngOnInit(): void {

  }
  addPhoto(){
      const dialogRef = this.dialog.open(DietaryPhotoAddComponent);
  }
}
