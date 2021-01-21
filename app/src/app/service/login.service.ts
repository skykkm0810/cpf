import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  Logined: boolean = true;
  one: string = 'one';
  two: string = 'two';
  userInfo: any;

  @Output() Log: EventEmitter<any> = new EventEmitter();
  @Output() Cla: EventEmitter<any> = new EventEmitter();

  constructor() { }

  setLogin( data ): void {
    this.Logined = true;
    this.userInfo = data;
    this.Log.emit(this.Logined);

  }

  setLogout(): void {
    this.Logined = false;
    this.userInfo = null;
    this.Log.emit(this.Logined);
  }
}
