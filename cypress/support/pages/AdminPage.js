class AdminPage {
  goToAdmin() {
    cy.get('span').contains('Admin').click();
  }

  clickAdd() {
    cy.get('button').contains('Add').click();
  }

  fillUserDetails(username, password) {
    cy.get('.oxd-select-text').eq(0).click();
    cy.contains('ESS').click(); 

    cy.get('.oxd-input-group input').eq(1).type(username); 

    cy.get('.oxd-select-text').eq(1).click();
    cy.contains('Enabled').click();

    cy.get('.oxd-input-group input').eq(2).type(password); 
    cy.get('.oxd-input-group input').eq(3).type(password); 
  }

  saveUser() {
    cy.get('button').contains('Save').click();
  }

  searchUser(newName) {
    cy.get('.oxd-autocomplete-text-input').type(newName);
    cy.get('.oxd-autocomplete-dropdown').contains(newName).click();
   // cy.get('button').contains(newName).click();
  }

 assertUserToast() {
  cy.get('#oxd-toaster_1')
    .should('be.visible')
    .and('contain.text', 'Success');
}

 searchUserByName(username){
    cy.get('.oxd-input--active').eq(1).click().type(username)
    cy.wait(900)
    cy.get('.oxd-form-actions > .oxd-button--secondary').click()
  

 }


  deleteUser() {
    cy.get('.oxd-table-cell-actions button').eq(0).click();
    cy.get('button').contains('Yes, Delete').click();
  }

  editUser(newUsername) {
    cy.get('.oxd-table-cell-actions button').eq(1).click();
    cy.get('.oxd-input').eq(1).clear().type(newUsername);
    cy.get('button').contains('Save').click();
  }

  assertUserPresent(newName) {
   cy.contains(newName).should('exist');
  }
}

module.exports = new AdminPage();
