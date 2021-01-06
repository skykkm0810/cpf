import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GenService {

  constructor() { }

  genDevice() {
    const name: string[] = ['RB-01', 'ST-01', 'ST-04', 'RB-05', 'RB-07'];
    const type: string[] = ['로봇', '센서'];
    const centerId: number[] = [1, 2];
    const location: string[] = ['활동실', '주방', '휴게실', '출입구'];
    const status: string[] = ['정상', '이상', '수리'];

    const dvv: any = {
      name: this.randomEl(name), 
      type: this.randomEl(type), 
      centerId: this.randomEl(centerId), 
      location: this.randomEl(location), 
      status: this.randomEl(status)
    };
    return dvv;
  }

  randomEl(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }
  
  genRandomDate(start, end, startHour, endHour) {
  var date = new Date ( +start + Math.random() * (end - start));
  var hour = startHour + Math.random() * (endHour - startHour) | 0;
  date.setHours(hour);
  return date;
}

}
