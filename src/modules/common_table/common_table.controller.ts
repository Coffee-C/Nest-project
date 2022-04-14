import { Body, Controller, Get, Post, Param, Query } from '@nestjs/common';
import { CommonTableService } from './common_table.service';
import { execSync } from 'child_process';
@Controller('common_table')
export class CommonTableController {
  constructor(private readonly commonTableService: CommonTableService) {}

  @Get('select')
  select(@Query('table') table) {
    return this.commonTableService.select(table);
  }

  @Post('add')
  async add(@Body() schema) {
    const { msg } = await this.commonTableService.create(schema);
    if (msg === 'success') {
      execSync('npm run db');
      return { code: 200 };
    }
    return { code: -1, msg: 'CreateTable Error' };
  }
}
