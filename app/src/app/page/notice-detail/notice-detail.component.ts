import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notice-detail',
  templateUrl: './notice-detail.component.html',
  styleUrls: ['./notice-detail.component.css']
})
export class NoticeDetailComponent implements OnInit {

  constructor(
     public router : Router
     ) { }

  ngOnInit(): void {
  }
  backward(){
    this.router.navigate(['/noticeList/']);
  }
  buttonclick(e : Event){
    var remove = document.getElementsByClassName('delete')[0] as HTMLElement;
    var revice = document.getElementsByClassName('revice')[0] as HTMLElement;
    var cancel = document.getElementsByClassName('cancel')[0] as HTMLElement;
    var update = document.getElementsByClassName('update')[0] as HTMLElement;
    var textarea = document.getElementsByTagName('textarea')[0];
    if((e.target as HTMLElement).classList.contains('revice')){
      remove.style.display ='none';
      revice.style.display ='none';
      cancel.style.display ='inline-block';
      update.style.display ='inline-block';
      textarea.readOnly = false;
      textarea.style.background = '#fff';
    }
    else if ((e.target as HTMLElement).classList.contains('cancel')){
      remove.style.display ='inline-block';
      revice.style.display ='inline-block';
      cancel.style.display ='none';
      update.style.display ='none';
      textarea.readOnly = true;
      textarea.style.background = '#eee';

    }
    else if ((e.target as HTMLElement).classList.contains('delete')){
      if(confirm('이 게시글을 삭제하시겠습니까?')){
        alert('삭제되었습니다.')
      }
    }
    else if ((e.target as HTMLElement).classList.contains('update')){
      if(confirm('수정하시겠습니까?')){
        remove.style.display ='inline-block';
        revice.style.display ='inline-block';
        cancel.style.display ='none';
        update.style.display ='none';
        textarea.readOnly = true;
        textarea.style.background = '#eee';
      }
    }
  }
  
}
