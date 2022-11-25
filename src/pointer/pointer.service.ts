import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { pointerDto } from './dto/pointer.dto';
import { PointerEntity } from './dto/pointer.entity';

@Injectable()
export class PointerService {
    constructor(
        @InjectRepository(PointerEntity) private readonly userRepository : Repository<PointerEntity>
    ){

    }
    async create(data:any): Promise<PointerEntity>{
        return this.userRepository.save(data)
    }

    async findAll(): Promise<PointerEntity[]>{
        return this.userRepository.find();
    }

    async updatePointer(id:number , post : pointerDto){
        await this.userRepository.update(id, post)
    }

    async deletePointer(id: number) {
        const deletedTodo = await this.userRepository.delete(id);
        if (!deletedTodo.affected) {
          throw new HttpException('Todo not found', HttpStatus.NOT_FOUND);
        }
      }
}
