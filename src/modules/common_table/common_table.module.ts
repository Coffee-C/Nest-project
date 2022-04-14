import { Module } from '@nestjs/common';
import { CommonTableService } from './common_table.service';
import { CommonTableController } from './common_table.controller';

@Module({
  providers: [CommonTableService],
  controllers: [CommonTableController],
})
export class CommonTableModule {}
