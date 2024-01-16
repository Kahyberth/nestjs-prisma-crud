import { Body, Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductDto, UpdateProductDto } from './product.dto';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get()
  async getAllProducts() {
    return this.productService.getAllProducts();
  }

  @Get(':id')
  async getProductById(id: string) {
    return this.productService.getProductById(id);
  }

  @Post('/create')
  async createProduct(@Body() data: ProductDto) {
    return this.productService.createProduct(data);
  }

  @Patch(':id')
  async updateProduct(id: string, @Body() data: UpdateProductDto) {
    return this.productService.updateProduct(id, data);
  }

  @Delete(':id')
  async deleteProduct(id: string) {
    return this.productService.deleteProduct(id);
  }
}
