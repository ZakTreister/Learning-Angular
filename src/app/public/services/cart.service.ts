import { Injectable } from '@angular/core';
import { Product } from '../ts-files/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: Product[];
  constructor() {
    this.cart = new Array<Product>();
  }
}
