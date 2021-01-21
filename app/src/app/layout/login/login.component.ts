import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';
import { PhxChannelService } from 'src/app/service/phx-channel.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  data: any = {
    uname: '',
    pwd: '',
  }

  constructor(
    private router: Router,
    private login: LoginService,
    private phxChannel: PhxChannelService
  ) {
    phxChannel.Access.subscribe( data => {
      if( data.body.length == 1 ) {
        this.login.setLogin(data.body[0]);
        this.router.navigate(['']);
      } else {
        this.data.pwd = '';
      }
    })
  }

  ngOnInit(): void {
  }

  access() {
    this.phxChannel.send('access', this.data);
  }

}
