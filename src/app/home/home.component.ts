import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MdTabGroup } from '@angular/material';
import 'rxjs/add/operator/switchMap';

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

  constructor(private route: ActivatedRoute, private router: Router) {
    // TODO: add switchMap()
    this.route.params.subscribe(params => console.log(params));
  }

  ngAfterViewInit() {
    const category = this.route.snapshot.params['category'];
    this.mdTabGroup.selectedIndex = this.categories.indexOf(category);
    this.mdTabGroup.selectedIndexChange.subscribe(tabIndex => {
      this.router.navigate([this.categories[tabIndex]], { relativeTo: this.route.parent });
    });
  }
}
