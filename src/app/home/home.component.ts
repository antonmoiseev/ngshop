import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MdTabGroup } from '@angular/material';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';

import { ProductService } from '../shared/services';

@Component({
  selector: 'ngs-home',
  styleUrls: [ './home.component.scss' ],
  templateUrl: './home.component.html'
})
export class HomeComponent implements AfterViewInit {

  // TODO: Make array items readonly after upgrading tp TypeScript 2.1
  // https://blogs.msdn.microsoft.com/typescript/2016/12/07/announcing-typescript-2-1/#partial-readonly-record-and-pick
  readonly categories = [
    'feature',
    'latest',
    'fashion',
    'furniture',
    'beauty',
    'food',
    'travel'
  ];

  @ViewChild(MdTabGroup) mdTabGroup: MdTabGroup;

  constructor(
      private productService: ProductService,
      private route: ActivatedRoute,
      private router: Router) {

    this.route.params
        // Parameters list below uses the ES6 feature called destructuring.
        .switchMap(({category}) => this.productService.getFeatured())
        .mergeMap(products => {
          console.log(products);
          return this.productService.getProductById(products[0].id);
        })
        .subscribe(p => console.log(p));
  }

  ngAfterViewInit() {
    const category = this.route.snapshot.params['category'];
    this.mdTabGroup.selectedIndex = this.categories.indexOf(category);
    this.mdTabGroup.selectedIndexChange.subscribe(tabIndex => {
      this.router.navigate([this.categories[tabIndex]], { relativeTo: this.route.parent });
    });
  }
}
