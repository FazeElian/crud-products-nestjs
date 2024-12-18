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

            return true;
        } else {
            return false;
        }
    }

    getProducts(start?: string) {
        if (!start) {
            // Return all the products
            return this._products;
        } else {
            return this._products.filter(
                n => n.toLowerCase().trim().startsWith(start.toLowerCase().trim())
            );
        }
    }

    updateProduct(product: string, newProduct: string) {
        // Product finding
        const indexProductFound = this._products.findIndex(
            n => n.toLowerCase().trim() == product.toLowerCase().trim()
        );

        // New Product finding
        const indexNewProductFound = this._products.findIndex(
            n => n.toLowerCase().trim() == newProduct.toLowerCase().trim()
        );

        if (indexProductFound != -1 && indexNewProductFound == -1) {
            this._products[indexProductFound] = newProduct;
            return true;
        } else {
            return false;
        }
    }

    deleteProduct(product: string) {
        const deletedBefore = this._products.length;
        this._products = this._products.filter(
            n => n.toLowerCase().trim() != product.toLowerCase().trim()
        );

        const deletedAfter = this._products.length;

        return deletedBefore != deletedAfter;
    }
}