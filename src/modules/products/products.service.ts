import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
    // Products private array
    private _products: string[];

    constructor() {
        // Initial value of empty
        this._products = [];
    }

    createProduct(product: string) {
        // Add an element at the end of the array
        this._products.push(product);

        // Print the array elements
        console.log("Products:", this._products)
        return true;
    }
}