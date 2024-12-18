import { Body, Controller, Post } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('api/products')
export class ProductsController {
    // Linking controller with the service
    constructor(private ProductsService: ProductsService) {

    }

    // Decorator for the method
    @Post()
    createProduct(@Body() data: { product: string }) {
        // call the method from the service when we send the product
        return this.ProductsService.createProduct(data.product)
    }
}
