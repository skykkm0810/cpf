import { EventEmitter, Injectable, Output } from '@angular/core';
import { io } from 'socket.io-client';
import { environment } from 'src/environments/environment';
import { Environment } from '../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class SocketioService {

  nodeSocket;

  @Output() Emergency: EventEmitter<any> = new EventEmitter();
  @Output() Weather: EventEmitter<any> = new EventEmitter();
  @Output() Covid: EventEmitter<any> = new EventEmitter();

  constructor() {
    this.setupSocketConnection();
  }

  setupSocketConnection() {
    this.nodeSocket = io(Environment.nodeSocket);
    this.nodeSocket.on('emergency:resp', data => {
      this.Emergency.emit(data);
    })
    this.nodeSocket.on('weather:resp', data => {
      this.Weather.emit(data);
    })
    this.nodeSocket.on('covid:resp', data => {
      this.Covid.emit(data);
    })
  }

  emergencyCall(info) {
    this.nodeSocket.emit('emergency', info);
  }

  weatherCall(x,y) {
    this.nodeSocket.emit('weather',x,y);
  }

  covidCall() {
    this.nodeSocket.emit('covid');
  }
}
