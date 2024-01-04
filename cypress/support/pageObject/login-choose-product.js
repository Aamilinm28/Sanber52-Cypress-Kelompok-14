class logintest {
    email = "#email";
    pass = "#pass";
    signinBtn = '.panel > .header > .authorization-link > a';
    Loginbttn = '.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2';
    formEmail = '#email';
    formPassword = '.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass';
    loginBtn =
      ".login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2";
  
    clickLoginBtn() {
      cy.get(this.loginBtn).click();
    }
  }
  export default new logintest()
  