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
  deviceChannel: any;
  seniorChannel: any;
  eventChannel: any;
  requestChannel: any;
  centerChannel: any;

  @Output() Devices: EventEmitter<any> = new EventEmitter();
  @Output() Seniors: EventEmitter<any> = new EventEmitter();
  @Output() Requests: EventEmitter<any> = new EventEmitter();
  @Output() Users: EventEmitter<any> = new EventEmitter();
  @Output() Center: EventEmitter<any> = new EventEmitter();

  constructor() {
    this.init_channel();
  }

  private init_channel() {
    this.socket = new Socket( `${Environment.socket_channel}/socket`, {
      logger: (kind, msg, data) => {
        // console.log( `${kind}: ${msg}`, data );
      },
      transport: WebSocket
    });
    this.socket.connect();

    this.deviceChannel = this.socket.channel('cpf:device', {});
    this.deviceChannel
      .join()
      .receive('ok', resp => {
        console.log('Joined successfully', resp);
      })
      .receive('error', resp => {
        console.log('Unable to join', resp);
      });
    this.deviceChannel.on('device:add', payload => {
      // console.log('cpf:device from phx channel: ', payload);
      this.Devices.emit(payload);
    })
    this.deviceChannel.on('device:list', payload => {
      // console.log('cpf:device:list from phx socket: ', payload);
      this.Devices.emit(payload);
    })

    this.seniorChannel = this.socket.channel('cpf:senior', {});
    this.seniorChannel
      .join()
      .receive('ok', resp => {
        console.log('Joined successfully', resp);
      })
      .receive('error', resp => {
        console.log('Unable to join', resp);
      });
    this.seniorChannel.on('senior:list', payload => {
      console.log('cpf:device:list from phx socket: ', payload);
      this.Seniors.emit(payload);
    })

    this.centerChannel = this.socket.channel('cpf:center', {});
    this.centerChannel
      .join()
      .receive('ok', resp => {
        console.log('Joined successfully', resp);
      })
      .receive('error', resp => {
        console.log('Unable to join', resp);
      });
    this.centerChannel.on('center:detail', payload => {
      console.log('cpf:device:list from phx socket: ', payload);
      this.Center.emit(payload);
    })
    
  }

  // reqDevices() {
  //   this.deviceChannel.push('reqDevices', 'number: 5');
  // }

  send(channel, event, message) {
    switch (channel) {
      case 'device':
        this.deviceChannel.push(event, {body: message});
        break;

      default:
        break;
    }
  }

  gets(channel, message?) : void {
    switch (channel) {
      case 'device':
        this.deviceChannel.push('device:list:req', message);
        // .receive('ok', body => {
        //   console.log(body);
        // });
        break;

      case 'senior':
        this.seniorChannel.push('senior:list:req', message);
        break;

      default:
        break;
    }
  }

  get(channel, message) : void {
    switch (channel) {
      case 'center':
        this.centerChannel.push('center:detail:req', message);
        break;

      default:
        break;
    
    }
  }
}
