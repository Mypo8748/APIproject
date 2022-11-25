import { Repository } from 'typeorm';
import { pointerDto } from './dto/pointer.dto';
import { PointerEntity } from './dto/pointer.entity';
export declare class PointerService {
    private readonly userRepository;
    constructor(userRepository: Repository<PointerEntity>);
    create(data: any): Promise<PointerEntity>;
    findAll(): Promise<PointerEntity[]>;
    updatePointer(id: number, post: pointerDto): Promise<void>;
    deletePointer(id: number): Promise<void>;
}
