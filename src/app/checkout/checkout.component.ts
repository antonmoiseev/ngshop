import { Component } from '@angular/core';

@Component({
  selector: 'ngs-checkout',
  styleUrls: [ './checkout.component.scss' ],
  templateUrl: './checkout.component.html'
})
export class CheckoutComponent {

  readonly months: string[] = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];

  readonly years: number[];

  constructor() {
    const currentYear = new Date().getFullYear();
    this.years = Array.from({length: 10}, (_, index) => currentYear + index);
  }

}
