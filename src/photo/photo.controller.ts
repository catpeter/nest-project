
import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { PhotoService } from './photo.service';
import { Photo } from './photo.entity';

@Controller()
export class PhotoController {
  constructor(private readonly photoService: PhotoService) {}

  @Get('photo')
  findAll(): Promise<Photo[]> {
    return this.photoService.findAll();
  }

  @Post('photo/create')
  create(@Body() params) {
      return this.photoService.create(params);
  }
}