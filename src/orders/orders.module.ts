import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { OrdersService } from './services/orders/orders.service';

@Module({
  controllers: [OrdersController],
  providers: [OrdersService]
})
export class OrdersModule {}
