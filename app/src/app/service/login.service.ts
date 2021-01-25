import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  Logined: boolean = true;
<<<<<<< HEAD
=======
  one: string = 'one';
  two: string = 'two';
>>>>>>> 9bb2c6605137b3124330443da27b8d70b0a5207c
  userInfo: any;

  @Output() Log: EventEmitter<any> = new EventEmitter();

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
