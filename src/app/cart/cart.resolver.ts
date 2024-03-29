import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/observable/of';

import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {
  Product,
  ProductService,
  ShoppingCartService
} from '../shared/services';

@Injectable()
export class CartResolver implements Resolve<Product[]> {

  constructor(private productService: ProductService,
              private shoppingCartService: ShoppingCartService) {}

  resolve(): Observable<Product[]> {
    // Get IDs of all products in the shopping cart.
    const productsInCart = Object.keys(this.shoppingCartService.getItems());

    // Create an array of lazy HTTP requests. Each request fetches a product.
    const requests = productsInCart.map(productId =>
        this.productService.getProductById(productId));

    // Create an observable that emits the result when all the requests
    // successfully complete.
    return requests.length ? Observable.forkJoin(requests) : Observable.of([]);
  }
}
