import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaymentsModule } from 'src/payments/dtos/payments.module';
import { Payment } from './entities/Payment';
import { User } from './entities/User';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'mysql_db',
      port: 3307,
      database: 'nestjs_db',
      entities: [Payment, User],
      synchronize: true,
      username: 'testuser',
      password: 'testuser123',
    }),
    PaymentsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}