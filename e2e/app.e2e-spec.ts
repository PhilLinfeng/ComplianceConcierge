import { ComplianceConciergePage } from './app.po';

describe('compliance-concierge App', () => {
  let page: ComplianceConciergePage;

  beforeEach(() => {
    page = new ComplianceConciergePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
