import { GESTIONTICKETPage } from './app.po';

describe('gestionticket App', function() {
  let page: GESTIONTICKETPage;

  beforeEach(() => {
    page = new GESTIONTICKETPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
