import { Route } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { CheckoutComponent } from './checkout/checkout.component';

// TODO: Refactor to Routing Module in the advanced course.
export const routes: Route[] = [
  { path: '',         component: HomeComponent },
  { path: 'product',  component: ProductComponent },
  { path: 'checkout', component: CheckoutComponent }
];
