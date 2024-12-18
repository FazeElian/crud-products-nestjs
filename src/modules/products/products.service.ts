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
        // Product finding
        const productFound = this._products.find(
            // trim() -> delete spaces between letters
            // toLowerCase -> transforms all the characters to lower case
            n => n.toLowerCase().trim() == product.toLowerCase().trim()
        );

        if (!productFound) {
            // Add an element at the end of the array
            this._products.push(product);

            // Print the array elements
            console.log("Products:", this._products)
            return true;
        } else {
            return false;
        }
    }
}