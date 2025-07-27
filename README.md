# 🧪 Cypress Test Plan for OrangeHRM Demo Site

## 📌 1. What Is Being Tested

This project automates UI tests for the [OrangeHRM Demo](https://opensource-demo.orangehrmlive.com) platform, focusing on user authentication and user management.

### Functionalities Tested
- Admin login (valid and invalid credentials)
- Creating a new user
- Editing an existing user
- Deleting a user
- Verifying success toast notifications
- Asserting presence of user in UI tables

---

## 📘 2. Test Coverage Areas

| Test Case             | Description                                              |
|-----------------------|----------------------------------------------------------|
| Valid login           | Admin logs in with valid credentials                     |
| Invalid login         | Login attempt with wrong credentials triggers error      |
| Add user              | Add a new user with role and status                      |
| Edit user             | Update the username of an existing user                  |
| Delete user           | Delete a user after searching                            |
| Toast notification    | Assert success message is shown for each action          |
| UI verification       | Validate user data presence/absence in the UI            |

> Note: Role-based access control and backend/API testing are not included.

---

## 🛠️ 3. Tools Used & Justification

| Tool        | Purpose                            | Reason for      Use                                                |
|-------------|-------------------------------------|----------------------------------------------------------------|
| **Cypress** | End-to-end UI automation            | Modern web test framework with fast, interactive features      |
| **Mocha**   | Test structure                      | Built-in test runner for Cypress                              |
| **Chai**    | Assertions                          | Readable and expressive assertion syntax                      |
| **Node.js** | Runtime                             | Required to run Cypress locally                               |
| **Git/GitHub** | Version control                  | Collaborative development and deployment                      |

---

## ▶️ 4. How to Run the Tests

### Prerequisites
- [Node.js](https://nodejs.org/) installed
- Clone this repo and install dependencies

### Setup

```bash
git clone https://github.com/your-username/cypress-orangehrm-tests.git
cd cypress-orangehrm-tests
npm install

🚀 Run Tests via Cypress UI
    npx cypress open

//Run Tests in Headless Mode (CI)
    npx cypress run


5. Assumptions & Limitations
Assumptions

    OrangeHRM demo site is online and accessible.

    Login credentials (Admin / admin123) remain valid.

    Page DOM and selectors are stable.

Limitations

    No API/backend testing implemented.

    Toast/message validations depend on frontend behavior.

    No mobile/responsive testing included.

    Shared demo data may reset across sessions due to public access.
