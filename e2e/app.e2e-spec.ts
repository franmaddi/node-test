import { Clase02Page } from './app.po';

describe('clase02 App', () => {
  let page: Clase02Page;

  beforeEach(() => {
    page = new Clase02Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
