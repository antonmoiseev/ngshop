import { Inject, Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { API_BASE_URL } from '../../app.tokens';


export abstract class ProductService {
  abstract getAll(): Observable<Product[]>;
  abstract getCategory(category: string): Observable<Product[]>;
  abstract getProductById(productId: string): Observable<Product>;
}

@Injectable()
export class StaticJsonProductService implements ProductService {

  constructor(private http: Http) {}

  getAll(): Observable<Product[]> {
    return this.http.get('/data/products/all.json')
      .map(resp => resp.json());
  }

  getCategory(category: string): Observable<Product[]> {
    return this.http.get(`/data/products/${category}.json`)
      .map(resp => resp.json());
  }

  getProductById(productId: string): Observable<Product> {
    return this.http.get('/data/products/all.json')
      .map(resp => resp.json().find(p => p.id === productId));
  }

}

@Injectable()
export class FirebaseProductService {

  constructor(@Inject(API_BASE_URL) private baseUrl: string, private http: Http) {}

  getAll(): Observable<Product[]> {
    return this.http.get(`${this.baseUrl}/products.json`)
        .map(resp => resp.json())
        .map(data => assignId(data));
  }

  getFeatured(): Observable<Product[]> {
    const params = new URLSearchParams();
    params.append('orderBy', '"featured"');
    params.append('equalTo', 'true');

    return this.http.get(`${this.baseUrl}/products.json`, { search: params })
        .map(resp => resp.json())
        .map(data => assignId(data));
  }

  getProductById(id: string): Observable<Product> {
    return this.http.get(`${this.baseUrl}/products/${id}.json`)
        .map(resp => resp.json())
        .map(data => Object.assign(data, { id }));
  }

}

function assignId(data: any): any[] {
  return Object.keys(data).map(id => Object.assign(data[id], { id }));
}

export interface Product {
  description: string;
  featured: boolean;
  imageUrl: string;
  price: number;
  title: string;
  id: string;
}
