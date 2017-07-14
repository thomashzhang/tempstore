import { TempstorePage } from './app.po';

describe('tempstore App', () => {
  let page: TempstorePage;

  beforeEach(() => {
    page = new TempstorePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
