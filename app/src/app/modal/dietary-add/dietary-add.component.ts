import { Component, OnInit } from '@angular/core';
import { MatDialogRef} from '@angular/material/dialog';
import { DietaryComponent} from '../../page/dietary/dietary.component';
@Component({
  selector: 'app-dietary-add',
  templateUrl: './dietary-add.component.html',
  styleUrls: ['./dietary-add.component.css']
})
export class DietaryAddComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<DietaryComponent>,

  ) { }

  ngOnInit(): void {
  }
  cancel(){
    this.dialogRef.close();
  }
  chk_file_type(event : Event) {
    var fileName = (event.target as HTMLInputElement).value;
    var what = fileName.slice(fileName.indexOf(".") + 1).toLowerCase();
    if( what !=='pdf'  ){
      alert('pdf 파일만 업로드 가능합니다. 확장자를 확인해주세요.');
      (document.getElementsByClassName('file')[0] as HTMLInputElement).value = '';
    }
  }
}
