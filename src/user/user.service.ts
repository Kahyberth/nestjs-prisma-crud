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

  async getUserById(id: string) {
    const user = await this.prisma.user.findUnique({ where: { id } });
    return user;
  }

  async updateUser(id: string, user: any) {
    await this.prisma.user.update({ where: { id }, data: user });
    return user;
  }

  async deleteUser(id: string) {
    const user = await this.prisma.user.delete({ where: { id } });
    return user;
  }
}
