// src/auth/auth.controller.ts
import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginUserDto } from '../user/dto/login-user.dto'; // Ensure correct DTO import

@Controller('auth')  // This sets the prefix for all routes in this controller
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')  // This creates the /auth/login route
  async login(@Body() loginUserDto: LoginUserDto) {
    const user = await this.authService.validateUser(
      loginUserDto.email,
      loginUserDto.password,
    );
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }
    return this.authService.login(user);
  }
}
