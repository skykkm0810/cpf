import { Injectable, EventEmitter, Output } from '@angular/core';
import { Environment } from '../environment/environment';
import { Socket } from 'phoenix';
import { Device } from '../interface/interface';

declare const Phoenix: any;

@Injectable({
  providedIn: 'root'
})

export class PhxChannelService {

  socket: any;
  devicesChannel: any;

  @Output() Devices: EventEmitter<any> = new EventEmitter();

  constructor() {
    this.init_channel();
  }

  private init_channel() {
    this.socket = new Socket( `${Environment.socket_channel}/socket`, {
      logger: (kind, msg, data) => {
        console.log( `${kind}: ${msg}`, data );
      },
      transport: WebSocket
    });
    this.socket.connect();
    this.devicesChannel = this.socket.channel('cpf:device', {});

    this.devicesChannel
      .join()
      .receive('ok', resp => {
        console.log('Joined successfully', resp);
      })
      .receive('error', resp => {
        console.log('Unable to join', resp);
      });

    // this.devicesChannel.on('deviceList', payload => {
    //   console.log('cpf:device from phx channel: ', payload);
    //   // this.Devices.emit(payload.body);
    // })
    this.devicesChannel.on('device:add', payload => {
      console.log('cpf:device from phx channel: ', payload);
      // this.Devices.emit(payload.body);
    })
        // this.send('device', 'req:device', { status: 'device' } )
  }

  // reqDevices() {
  //   this.devicesChannel.push('reqDevices', 'number: 5');
  // }

  send(channel, event, message) {
    switch (channel) {
      case 'device':
        this.devicesChannel.push(event, {body: message});
        break;

      default:
        // this.devicesChannel.push(event, {body: message});
        break;
    }
  }

  gets(channel, message) : void {
    let rec;
    switch (channel) {
      case 'device':
          rec = this.devicesChannel.push('req:device:list', message);
          // .receive('ok', body => {
          //   console.log(body);
          // });
        break;
      
      default:
        break;
    }
  }
}
