import { Test, TestingModule } from '@nestjs/testing';
import { PointerService } from './pointer.service';

describe('PointerService', () => {
  let service: PointerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PointerService],
    }).compile();

    service = module.get<PointerService>(PointerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
