// src/auth/auth.module.ts
import { Module, forwardRef } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';  // Ensure this is imported correctly
import { JwtStrategy } from './jwt.strategy';
import { UserModule } from '../user/user.module';

@Module({
  imports: [
    forwardRef(() => UserModule),
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'secretKey',
      signOptions: { expiresIn: '1h' },
    }),
  ],
  controllers: [AuthController],  // Ensure AuthController is here
  providers: [AuthService, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
