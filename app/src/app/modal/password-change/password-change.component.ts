import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MypageComponent} from '../../page/mypage/mypage.component';
@Component({
  selector: 'app-password-change',
  templateUrl: './password-change.component.html',
  styleUrls: ['./password-change.component.css']
})
export class PasswordChangeComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<MypageComponent>,
    
  ) { }

  ngOnInit(): void {
  }
  cancel(){
    this.dialogRef.close();
  }
  verify(){
    var chkBox = document.getElementsByClassName('verify')[0] as HTMLElement;
    var changeBox = document.getElementsByClassName('changeKit')[0] as HTMLElement;
    chkBox.style.display = 'none';
    changeBox.style.display ='block';
  }
  checkPw(event: Event) {
    var pwchk = event.target as HTMLInputElement;
    var chknotice = pwchk.parentElement.getElementsByClassName('pwCheck')[0];
    var pw = pwchk.previousSibling.previousSibling as HTMLInputElement;
    if (pw.value == '') {
      chknotice.textContent = '위 비밀번호가 입력되지 않았습니다.'
    } else if (pw.value == pwchk.value) {
      chknotice.textContent = '비밀번호가 서로 일치합니다.'
      chknotice.classList.add('green');
    } else {
      chknotice.classList.remove('green');
      chknotice.textContent = '비밀번호가 서로 일치하지 않습니다.'
    }
  }
}
