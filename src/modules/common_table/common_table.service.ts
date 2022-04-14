import { Injectable } from '@nestjs/common';
import {
  getConnection,
  Table,
  TableOptions,
  createQueryBuilder,
} from 'typeorm';
@Injectable()
export class CommonTableService {
  async create(schema: TableOptions) {
    const queryRunner = await getConnection().createQueryRunner();
    await queryRunner.createTable(new Table(schema), true);
    await queryRunner.release();
    return { msg: 'success' };
  }

  async select(tableName: string) {
    const modules = await import(`../entities/${tableName}`);
    const selectData = await createQueryBuilder(modules[tableName]).getOne();
    console.log(selectData);
    return selectData;
  }
}
