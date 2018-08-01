import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from './product';

@Injectable()
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  // I'm subscribing inside the method to simplify the demo
  // A better solution is to return an observable and subscribe in the component
  getProducts(): Product[] {

    const products: Product[] = [];

    this.httpClient.get<Product[]>('/api/products')
      .subscribe(
        data => products.push(...data),
        err => console.log(err)
      );

    return products;
  }
  getProductsSearch(key: string): Product[] {

    const products: Product[] = [];

    this.httpClient.get<Product[]>('/api/products/search/' + key)
      .subscribe(
        data => products.push(...data),
        err => console.log(err)
      );

    return products;
  }

  getProductById(productId: number): Product {

    const product: Product = <Product> {};

    this.httpClient.get<Product>('/api/products/' + productId)
      .subscribe(
        data => Object.assign(product, data),
        err => console.log(err)
      );

    return product;
  }
}
