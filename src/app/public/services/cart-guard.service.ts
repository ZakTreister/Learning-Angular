import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CartGuardService implements CanActivate {
  hasProducts: boolean;
  constructor(public router: Router) {
    this.hasProducts = false;
  }

  canActivate(): boolean {
    if (!this.hasProducts) {

      this.router.navigate(['/products']);
    }
    return this.hasProducts;
  }
}
