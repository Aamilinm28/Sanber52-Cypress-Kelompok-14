const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://magento.softwaretestingboard.com",
    setupNodeEvents(on, config) {
      env: {
        username: "meifadil";
      }
      // implement node event listeners here
    },
    viewportWidth: 1280,
    viewportHeight: 680,
    defaultCommandTimeout: 4000,
  },
});
