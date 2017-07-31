import { HeroeditorPage } from './app.po';

describe('heroeditor App', () => {
  let page: HeroeditorPage;

  beforeEach(() => {
    page = new HeroeditorPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
