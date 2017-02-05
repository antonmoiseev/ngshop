import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MaterialRootModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { environment } from '../environments/environment';
import { ProductService, ShoppingCartService } from './shared/services';

import { routes } from './app.routing';
import { API_BASE_URL } from './app.tokens';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { HomeComponent } from './home/home.component';
import { ProductTileComponent } from './home/product-tile/product-tile.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    MaterialRootModule
  ],
  declarations: [
    AppComponent,
    CartComponent,
    CheckoutComponent,
    HomeComponent,
    ProductComponent,
    ProductTileComponent,
    ProductDetailsComponent
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [
    { provide: API_BASE_URL, useValue: environment.apiBaseUrl },
    ProductService,
    ShoppingCartService
  ]
})
export class AppModule {}
