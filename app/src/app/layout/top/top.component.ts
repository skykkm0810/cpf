import { Component, OnInit } from '@angular/core';
import { ASIDELISTS, USERS } from '../../interface/interface';
import { PhxChannelService } from '../../service/phx-channel.service';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {
  user = USERS;
  constructor(
    private phxChannel: PhxChannelService
  ) { }

  ngOnInit(): void {
  }
  Onmouse(){
    var img = document.querySelector('.userImg') as HTMLElement;
    var name = document.querySelector('.userName') as HTMLElement;
    img.style.border = "2px solid #000";
    name.style.textDecoration = "underline";
  }
  mouseOut(){
    var img = document.getElementsByClassName('userImg') as HTMLCollectionOf<HTMLElement>;
    var name = document.getElementsByClassName('userName') as HTMLCollectionOf<HTMLElement>;
    img[0].style.border = "0";
    name[0].style.textDecoration = "none";
  }
  changeSidebar(){
    // var sidebar = document.querySelector('.aside') as HTMLElement;
    // var width = sidebar.getBoundingClientRect().width;
    // function frame(){
    //   width--
    //   sidebar.style.width = width + 'px';
    //     if(width== 50){
    //       clearInterval(change)
    //     }
    //   }
    //   var change = setInterval(frame, 1)  
  }
}
