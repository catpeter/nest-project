import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { WorkItem } from './work-item.entity';
import { Repository } from 'typeorm';
@Injectable()
export class WorkItemService {
    constructor(
        @InjectRepository(WorkItem)
        private readonly workItemRepository: Repository<WorkItem>) { }

    async remove() {
        return ;
    }
    edit(params) {
        const WorkItem = new WorkItem();
    }
    create() {
        const WorkItem = new WorkItem();
    }
    async findOne(id: number): Promise<WorkItem> {
        return await this.workItemRepository.findOne(id);
    }
    async findAll(): Promise<WorkItem[]> {
        return await this.workItemRepository.find();
    }
}
