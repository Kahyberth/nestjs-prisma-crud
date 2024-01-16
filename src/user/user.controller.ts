import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './user.dto';

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
}
