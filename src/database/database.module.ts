// src/modules/database/database.module.ts

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/ecommerce', {
      //   useUnifiedTopology: true,
      //   useNewUrlParser: true, // This option is valid for Mongoose
    }),
  ],
})
export class DatabaseModule {}
