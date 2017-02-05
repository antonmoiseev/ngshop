import { Inject, Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { API_BASE_URL } from '../../app.tokens';

@Injectable()
export class ProductService {

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
