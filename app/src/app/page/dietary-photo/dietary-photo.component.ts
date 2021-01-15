import { Component, OnInit } from '@angular/core';
import { DIETARYS} from '../../interface/interface';
@Component({
  selector: 'app-dietary-photo',
  templateUrl: './dietary-photo.component.html',
  styleUrls: ['./dietary-photo.component.css']
})
export class DietaryPhotoComponent implements OnInit {
  dietarys = DIETARYS
  constructor() { }

  ngOnInit(): void {

  }
 
}
