import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { environment } from '../environments/environment';
import {
  ProductService,
  ShoppingCartService,
  StaticJsonProductService
} from './shared/services';

import { routes } from './app.routing';
import { API_BASE_URL } from './app.tokens';
import { AppComponent } from './app.component';
import { CheckoutComponent } from './checkout';
import { CartComponent, CartResolver } from './cart';
import { HomeComponent, ProductTileComponent } from './home';
import { ProductComponent, ProductDetailsComponent } from './product';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    MaterialModule
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
    { provide: ProductService, useClass: StaticJsonProductService },
    CartResolver,
    ShoppingCartService
  ]
})
export class AppModule {}
