import { Rc5WebpackPage } from './app.po';

describe('rc5-webpack App', function() {
  let page: Rc5WebpackPage;

  beforeEach(() => {
    page = new Rc5WebpackPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
