import { Component, OnInit } from '@angular/core';
import { Product } from '../../public/ts-files/product';
import { CartService } from '../../public/services/cart.service';
import { CartGuardService } from '../../public/services/cart-guard.service';
import { ProductRestService } from '../../public/services/product-rest.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList: Product[];
  filteredProductList: Product[];
  name: string;
  price: number;
  units: number;
  image: string;
  selected: number;
  newName: string;
  newPrice: number;
  newUnits: number;
  newImage: string;
  hideEditor: boolean = true;
  _searchWord: string;


  constructor(private cart: CartService, private guard: CartGuardService, private service: ProductRestService) {
    this.getProductList();
  }

  ngOnInit() {
  }

  getProductList(): void {
    this.service.getProductList().subscribe((list: Product[]) => {
      this.productList = list;
      this.filteredProductList = this.productList;
    }, (error) => {
      console.log(error.message);
    })
  }

  public set searchWord(value: string) {
    this._searchWord = value;
    this.filterList();
  }

  public get searchWord() {
    return this._searchWord;
  }
  addproduct(): void {
    let newProduct: Product = new Product(0, this.name, this.price, this.units, this.image)
    this.service.createProduct(newProduct).subscribe((p) => {
      console.log(p);
    }, (error) => {
      console.log(error.message);
    });
  }

  filterList(): void {
    let a = this.searchWord;
    this.filteredProductList = this.productList.filter((p: Product) => {
        return p["name"].toLowerCase().includes(this.searchWord.toLowerCase());
    }, this);
  }

  doClick(i: number): void {
    if (!this.productList[i].inEditing) {
      this.productList[i].isSelected = !this.productList[i].isSelected;
    }
  }

  deleteSelected(): void {
    for (let index = 0; index < this.productList.length; index++) {
      if (this.productList[index].isSelected) {
        this.productList.splice(index, 1);
        index--;
      }
    }
    this.getProductList();
  }

  showEditor(p: Product): void {
    p.isSelected = true;
    p.inEditing = true;
  }

  addToCart(p: Product) {
    this.cart.cart.push(p);
    this.guard.hasProducts = true;
  }

  submitChanges(p: Product): void {
    if (this.newName) {
      p._name = this.newName;
      this.newName = "";
      console.log("here")
    }
    if (this.newPrice) {
      p._price = this.newPrice;
      this.newPrice = 0;
      console.log("here")
    }
    if (this.newUnits) {
      p._unitsInStock = this.newUnits;
      this.newUnits = 0;
    }
    if (this.newImage) {
      p._image = this.newImage;
      this.newImage = "";
    }
    p.inEditing = false;
  }
}
