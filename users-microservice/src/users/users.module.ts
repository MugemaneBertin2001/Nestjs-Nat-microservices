import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Payment } from 'src/typeorm/entities/Payment';
import { User } from 'src/typeorm/entities/user';
import { UsersService } from './users.service';
import { UsersMicroserviceController } from './users.controller';

@Module({
    imports: [TypeOrmModule.forFeature([User, Payment])],
    controllers: [UsersMicroserviceController],
    providers: [UsersService],
})
export class UsersModule{}