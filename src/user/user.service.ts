import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async createUser(user: any) {
    await this.prisma.user.create({ data: user });
    return user;
  }

  async getallUsers() {
    const users = await this.prisma.user.findMany();
    return users;
  }
}
