import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Product } from '../../shared/services';

@Component({
  selector: 'ngs-product-details',
  styleUrls: [ './product-details.component.scss' ],
  templateUrl: './product-details.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailsComponent {
  @Input() product: Product;
}
