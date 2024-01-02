const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {

    baseUrl : 'https://magento.softwaretestingboard.com',
    env:{
      emailCustAcc:'customer00@gmail.com',
      passCustAcc:'Password@123',
      username: "meifadil"
    },
    viewportWidth: 1280,
    viewportHeight: 680,
    defaultCommandTimeout: 5000,

  },
});
