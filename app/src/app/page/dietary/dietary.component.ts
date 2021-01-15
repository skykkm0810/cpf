import { Component, OnInit } from '@angular/core';
import { DIETARYS} from '../../interface/interface';
import { MatDialog} from '@angular/material/dialog';
import {DietaryAddComponent } from '../../modal/dietary-add/dietary-add.component';
@Component({
  selector: 'app-dietary',
  templateUrl: './dietary.component.html',
  styleUrls: ['./dietary.component.css']
})
export class DietaryComponent implements OnInit {
  Month = new Date().getMonth();
  dietarys = DIETARYS;
  constructor(
    public dialog:MatDialog,
  ) { }

  ngOnInit(): void {
  }
  upload(){
    const dialogRef = this.dialog.open(DietaryAddComponent,{
      width:'40%',
    });
  }
}
