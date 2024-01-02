const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl : 'https://magento.softwaretestingboard.com',
    env:{
      emailCustAcc:'customer00@gmail.com',
      passCustAcc:'Password@123'
    },
    setupNodeEvents(on, config) {
      
      // implement node event listeners here
    },
    viewportHeight : 680,
    defaultCommandTimeout : 5000
  },
});
