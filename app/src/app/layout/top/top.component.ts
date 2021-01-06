import { Component, OnInit } from '@angular/core';
import { PhxChannelService } from '../../service/phx-channel.service';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {

  constructor(
    private phxChannel: PhxChannelService
  ) { }

  ngOnInit(): void {
  }

}
