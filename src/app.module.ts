import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhotoModule } from './photo/photo.module';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';
import { WorkItemController } from './work-item/work-item.controller';
import { WorkItemModule } from './work-item/work-item.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '123456',
        database: 'nestproject',
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true,
      }),
      PhotoModule,
      UserModule,
      WorkItemModule,
  ],
  controllers: [AppController, UserController, WorkItemController],
  providers: [AppService, UserService],
})
export class AppModule {}
