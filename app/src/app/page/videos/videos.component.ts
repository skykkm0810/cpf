import { Component, OnInit } from '@angular/core';
import { VIDEOS } from '../../interface/interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {
  videos = VIDEOS;
  detail(){
    this.router.navigate(['/vdetail/']);
  }
  constructor(
    public router : Router,

  ) { }

  ngOnInit(): void {
  }
  
}
