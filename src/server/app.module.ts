import { Module } from '@nestjs/common';
import { ChatModule } from '../server/chat/chat.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { RoomModule } from '../server/room/room.module';
import { CaslModule } from '../server/casl/casl.module';
import { UserModule } from '../server/user/user.module';

@Module({
    imports: [
        ChatModule,
        ServeStaticModule.forRoot({
            rootPath: join(__dirname, '..', '..', 'dist', 'client'),
            exclude: ['/api*'],
        }),
        RoomModule,
        CaslModule,
        UserModule,
    ],
})
export class AppModule { }
