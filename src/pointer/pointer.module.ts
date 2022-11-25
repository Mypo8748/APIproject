import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PointerEntity } from './dto/pointer.entity';
import { PointerController } from './pointer.controller';
import { PointerService } from './pointer.service';

@Module({
    imports: [TypeOrmModule.forFeature([PointerEntity])],
    providers: [PointerService],
    controllers: [PointerController]
    
  })
export class PointerModule {}
