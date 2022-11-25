import { Test, TestingModule } from '@nestjs/testing';
import { PointerController } from './pointer.controller';

describe('PointerController', () => {
  let controller: PointerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PointerController],
    }).compile();

    controller = module.get<PointerController>(PointerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
