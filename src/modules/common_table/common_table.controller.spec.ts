import { Test, TestingModule } from '@nestjs/testing';
import { CommonTableController } from './common_table.controller';

describe('CommonTableController', () => {
  let controller: CommonTableController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CommonTableController],
    }).compile();

    controller = module.get<CommonTableController>(CommonTableController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
