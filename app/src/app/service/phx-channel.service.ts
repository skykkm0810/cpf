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
  instructorChannel: any;
  activityChannel: any;
  accessChannel: any;

  @Output() Device: EventEmitter<any> = new EventEmitter();
  @Output() Devices: EventEmitter<any> = new EventEmitter();
  @Output() Seniors: EventEmitter<any> = new EventEmitter();
  @Output() Requests: EventEmitter<any> = new EventEmitter();
  @Output() Users: EventEmitter<any> = new EventEmitter();
  @Output() Center: EventEmitter<any> = new EventEmitter();
  @Output() Centers: EventEmitter<any> = new EventEmitter();
  @Output() Account: EventEmitter<any> = new EventEmitter();
  @Output() Accounts: EventEmitter<any> = new EventEmitter();
  @Output() Instructors: EventEmitter<any> = new EventEmitter();
  @Output() Activities: EventEmitter<any> = new EventEmitter();
  @Output() Access: EventEmitter<any> = new EventEmitter();

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
        // console.log('cpf:center:add from phx socket: ', payload);
        this.Center.emit(payload);
      })
      this.centerChannel.on('center:detail', payload => {
        // console.log('cpf:center:detail from phx socket: ', payload);
        this.Center.emit(payload);
      })
      this.centerChannel.on('center:detail:update', payload => {
        // console.log('cpf:center:detail:update ', payload);
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
          // console.log('cpf:account:add from phx socket: ', payload);
          // this.Account.emit(payload);
        })
        this.accountChannel.on('account:detail', payload => {
          // console.log('cpf:account:detail from phx socket: ', payload);
          // this.Account.emit(payload);
        })
        this.accountChannel.on('account:detail:update', payload => {
          // console.log('cpf:account:detail:update ', payload);
        })
        this.accountChannel.on('account:list', payload => {
          // console.log('cpf:account:list from phx socket: ', payload);
          this.Accounts.emit(payload.body);
        })
  
      this.instructorChannel = this.socket.channel('cpf:instructor', {} );
      this.instructorChannel
        .join()
        .receive('ok', resp => {
          console.log('Joined successfully', resp);
        })
        .receive('error', resp => {
          console.log('Unable to join', resp);
        });
        this.instructorChannel.on('instructor:add', payload => {
          // console.log('cpf:instructor:add from phx socket: ', payload);
          // this.Instructors.emit(payload);
        })
        this.instructorChannel.on('instructor:detail', payload => {
          // console.log('cpf:instructor:detail from phx socket: ', payload);
          // this.Instructors.emit(payload);
        })
        this.instructorChannel.on('instructor:detail:update', payload => {
          // console.log('cpf:instructor:detail:update ', payload);
        })
        this.instructorChannel.on('instructor:list', payload => {
          // console.log('cpf:instructor:list from phx socket: ', payload);
          this.Instructors.emit(payload.body);
        })

      this.activityChannel = this.socket.channel('cpf:activity', {} );
      this.activityChannel
        .join()
        .receive('ok', resp => {
          console.log('Joined successfully', resp);
        })
        .receive('error', resp => {
          console.log('Unable to join', resp);
        });
        this.activityChannel.on('activity:add', payload => {
          // console.log('cpf:activity:add from phx socket: ', payload);
          // this.activitys.emit(payload);
        })
        this.activityChannel.on('activity:detail', payload => {
          // console.log('cpf:activity:detail from phx socket: ', payload);
          // this.activitys.emit(payload);
        })
        this.activityChannel.on('activity:detail:update', payload => {
          // console.log('cpf:activity:detail:update ', payload);
        })
        this.activityChannel.on('activity:list', payload => {
          // console.log('cpf:activity:list from phx socket: ', payload);
          this.Activities.emit(payload.body);
        })

      this.accessChannel = this.socket.channel('cpf:access', {});
      this.accessChannel
        .join()
        .receive('ok', resp => {
          console.log('Joined successfully', resp);
        })
        .receive('error', resp => {
          console.log('Unable to join', resp);
        });
        this.accessChannel.on('access:resp', payload => {
          // console.log('cpf:access:add from phx socket: ', payload);
          this.Access.emit(payload);
        })
  }

  send(channel, message) {
    switch (channel) {
      case 'device':
        this.deviceChannel.push("device:add:req", {body: message});
        break;

      case 'center':
        this.centerChannel.push("center:add:req", {body: message});
        break;

      case 'account':
        this.accountChannel.push("account:add:req", {body: message});
        break;

      case 'instructor':
        this.instructorChannel.push("instructor:add:req", {body: message});
        break;

      case 'activity':
        this.activityChannel.push("activity:add:req", {body: message});
        break;

      case 'access':
        this.accessChannel.push("access:req", {body: message});
        break;
  
      default:
        break;
    }
  }

  gets(channel, message?) : void {
    switch (channel) {
      case 'device':
        this.deviceChannel.push('device:list:req', { body: message });
        break;

      case 'senior':
        this.seniorChannel.push('senior:list:req', { body: message });
        break;

      case 'center':
        this.centerChannel.push('center:list:req', { body: message });
        break;

      case 'account':
        this.accountChannel.push('account:list:req', { body: message });
        break;

      case 'instructor':
        this.instructorChannel.push('instructor:list:req', { body: message });
        break;

      case 'activity':
        this.activityChannel.push('activity:list:req', { body: message });
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
      case 'device':
        this.deviceChannel.push('device:detail:update:req', {body: message});
        break;

      case 'center':
        this.centerChannel.push('center:detail:update:req', {body: message});
        break;

      case 'account':
        this.accountChannel.push('account:detail:update:req', {body: message});
        console.log(message);
        break;

      case 'activity':
        this.activityChannel.push('activity:detail:update:req', {body: message});
        console.log(message);
        break;
        
      default:
        break;
    }
  }

  del(channel, message) : void {
    switch ( channel ) {
      case 'device':
        this.deviceChannel.push('device:delete:req', {body: message});
        break;

      case 'center':
        this.centerChannel.push('center:delete:req', {body: message});
        break;

      case 'account':
        this.accountChannel.push('account:delete:req', {body: message});
        break;

      case 'activity':
        this.activityChannel.push('activity:delete:req', {body: message});
        break;
  
      default:
        break;
    }
  }
}
