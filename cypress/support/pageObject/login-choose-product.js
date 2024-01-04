class logincp {
    email = "#email";
    pass = "#pass";
    signinBtn = '.panel > .header > .authorization-link > a';
    Loginbttn = '.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2';
    formEmail = '#email';
    formPassword = '.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass';
    salectg = '#ui-id-8'
    jaketctg = '.categories-menu > :nth-child(2) > :nth-child(2) > a'
    loginBtn =
      ".login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2";
  
    clickLoginBtn() {
      cy.get(this.loginBtn).click();
    }
  }
  export default new logincp()
  