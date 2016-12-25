import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'ngs-home',
  styleUrls: [ './home.component.scss' ],
  templateUrl: './home.component.html'
})
export class HomeComponent {

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

  constructor(route: ActivatedRoute) {
    // TODO: add switchMap()
    route.params.subscribe(params => console.log(params));
  }
}
