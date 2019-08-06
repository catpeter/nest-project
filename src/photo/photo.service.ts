import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Photo } from './photo.entity';

@Injectable()
export class PhotoService {
  constructor(
    @InjectRepository(Photo)
    private readonly photoRepository: Repository<Photo>,
  ) {}

  async findAll(): Promise<Photo[]> {
    return await this.photoRepository.find();
  }

  async create(params) {
　　　//  增加一条数据
    const photo = new Photo();
    photo.name = params.name;
    photo.description = params.description;
    photo.filename = params.filename;
    photo.views = params.views;
    photo.isPublished = params.isPublished;

    return this.photoRepository.save(photo)
        .then(res => {
            return this.findAll();
        })
        .catch(err => {
            return err;
        });
  }
}
