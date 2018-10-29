import { Component, OnInit } from '@angular/core';
import { CartService } from '../../public/services/cart.service';
import { Product } from '../../public/ts-files/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: Product[];

  constructor(private cartService: CartService) {

  }

  ngOnInit() {
    this.cart = this.cartService.cart;
  }

  removeProduct(p: Product) {
    this.cart.splice(this.cart.indexOf(p), 1);

  }


}
