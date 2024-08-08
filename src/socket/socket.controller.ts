import { Body, Controller, Post } from '@nestjs/common';
import { SocketService } from './socket.service';

@Controller('socket')
export class SocketController {
  constructor(private readonly socketService: SocketService) {}

  @Post()
  Emit(@Body() data: any) {
    return this.socketService.emitClientEvent(data);
  }

  @Post('/leave')
  roomLeft(@Body() data: any) {
    return this.socketService.roomLeft(data);
  }
}
