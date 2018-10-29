import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../public/ts-files/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input()
  product: Product;

  @Output()
  emitter: EventEmitter<Product> = new EventEmitter<Product>();

  constructor() { }

  ngOnInit() {
  }

  removeProduct(): void {
    this.emitter.emit(this.product);
  }
}
