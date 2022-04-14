import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonTableModule } from './modules/common_table/common_table.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'root',
        database: 'test_db',
        autoLoadEntities: true, // 自动链接被 forFeature 注册的实体
        synchronize: true, // 实体与表同步 调试模式下开始。不然会有强替换导致数据丢是
      }),
      inject: [],
    }),
    UserModule,
    CommonTableModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
