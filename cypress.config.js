const { defineConfig } = require("cypress", "cypress-iframe");


module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    "chromeWebSecurity": false
    
  },
});
