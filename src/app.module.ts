import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './user.entity';
import { JwtModule } from '@nestjs/jwt/dist';
import { ProductService } from './product/product.service';
import { ProductModule } from './product/product.module';
import { ConfigModule } from '@nestjs/config'
import { ProductEntity } from './product/dto/product.entity';
import { EmployeeService } from './employee/employee.service';
import { EmployeeController } from './employee/employee.controller';
import { EmployeeModule } from './employee/employee.module';
import { employeeEntity } from './employee/dto/employee.entity';
import { TaskService } from './task/task.service';
import { TaskController } from './task/task.controller';
import { TaskModule } from './task/task.module';
import { CustomerService } from './customer/customer.service';
import { CustomerController } from './customer/customer.controller';
import { CustomerModule } from './customer/customer.module';
import { CustomerEntity } from './customer/dto/customer.entity';
import { TaskEntity } from './task/dto/task.entity';
import { MockupService } from './mockup/mockup.service';
import { MockupController } from './mockup/mockup.controller';
import { MockupModule } from './mockup/mockup.module';
import { PointerService } from './pointer/pointer.service';
import { PointerController } from './pointer/pointer.controller';
import { PointerModule } from './pointer/pointer.module';
import { PointerEntity } from './pointer/dto/pointer.entity';


@Module({
  imports: [
    // ConfigModule.forRoot({isGlobal: true }),
    TypeOrmModule.forRoot({
    type: "postgres",
    host: "10.234.100.41",
    port: 30432,
    username: "postgres",
    password: "P@ssw0rd",
    database: "report-builder-db",
    synchronize: true,
    logging: true,
    entities: [User,ProductEntity,employeeEntity,CustomerEntity, TaskEntity , PointerEntity],
    subscribers: [],
    migrations: [],
    }),
    TypeOrmModule.forFeature([User, ProductEntity,employeeEntity,CustomerEntity , TaskEntity , PointerEntity]),
    JwtModule.register({
      secret: 'secret',
      signOptions: {expiresIn: '1d'}
    }),
    ProductModule,
    EmployeeModule,
    TaskModule,
    CustomerModule,
    MockupModule,
    PointerModule

  ],
  controllers: [AppController, EmployeeController, TaskController, CustomerController, MockupController, PointerController],
  providers: [AppService, ProductService, EmployeeService, TaskService, CustomerService, MockupService, PointerService],
})
export class AppModule {}
