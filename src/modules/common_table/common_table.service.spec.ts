import { Test, TestingModule } from '@nestjs/testing';
import { CommonTableService } from './common_table.service';

describe('CommonTableService', () => {
  let service: CommonTableService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CommonTableService],
    }).compile();

    service = module.get<CommonTableService>(CommonTableService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
