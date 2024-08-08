import { Injectable } from '@nestjs/common';
import { Socket } from 'socket.io-client';

@Injectable()
export class SocketService {
  private socket: Socket;

  constructor() {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    this.socket = require('socket.io-client')('http://127.0.0.1:3000'); // Replace with your server URL
    this.setupSocketEvents();
  }

  private setupSocketEvents() {
    // Listen to 'client' event from the server
    this.socket.on('client', (data) => {
      // console.log(`Received serverEvent: ${data}`);
      console.log('Received serverEvent:', data.data);
      console.log(data.data.scoreboards[0].innings_type);
      console.log(data.data.scoreboards[1].innings_type);
    });
  }

  // Emit 'messageToServer' event to the server
  emitClientEvent(payload: any) {
    this.socket.emit('joinRoom', payload);
  }

  roomLeft(payload: any) {
    this.socket.emit('roomLeft', payload);
  }
}
