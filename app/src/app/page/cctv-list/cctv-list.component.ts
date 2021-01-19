import { Component, OnInit } from '@angular/core';
import { CCTVLIST, cctv} from '../../interface/interface';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CctvAddComponent } from '../../modal/cctv-add/cctv-add.component';
import { CctvUpdateComponent } from '../../modal/cctv-update/cctv-update.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cctv-list',
  templateUrl: './cctv-list.component.html',
  styleUrls: ['./cctv-list.component.css']
})
export class CctvListComponent implements OnInit {
  cctvs = CCTVLIST;
  constructor(
    public router : Router,
    public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  addcctv(): void {
    const dialogRef = this.dialog.open(CctvAddComponent, {
      width: '40%',
    });
  }
  updatecctv(): void {
    const dialogRef2 = this.dialog.open(CctvUpdateComponent, {
      width: '40%',
    });
  }
  
  detail( id : number ){
    this.router.navigate(['/cctvDetail/' + id]);
  }
  remove() {
    if(confirm('삭제 하시겠습니까?')){
      alert('삭제되었습니다.');
    }
  }
  Filter(){
    var filter, input, text,card ;
    input = document.getElementById('filter');
    filter = input.value;
    card = document.getElementsByClassName('itemcard')
    
    for(var i=0; i<card.length; i++){
      card[i].style.display = 'none';
      text = card[i].getElementsByTagName('p');
      for(var j=0; j< text.length; j++){
        if(text[j].textContent.indexOf(filter) > -1) {
          card[i].style.display="block";
        }
      }
    }

  }
}



