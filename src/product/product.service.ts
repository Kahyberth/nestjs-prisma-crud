import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProductService {
  constructor(private prismaService: PrismaService) {}

  async createProduct(data: any) {
    return this.prismaService.product.create({
      data,
    });
  }

  async getAllProducts() {
    return this.prismaService.product.findMany();
  }

  async getProductById(id: string) {
    return this.prismaService.product.findUnique({
      where: {
        id,
      },
    });
  }

  async updateProduct(id: string, data: any) {
    return this.prismaService.product.update({
      where: {
        id,
      },
      data,
    });
  }

  async deleteProduct(id: string) {
    return this.prismaService.product.delete({
      where: {
        id,
      },
    });
  }
}
