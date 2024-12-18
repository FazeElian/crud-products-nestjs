import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
    // Products private array
    private _products: string[];

    constructor() {
        // Initial value of empty
        this._products = [];
    }
}