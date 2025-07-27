class LoginPage {
  visit() {
    cy.visit('/auth/login');
  }

  fillUsername(username) {
    cy.get('input[name="username"]').type(username);
  }

  fillPassword(password) {
    cy.get('input[name="password"]').type(password);
  }

  submit() {
    cy.get('button[type="submit"]').click();
  }

  login(username, password) {
    this.fillUsername(username);
    this.fillPassword(password);
    this.submit();
  }

  getError() {
    return cy.get('.oxd-alert-content-text');
  }
}

module.exports = new LoginPage();
