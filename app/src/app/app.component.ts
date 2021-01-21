import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './service/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app Component';

  logined: boolean;

  constructor(
    private login: LoginService,
    private router: Router
  ) {
    login.Log.subscribe( data => {
      this.logined = data;
      if ( !this.logined ) {
        this.router.navigate(['login']);
      }
    })
  }

  ngOnInit() {
    this.logined = this.login.Logined;
    if ( !this.logined ) {
      this.router.navigate(['login']);
    }
  }
}
