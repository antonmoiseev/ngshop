import { NgModule } from '@angular/core';
import { MaterialRootModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { environment } from '../environments/environment';
import { ProductService } from './shared/services';

import { routes } from './app.routing';
import { API_BASE_URL } from './app.tokens';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { CheckoutComponent } from './checkout/checkout.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    MaterialRootModule
  ],
  declarations: [
    AppComponent,
    CheckoutComponent,
    HomeComponent,
    ProductComponent
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [
    { provide: API_BASE_URL, useValue: environment.apiBaseUrl },
    ProductService
  ]
})
export class AppModule {}
