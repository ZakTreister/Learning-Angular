import { Injectable } from '@angular/core';
import { Product } from '../ts-files/product';
import { adminBaseUrl } from '../ts-files/urls';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductRestService {
  baseUrl: string;
  productList: Product[];
  constructor(private http: HttpClient) {
    this.baseUrl = adminBaseUrl;
    this.getProductList();
  }

  createProduct(product: Product): Observable<any> {
    console.log(product)
    let url = `${this.baseUrl}create`;
    return this.http.post(url, product);

  }

  getProductList(): Observable<any> {
    let url: string = `${this.baseUrl}get/products`;
    return this.http.get(url);
  }
}
