const { defineConfig } = require("cypress", "cypress-iframe");


module.exports = defineConfig({
  
  defaultCommandTimeout: 10000,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    "chromeWebSecurity": false
    
  },
});
