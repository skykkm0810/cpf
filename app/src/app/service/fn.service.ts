import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FnService {

  constructor() { }

  dateFormatting( el ) {
    const fr = el.split("T");
    const sc = fr[0].split("-");
    return sc[0] + '년 ' + sc[1] + '월 ' + sc[2] + '일';
  }
}
