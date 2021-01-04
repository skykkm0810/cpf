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
}
