import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { PasswordChangeComponent} from '../../modal/password-change/password-change.component';
@Component({
  selector: 'app-mypage',
  templateUrl: './mypage.component.html',
  styleUrls: ['./mypage.component.css']
})
export class MypageComponent implements OnInit {

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }
  editInfo(){
    var updateInfo = document.getElementsByClassName('updateInfo')[0];
    var editInfo = document.getElementsByClassName('editInfo')[0];
    var contents = document.getElementsByClassName('contents');
    for(var i=0; i<contents.length; i ++){[
      contents[i].removeAttribute('disabled'),
      (contents[i] as HTMLElement).style.backgroundColor = '#fff'
    ]}
    editInfo.classList.add('hidden')
    updateInfo.classList.remove('hidden')
  }

  updateInfo(){
    var updateInfo = document.getElementsByClassName('updateInfo')[0];
    var editInfo = document.getElementsByClassName('editInfo')[0];
    var contents = document.getElementsByClassName('contents');
    for(var i=0; i<contents.length; i ++){[
      contents[i].setAttribute('disabled','true'),
      (contents[i] as HTMLElement).style.backgroundColor = '#eee'

    ]}
    editInfo.classList.remove('hidden')
    updateInfo.classList.add('hidden')
    alert('적용 되었습니다.')
  }

  changePw(){
    const dialogRef1 = this.dialog.open(PasswordChangeComponent)
  }
}
