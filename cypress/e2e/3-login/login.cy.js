import loginPage from "../../support/pageObject/login.page"

const login = require('../../fixtures/login.json')

describe ('template spec', () => {
    beforeEach(() => {
        cy.visit('https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/') 
    }
    )
    it('failed - invalid email pass ',() => {
        cy.visit('https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/') 
        cy.get('#email').type('junivia@gmail.com')
        cy.get ('#pass').type('36263')
        cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2').click()
    })
    it('failed - empty email ',() => {
        cy.visit('https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/') 
        cy.get ('#pass').type('35435')
        cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2').click()
    })
    it('failed - empty - pass ',() => {
        cy.visit('https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/') 
        cy.get('#email').type('aherani@gmail.com')
        cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2').click()
    })
    it('failed - empty email pass ',() => {
        cy.visit('https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/') 
        cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2').click()
    })
    it('failed - invalid email',() => {
        cy.visit('https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/') 
        cy.get('#email').type('junivia@gmail.com')
        cy.get ('#pass').type('Juniviaa3')
        cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2').click()
       
    })
    it('failed - invalid password',() => {
        cy.visit('https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/') 
        cy.get('#email').type('alherani99@gmail.com')
        cy.get ('#pass').type('Juniviaa')
        cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2').click()
    })
    it('passed',() => {
        cy.visit('https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/') 
        cy.get('#email').type('alherani99@gmail.com')
        cy.get ('#pass').type('Juniviaa3')
        cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2').click()
    })

    //Custom Command
    it.only('passed- custom command',() => {
        cy.login('alherani99@gmail.com','Juniviaa3')
        cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2').click()
    })
    it('failed - invalid email pass - custom command',() => {
        cy.login('coba@gmail.com','823082983')
        cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2').click()
    })
    it('failed - empty email - custom command',() => {
        cy.login(' ','35435')
        cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2').click()
    })
    it('failed - empty - pass - custom command',() => {
        cy.login('aherani@gmail.com',' ')
        cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2').click()
    })
    it('failed - empty email pass - custom command',() => {
        cy.login(' ',' ')
        cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2').click()
    })
    it('failed - invalid email- custom command',() => {
        cy.login('junivia@gmail.com','Juniviaa3')
        cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2').click()
    
    })
    it('failed - invalid password- custom command',() => {
        cy.login('alherani99@gmail.com','Juniviaa')
        cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2').click()
    })
    
    //Page Object Model
    it('failed - invalid email pass - page object model',() => {
        cy.get(loginPage.email).type('kiki@gmail.com')
        cy.get(loginPage.pass).type('73473')
        loginPage.clickLoginBtn()
    })
    it('failed - empty email - page object model',() => {
        cy.get(loginPage.pass).type('73473')
        loginPage.clickLoginBtn()
    })
    it('failed - empty - pass - page object model',() => {
        cy.get(loginPage.email).type('kiki@gmail.com')
        loginPage.clickLoginBtn()
    })
    it('failed - empty email pass - page object model',() => {
        loginPage.clickLoginBtn()
    })
    it('failed - invalid email - page object model',() => {
        cy.get(loginPage.email).type('junivia@gmail.com')
        cy.get(loginPage.pass).type('Juniviaa3')
        loginPage.clickLoginBtn()
       
    })
    it('failed - invalid password - page object model',() => {
        cy.get(loginPage.email).type('alherani99@gmail.com')
        cy.get(loginPage.pass).type('Juniviaa')
        loginPage.clickLoginBtn()
    })
    it('passed - page object model',() => {
        cy.get(loginPage.email).type('alherani99@gmail.com')
        cy.get(loginPage.pass).type('Juniviaa3')
        loginPage.clickLoginBtn()
    })

    //Fixtures
    it('failed - invalid email pass - fixtures',() => {
        cy.get(loginPage.email).type(login.invalid_email)
        cy.get(loginPage.pass).type(login.invalid_pass)
        loginPage.clickLoginBtn()
    })
    it('failed - empty email - fixtures',() => {
        cy.get(loginPage.email).type(login.empty_email)
        cy.get(loginPage.pass).type(login.valid_pass)
        loginPage.clickLoginBtn()
    })
    it('failed - empty - pass - fixtures',() => {
        cy.get(loginPage.email).type(login.valid_email)
        cy.get(loginPage.pass).type(login.empty_pass)
        loginPage.clickLoginBtn()
    })
    it('failed - empty email pass - fixtures',() => {
        cy.get(loginPage.email).type(login.empty_email)
        cy.get(loginPage.pass).type(login.empty_pass)
        loginPage.clickLoginBtn()
    })
    it('failed - invalid email - fixtures',() => {
        cy.get(loginPage.email).type(login.invalid_email)
        cy.get(loginPage.pass).type(login.valid_pass)
        loginPage.clickLoginBtn()
       
    })
    it('failed - invalid password - fixtures',() => {
        cy.get(loginPage.email).type(login.valid_email)
        cy.get(loginPage.pass).type(login.invalid_pass)
        loginPage.clickLoginBtn()
    })
    it('passed - fixtures',() => {
        cy.get(loginPage.email).type(login.valid_email)
        cy.get(loginPage.pass).type(login.valid_pass)
        loginPage.clickLoginBtn()
    })
})