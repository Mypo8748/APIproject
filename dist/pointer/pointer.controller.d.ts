import { pointerDto } from './dto/pointer.dto';
import { PointerEntity } from './dto/pointer.entity';
import { PointerService } from './pointer.service';
export declare class PointerController {
    private pointerService;
    constructor(pointerService: PointerService);
    getAll(): Promise<PointerEntity[]>;
    createpointer(pointer: pointerDto): Promise<PointerEntity>;
    updatePointer(id: string, todo: pointerDto): Promise<void>;
    deletePointer(id: string): Promise<void>;
}
