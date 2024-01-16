import { Module } from '@nestjs/common';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [UserModule],
  controllers: [UserController],
  providers: [UserService, PrismaService],
})
export class AppModule {}
