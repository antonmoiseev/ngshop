import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/debounceTime';

import { Product, ShoppingCartService } from '../shared/services';

@Component({
  selector: 'ngs-cart',
  styleUrls: [ './cart.component.scss' ],
  templateUrl: './cart.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartComponent {

  products: Product[];

  formModel: FormGroup;

  constructor(private cart: ShoppingCartService, route: ActivatedRoute) {
    this.products = route.snapshot.data['products'];
    const cartItems = this.cart.getItems();

    const controls = this.products.reduce((accumulator, product) => {
      const control = new FormControl(cartItems[product.id], positive);
      return Object.assign(accumulator, { [product.id]: control });
    }, {});

    this.formModel = new FormGroup(controls);
    this.formModel.valueChanges
      .debounceTime(200)
      .subscribe(value => {
        if (this.formModel.valid) {
          this.cart.setItems(value);
        }
      });
  }

  get total() {
    const cartItems = this.cart.getItems();
    return Object.keys(cartItems).reduce((total, productId) => {
      const product = this.products.find(p => p.id === productId);
      const quantity = cartItems[productId];
      return total + product.price * quantity;
    }, 0);
  }

  removeItem(productId: string) {
    const index = this.products.findIndex(p => p.id === productId);
    this.cart.removeItem(productId);
    this.products.splice(index, 1);
    this.formModel.removeControl(productId);
  }

}

function positive(control: AbstractControl): {[key: string]: boolean} {
  const valid = Number.isInteger(control.value) && control.value > 0;
  return valid ? null : { positive: true };
}
