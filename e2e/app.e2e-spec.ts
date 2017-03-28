import { NgDemoMarvelPage } from './app.po';

describe('ng-demo-marvel App', () => {
  let page: NgDemoMarvelPage;

  beforeEach(() => {
    page = new NgDemoMarvelPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
