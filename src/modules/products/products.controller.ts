import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
    Query
} from '@nestjs/common';
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

    @Get()
    getProducts(@Query("start") start: string) {
        return this.ProductsService.getProducts(start);
    }

    @Put("/:product/:newProduct")
    updateProduct(@Param("product") product: string, @Param("newProduct") newProduct : string) {
        return this.ProductsService.updateProduct(product, newProduct); 
    }

    @Delete("/:product")
    deleteProduct(@Param("product") product: string){
        return this.ProductsService.deleteProduct(product);
    }
}
