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
  accountChannel: any;

  @Output() Devices: EventEmitter<any> = new EventEmitter();
  @Output() Seniors: EventEmitter<any> = new EventEmitter();
  @Output() Requests: EventEmitter<any> = new EventEmitter();
  @Output() Users: EventEmitter<any> = new EventEmitter();
  @Output() Center: EventEmitter<any> = new EventEmitter();
  @Output() Centers: EventEmitter<any> = new EventEmitter();
  @Output() Account: EventEmitter<any> = new EventEmitter();
  @Output() Accounts: EventEmitter<any> = new EventEmitter();

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
      // console.log('cpf:device:list from phx socket: ', payload);
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
      this.centerChannel.on('center:add', payload => {
        console.log('cpf:center:add from phx socket: ', payload);
        this.Center.emit(payload);
      })
      this.centerChannel.on('center:detail', payload => {
        console.log('cpf:center:detail from phx socket: ', payload);
        this.Center.emit(payload);
      })
      this.centerChannel.on('center:detail:update', payload => {
        console.log('cpf:center:detail:update ', payload);
      })
      this.centerChannel.on('center:list', payload => {
        // console.log('cpf:center:list from phx socket: ', payload);
        this.Centers.emit(payload.body);
      })

      this.accountChannel = this.socket.channel('cpf:account', {});
      this.accountChannel
        .join()
        .receive('ok', resp => {
          console.log('Joined successfully', resp);
        })
        .receive('error', resp => {
          console.log('Unable to join', resp);
        });
        this.accountChannel.on('account:add', payload => {
          console.log('cpf:account:add from phx socket: ', payload);
          this.Account.emit(payload);
        })
        this.accountChannel.on('account:detail', payload => {
          console.log('cpf:account:detail from phx socket: ', payload);
          this.Account.emit(payload);
        })
        this.accountChannel.on('account:detail:update', payload => {
          console.log('cpf:account:detail:update ', payload);
        })
        this.accountChannel.on('account:list', payload => {
          // console.log('cpf:account:list from phx socket: ', payload);
          this.Accounts.emit(payload.body);
        })
  
    
  }

  // reqDevices() {
  //   this.deviceChannel.push('reqDevices', 'number: 5');
  // }

  send(channel, message) {
    switch (channel) {
      case 'device':
        this.deviceChannel.push("device:add", {body: message});
        break;

      case 'center':
        this.centerChannel.push("center:add:req", {body: message});
        break;

      case 'account':
        this.accountChannel.push("account:add:req", {body: message});
        break;
  
      default:
        break;
    }
  }

  gets(channel, message?) : void {
    switch (channel) {
      case 'device':
        this.deviceChannel.push('device:list:req', message);
        break;

      case 'senior':
        this.seniorChannel.push('senior:list:req', message);
        break;

      case 'center':
        this.centerChannel.push('center:list:req', message);
        break;

      case 'account':
        this.accountChannel.push('account:list:req', message);
        break;

      default:
        break;
    }
  }

  get(channel, message) : void {
    switch (channel) {
      case 'center':
        this.centerChannel.push('center:detail:req', {body: message});
        break;

      default:
        break;
    
    }
  }

  up(channel, message) : void {
    switch ( channel ) {
      case 'center':
        this.centerChannel.push('center:detail:update:req', {body: message});
        break;

      case 'account':
        this.accountChannel.push('account:detail:update:req', {body: message});
        console.log(message);
        break;
        
      default:
        break;
    }
  }

  del(channel, message) : void {
    switch ( channel ) {
      case 'center':
        this.centerChannel.push('center:delete:req', {body: message});
        break;

      case 'account':
        this.accountChannel.push('account:delete:req', {body: message});
        break;
  
      default:
        break;
    }
  }
}
