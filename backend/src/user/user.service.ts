import { Injectable, ConflictException, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcryptjs';
import { User } from '../schemas/user.schema';
import { RegisterUserDto } from './dto/register-user.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async register(registerUserDto: RegisterUserDto): Promise<any> {
    const { email, password } = registerUserDto;

    // Check if email already exists
    const existingUser = await this.userModel.findOne({ email });
    if (existingUser) {
      throw new ConflictException('Email already exists');
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create and save user
    const user = new this.userModel({
      email,
      password: hashedPassword,
      createdAt: new Date(),
    });

    await user.save();
    return { message: 'User registered successfully' };
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.userModel.findOne({ email }).exec();
  }
}
