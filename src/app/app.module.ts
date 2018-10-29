import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes  } from '@angular/router';


import { AppComponent } from './app.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { PicComponent } from '../app/components/pic/pic.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductComponent } from './components/product/product.component';
import { DiscountPipe } from './public/services/discount.pipe'
import { CartGuardService } from './public/services/cart-guard.service';
import { CountriesComponent } from './components/countries/countries.component';
import { CountryComponent } from './components/country/country.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductRestService } from './public/services/product-rest.service';


const routs: Routes = [
  { path: "products", component: ProductListComponent},
  { path: "cart", component: CartComponent, canActivate: [CartGuardService]},
  { path: "countries", component: CountriesComponent},
  { path: "", redirectTo: "products", pathMatch: "full"}
]

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    PicComponent,
    CartComponent,
    ProductComponent,
    DiscountPipe,
    CountriesComponent,
    CountryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(routs),
    HttpClientModule
  ],
  providers: [ProductRestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
