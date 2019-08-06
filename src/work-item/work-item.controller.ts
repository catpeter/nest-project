import { Controller, Get, Param, Post, Put, Delete, Body } from '@nestjs/common';
import { WorkItemService } from './work-item.service';
import { WorkItem } from './work-item.entity';

@Controller('work-item')
export class WorkItemController {
    constructor(private readonly workItemService: WorkItemService) {

    }

    @Get('workItem')
    async findAll(): Promise<WorkItem[]> {
        return await this.workItemService.findAll();
    }

    @Get('workItem/:id')
    async findOne(@Param() params): Promise<WorkItem> {
        return await this.workItemService.findOne(params.id);
    }

    @Post('workItem')
    async create(@Body() params) {
        return await this.workItemService.create(params);
    }

    @Put('workItem/:id')
    async edit(@Body() params) {
        return await this.workItemService.edit(params);
    }

    @Delete('workItem/:id')
    async remove(@Param() params) {
        return await this.workItemService.remove(params.id);
    }

}
