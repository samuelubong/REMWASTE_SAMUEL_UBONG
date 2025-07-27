const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://opensource-demo.orangehrmlive.com/web/index.php',
    setupNodeEvents(on, config) {
       require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
    },

    
    chromeWebSecurity: false,
    "defaultCommandTimeout": 120000,
    "pageLoadTimeout": 120000,
    video: false,
  },
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: true,
    html: true,
    json: true,
  },
});
