import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhotoService } from './photo.service';
import { Photo } from './photo.entity';
import { PhotoController } from './photo.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Photo])],
  providers: [PhotoService],
  controllers: [
    PhotoController,
  ],
  exports: [],
})
export class PhotoModule implements NestModule {
  // tslint:disable-next-line: no-empty
  public configure(consumer: MiddlewareConsumer) {
  }
}
