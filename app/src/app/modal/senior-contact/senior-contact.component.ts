import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Senior } from 'src/app/interface/interface';

@Component({
  selector: 'app-senior-contact',
  templateUrl: './senior-contact.component.html',
  styleUrls: ['./senior-contact.component.css']
})
export class SeniorContactComponent implements OnInit {

  constructor(
    public dialogRef2: MatDialogRef<SeniorContactComponent>,
    ) {}

  ngOnInit(): void {
  }

}

