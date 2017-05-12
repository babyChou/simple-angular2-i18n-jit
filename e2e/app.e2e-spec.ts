import { AProjectPage } from './app.po';

describe('a-project App', () => {
  let page: AProjectPage;

  beforeEach(() => {
    page = new AProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
