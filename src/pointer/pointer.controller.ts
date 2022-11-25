import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
  } from '@nestjs/common';
import { pointerDto } from './dto/pointer.dto';
import { PointerEntity } from './dto/pointer.entity';
import { PointerService } from './pointer.service';

  @Controller('pointer')
  export class PointerController {
    constructor(private pointerService: PointerService) {}
    @Get()
    async getAll() {
      return this.pointerService.findAll();
    }
    @Post()
    async createpointer(@Body() pointer: pointerDto): Promise<PointerEntity> {
      return this.pointerService.create(pointer);
    }
  
    // update todo
    @Put(':id')
    async updatePointer(@Param('id') id: string, @Body() todo: pointerDto) {
      return this.pointerService.updatePointer(Number(id), todo);
    }
  
    //delete todo
    @Delete(':id')
    async deletePointer(@Param('id') id: string) {
      this.pointerService.deletePointer(Number(id));
    }
  }
  