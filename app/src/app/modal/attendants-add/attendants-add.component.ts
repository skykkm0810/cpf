import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attendants-add',
  templateUrl: './attendants-add.component.html',
  styleUrls: ['./attendants-add.component.css']
})
export class AttendantsAddComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  attandChk(e:Event){
    var card = e.target as HTMLElement;
    if( card.classList.contains('clicked')){
      card.classList.remove('clicked')
    }
    else{
      card.classList.add('clicked')
    }
  }
}
