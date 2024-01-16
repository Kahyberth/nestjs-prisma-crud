import {
  Body,
  Controller,
  Get,
  HttpCode,
  Patch,
  Post,
  Param,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto, updateDto } from './user.dto';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  @HttpCode(201)
  async createUser(@Body() params: UserDto) {
    const { name, lastname, password, email } = params;
    const user = {
      name,
      lastname,
      password,
      email,
    };

    await this.userService.createUser(user);
    return user;
  }

  @Get()
  async getAllUsers() {
    const users = await this.userService.getallUsers();
    return users;
  }

  @Patch(':id')
  async updateUser(@Body() params: updateDto, @Param('id') id: string) {
    const { name, lastname, password, email } = params;
    const user = {
      name,
      lastname,
      password,
      email,
    };

    await this.userService.updateUser(id, user);
    return user;
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string) {
    await this.userService.deleteUser(id);
    return { message: 'User deleted' };
  }
}
