import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';
import { OrdersModule } from './orders/orders.module';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './database/database.module';
import { DatabaseModule } from './database/database.module';
import { DatabaseModule } from './database/database.module';
import { CommonModule } from './common/common.module';
import { SharedModule } from './shared/shared.module';
import { Config } from './config/config';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [ProductsModule, UsersModule, OrdersModule, AuthModule, DatabaseModule, CommonModule, SharedModule],
  controllers: [AppController],
  providers: [AppService, Config],
})
export class AppModule {}
