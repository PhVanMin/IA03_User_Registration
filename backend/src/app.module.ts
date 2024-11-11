// src/app.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGODB_URI ?? "mongodb+srv://minh3107:NNLHFPYxrjtsSaQa@server.4phc6ac.mongodb.net/?retryWrites=true&w=majority&appName=Server"),
    UserModule,
    AuthModule,
  ],
})
export class AppModule {}
