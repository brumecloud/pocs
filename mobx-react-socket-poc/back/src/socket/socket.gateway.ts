import { Logger } from '@nestjs/common';
import {
    ConnectedSocket,
    MessageBody,
    SubscribeMessage,
    WebSocketGateway,
} from '@nestjs/websockets';

@WebSocketGateway({
    cors: {
        origin: '*',
    },
})
export class SocketGateway {
    logger: Logger = new Logger(SocketGateway.name);

    @SubscribeMessage('hello')
    handleHelloEvent(
        @MessageBody() data: string,
        @ConnectedSocket() socket: any,
    ) {
        setInterval(() => {
            socket.emit(
                'events',
                JSON.stringify({
                    base: 1,
                    eu: Math.random(),
                    dol: Math.random() + 0.6,
                }),
            );
        }, 1000);
    }
}
