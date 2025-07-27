import loginPage from '../support/pages/LoginPage';
import adminPage from '../support/pages/AdminPage';

describe('User Management Scenarios', () => {
  beforeEach(() => {
    cy.fixture('credentials').then(({ valid }) => {
      loginPage.visit();
      loginPage.login(valid.username, valid.password);
    });
  });

  it('should create a new user', () => {
    cy.fixture('credentials').then(({ newUser }) => {
      adminPage.goToAdmin();
      adminPage.clickAdd();
      adminPage.fillUserDetails(newUser.username, newUser.password);
      adminPage.searchUser(newUser.newName);
      adminPage.saveUser();
      adminPage.assertUserToast();
    });
  });

  it('should edit an existing user', () => {
    cy.fixture('credentials').then(({ newUser }) => {
      adminPage.goToAdmin();  
      adminPage.searchUserByName(newUser.username)
      adminPage.editUser(newUser.username);
      adminPage.assertUserToast();
    });
  });

  it('should delete a user', () => {
    cy.fixture('credentials').then(({ newUser }) => {
      adminPage.goToAdmin();  
      adminPage.searchUserByName(newUser.username)
      adminPage.deleteUser()
      adminPage.assertUserToast();
    });
  });
});
