import { Component, OnInit } from '@angular/core';
import { VIDEOS } from '../../interface/interface';
import { Router } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { VideosAddComponent} from '../../modal/videos-add/videos-add.component';
import { VideosUpdateComponent} from '../../modal/videos-update/videos-update.component';
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
    public dialog: MatDialog,
    public dialog2: MatDialog,

  ) { }
  addvideo(): void {
    const dialogRef = this.dialog.open(VideosAddComponent, {
      width: '40%',
    });
  }
  ngOnInit(): void {
  }
  update() {
    const dialogRef2 = this.dialog2.open(VideosUpdateComponent, {
      width: '40%',
    });
  }
  remove() {
    if(confirm('삭제 하시겠습니까?')){
      alert('삭제되었습니다.');
    }
  }
}
