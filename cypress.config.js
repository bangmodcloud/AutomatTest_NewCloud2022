const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'jihv3i',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    //specPattern : 'cypress/e2e/Office-Datacenter-location/*.js',
     specPattern : 'cypress/e2e/Customer/Create_Cloud/*.js'
  },
});