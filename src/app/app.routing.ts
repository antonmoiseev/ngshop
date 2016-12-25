import { Route } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { CheckoutComponent } from './checkout/checkout.component';

// TODO: Refactor to Routing Module in the advanced course.
export const routes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'categories' },
  { path: 'categories',
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'featured' },
      { path: ':category', component: HomeComponent },
    ]
  },
  { path: 'products', component: ProductComponent },
  { path: 'checkout', component: CheckoutComponent },
];
