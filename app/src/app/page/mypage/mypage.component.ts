import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mypage',
  templateUrl: './mypage.component.html',
  styleUrls: ['./mypage.component.css']
})
export class MypageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  editInfo(){
    var updateInfo = document.getElementsByClassName('updateInfo')[0];
    var editInfo = document.getElementsByClassName('editInfo')[0];
    var contents = document.getElementsByClassName('contents');
    for(var i=0; i<contents.length; i ++){[
      contents[i].removeAttribute('disabled')
    ]}
    editInfo.classList.add('hidden')
    updateInfo.classList.remove('hidden')
  }

  updateInfo(){
    var updateInfo = document.getElementsByClassName('updateInfo')[0];
    var editInfo = document.getElementsByClassName('editInfo')[0];
    var contents = document.getElementsByClassName('contents');
    for(var i=0; i<contents.length; i ++){[
      contents[i].setAttribute('disabled','true')
    ]}
    editInfo.classList.remove('hidden')
    updateInfo.classList.add('hidden')
    alert('적용 되었씁니다.')
  }

}
