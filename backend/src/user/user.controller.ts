import { Controller, Post, Body, UsePipes, ValidationPipe, Get, UseGuards, UnauthorizedException } from '@nestjs/common';
import { UserService } from './user.service';
import { RegisterUserDto } from './dto/register-user.dto';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from 'src/auth/auth.service';
import { LoginUserDto } from './dto/login-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  @UsePipes(new ValidationPipe({ whitelist: true }))
  async register(@Body() registerUserDto: RegisterUserDto) {
    return this.userService.register(registerUserDto);
  }

  @Get('profile')
  @UseGuards(AuthGuard('jwt'))
  getProfile() {
    return { message: 'This is a protected route' };
  }
}
