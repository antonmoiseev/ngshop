import { NgShopPage } from './app.po';

describe('ng-shop App', function() {
  let page: NgShopPage;

  beforeEach(() => {
    page = new NgShopPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
