import loginPage from '../support/pages/LoginPage';

describe('Login Scenarios', () => {
  beforeEach(() => {
    loginPage.visit();
  });

  it('should log in with valid credentials', () => {
    cy.fixture('credentials').then(({ valid }) => {
      loginPage.login(valid.username, valid.password);
      cy.url().should('include', '/dashboard');
    });
  });

  it('should not log in with invalid credentials', () => {
    cy.fixture('credentials').then(({ invalid }) => {
      loginPage.login(invalid.username, invalid.password);
      loginPage.getError().should('contain.text', 'Invalid credentials');
    });
  });
});
