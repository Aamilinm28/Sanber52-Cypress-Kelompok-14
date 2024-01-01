class loginPage {
    email = '#email'
    pass = '#pass'
    loginBtn ='.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2'
    
    clickLoginBtn(){
        cy.get(this.loginBtn).click()
    }
}
export default new loginPage()
