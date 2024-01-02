import accountInformationPage from "../../support/pageObject/account-information.page"
const accInformation = require('../../fixtures/account-information.json')

describe('My Account > Edit Account Information', () => {
    let fisrtNameEdit = 'Sanbercode Cypress'
    let lastNameEdit = 'Kelompok 14'
    
    beforeEach(() => {
      //Precondition : User have been create account
      cy.visit('https://magento.softwaretestingboard.com/customer/account/')
    })
    //Waterfall - Envi - Cypress Configuration
    it('edit-account-information - firstName & lastName', () => {
        cy.get('.base').should('have.text','Customer Login')
        cy.login(Cypress.env('emailCustAcc'),Cypress.env('passCustAcc'))
        cy.get('.base').should('contain','My Account')
        cy.get('.block-dashboard-info > .block-content > .box > .box-actions > .edit > span').click()
        cy.get('#firstname').clear()
        cy.get('#firstname').type(fisrtNameEdit)
        cy.get('#lastname').clear()
        cy.get('#lastname').type(lastNameEdit)
        cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
        cy.get('.message-success > div').should('have.text','You saved the account information.')
    })

    //Custom Command
    it('edit-account-information - firstName & lastName', () => {
      cy.login(Cypress.env('emailCustAcc'),Cypress.env('passCustAcc'))
      cy.goClick('.block-dashboard-info > .block-content > .box > .box-actions > .edit > span')
      cy.inputText('#firstname','Sanbercode Cypress')
      cy.inputText('#lastname','Kelompok 14')
      cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
      cy.get('.message-success > div').should('have.text','You saved the account information.')
    })

    //POM
    it('edit-account-information - firstName & lastName', () => {
      accountInformationPage.goToAccInformationEdit(Cypress.env('emailCustAcc'),Cypress.env('passCustAcc'))
      cy.inputText(accountInformationPage.firstName,'POM - Sanbercode Cypress')
      cy.inputText(accountInformationPage.lastName,'Kelompok 14')
      accountInformationPage.clickSaveBtn()
      cy.get('.message-success > div').should('have.text','You saved the account information.')
    })

    //Fixtures
    it('edit-account-information - firstName & lastName', () => {
      accountInformationPage.goToAccInformationEdit(Cypress.env('emailCustAcc'),Cypress.env('passCustAcc'))
      cy.inputText(accountInformationPage.firstName,accInformation.newFirstCustName)
      cy.inputText(accountInformationPage.lastName,accInformation.newLastCustName)
      accountInformationPage.clickSaveBtn()
      accountInformationPage.verifyErrorMsg(accountInformationPage.firstName,accInformation.message.success)
      
    })

    //Testing
    it('edit-account-information - firstName & lastName', () => {
      accountInformationPage.goToAccInformationEdit(Cypress.env('emailCustAcc'),Cypress.env('passCustAcc'))
      cy.inputText(accountInformationPage.firstName,accInformation.newFirstCustName)
      cy.inputText(accountInformationPage.lastName,accInformation.newLastCustName)
      accountInformationPage.clickSaveBtn()
      accountInformationPage.verifyErrorMsg(accInformation.message.success)
    })
    
    it('edit-account-information - firstName & lastName - field firstName empty', () => {
      accountInformationPage.goToAccInformationEdit(Cypress.env('emailCustAcc'),Cypress.env('passCustAcc'))
      cy.inputText(accountInformationPage.firstName,'')
      cy.inputText(accountInformationPage.lastName,accInformation.newLastCustName)
      accountInformationPage.clickSaveBtn()
      accountInformationPage.verifyErrorMsg(accountInformationPage.firstNameAlert,accInformation.message.fieldRequired)
    })

    it('edit-account-information - firstName & lastName - field lastName empty', () => {
      accountInformationPage.goToAccInformationEdit(Cypress.env('emailCustAcc'),Cypress.env('passCustAcc'))
      cy.inputText(accountInformationPage.firstName,accInformation.newFirstCustName)
      cy.inputText(accountInformationPage.lastName,'')
      accountInformationPage.clickSaveBtn()
      accountInformationPage.verifyErrorMsg(accountInformationPage.lastNameAlert,accInformation.message.fieldRequired)
    })

    it('edit-account-information - firstName & lastName - field firstName & lastName empty', () => {
      accountInformationPage.goToAccInformationEdit(Cypress.env('emailCustAcc'),Cypress.env('passCustAcc'))
      cy.inputText(accountInformationPage.firstName,'')
      cy.inputText(accountInformationPage.lastName,'')
      accountInformationPage.clickSaveBtn()
      accountInformationPage.verifyErrorMsg(accountInformationPage.firstNameAlert,accInformation.message.fieldRequired)
      accountInformationPage.verifyErrorMsg(accountInformationPage.lastNameAlert,accInformation.message.fieldRequired)
    })

    // Edit email
    it('edit-email - valid email (same email) & valid password', () => {
      accountInformationPage.goToAccInformationEdit(Cypress.env('emailCustAcc'),Cypress.env('passCustAcc'))
      editEmail(Cypress.env('emailCustAcc'),Cypress.env('passCustAcc'))
      cy.url().should('include','/account/login/')
      accountInformationPage.verifyErrorMsg(accountInformationPage.successMsg,accInformation.message.success)
    })

    it('edit-email - valid email (same email) & invalid password', () => {
      accountInformationPage.goToAccInformationEdit(Cypress.env('emailCustAcc'),Cypress.env('passCustAcc'))
      editEmail(Cypress.env('emailCustAcc'),accInformation.newPassCustAccWrong)
      cy.url().should('include','/account/edit/')
      accountInformationPage.verifyErrorMsg(accountInformationPage.errorMsg,accInformation.message.passNotMatch)
      
    })

    it('edit-email - valid email (new email) & valid password', () => {
      accountInformationPage.goToAccInformationEdit(Cypress.env('emailCustAcc'),Cypress.env('passCustAcc'))
      editEmail(accInformation.newEmailCustAcc,curPass,Cypress.env('passCustAcc'))
      cy.url().should('include','/account/login/')
      accountInformationPage.verifyErrorMsg(accountInformationPage.successMsg,accInformation.message.success)
  })

    it('edit-email - valid email (new email same) & valid password', () => {
      //login new email
      accountInformationPage.goToAccInformationEdit(accInformation.newEmailCustAcc,Cypress.env('passCustAcc'))
      editEmail(accInformation.newEmailCustAcc,curPass,Cypress.env('passCustAcc'))
      cy.url().should('include','/account/login/')
      accountInformationPage.verifyErrorMsg(accountInformationPage.successMsg,accInformation.message.success)
    })

    it('edit-email - valid email (new email same) & invalid password', () => {
      //login new email
      accountInformationPage.goToAccInformationEdit(accInformation.newEmailCustAcc,Cypress.env('passCustAcc'))
      editEmail(accInformation.newEmailCustAcc,curPass,accInformation.newPassCustAccWrong)
      cy.url().should('include','/account/edit/')
      accountInformationPage.verifyErrorMsg(accountInformationPage.errorMsg,accInformation.message.passNotMatch)
    })
    
    // Edit Password
    it('edit-password - curPassword(valid), newPassword (same curPassword) & confPassword (same newPassword)', () => {
      accountInformationPage.goToAccInformationEdit(accInformation.newEmailCustAcc,Cypress.env('passCustAcc'))
      accountInformationPage.editPassword(Cypress.env('passCustAcc'),Cypress.env('passCustAcc'),Cypress.env('passCustAcc'))
      cy.url().should('include','/account/login/')
      accountInformationPage.verifyErrorMsg(accountInformationPage.successMsg,accInformation.message.success)
    })

    it('edit-password - curPassword(notvalid), newPassword (newPassCustAcc) & confPassword (same newPassCustAcc)', () => {
      accountInformationPage.goToAccInformationEdit(accInformation.newEmailCustAcc,Cypress.env('passCustAcc'))
      accountInformationPage.editPassword(accInformation.newEmailCustAccWrong,accInformation.newPassCustAcc,accInformation.newPassCustAcc)
      cy.url().should('include','/account/edit/')
      accountInformationPage.verifyErrorMsg(accountInformationPage.errorMsg,accInformation.message.passNotMatch)
    })

    it('edit-password - curPassword(valid), newPassword (very strong->newPassCustAcc) & confPassword (same newPassword)', () => {
      accountInformationPage.goToAccInformationEdit(accInformation.newEmailCustAcc,Cypress.env('passCustAcc'))
      accountInformationPage.editPassword(Cypress.env('passCustAcc'),accInformation.newPassCustAcc,accInformation.newPassCustAcc)
      cy.url().should('include','/account/login/')
      accountInformationPage.verifyErrorMsg(accountInformationPage.successMsg,accInformation.message.success)
    })

    //login new password very strong after edit success
    it('edit-password - curPassword(valid), newPassword (strong->strongPass) & confPassword (same newPassword)', () => {
      accountInformationPage.goToAccInformationEdit(accInformation.newEmailCustAcc,accInformation.newPassCustAcc)
      accountInformationPage.editPassword(accInformation.newPassCustAcc,accInformation.strongPass,accInformation.strongPass)
      cy.url().should('include','/account/login/')
      accountInformationPage.verifyErrorMsg(accountInformationPage.successMsg,accInformation.message.success)
    })

    //login new password strong after edit success
    it('edit-password - curPassword(valid), newPassword (medium->newPassCustAcc) & confPassword (same newPassword)', () => {
      accountInformationPage.goToAccInformationEdit(accInformation.newEmailCustAcc,accInformation.strongPass)
      accountInformationPage.editPassword(accInformation.strongPass,accInformation.mediumPass,accInformation.mediumPass)
      cy.url().should('include','/account/login/')
      accountInformationPage.verifyErrorMsg(accountInformationPage.successMsg,accInformation.message.success)
    })

    //login new password medium after edit success
    it('edit-password - curPassword(valid), newPassword (weakPass->newPassCustAcc) & confPassword (same newPassword)', () => {
      accountInformationPage.goToAccInformationEdit(accInformation.newEmailCustAcc,accInformation.mediumPass)
      accountInformationPage.editPassword(accInformation.mediumPass,accInformation.weakPass,accInformation.weakPass)
      cy.url().should('include','/account/login/')
      accountInformationPage.verifyErrorMsg(accountInformationPage.successMsg,accInformation.message.success)
    })

    //login new password weak after edit success
    it('edit-password - curPassword(valid), newPassword (<8 char->newPassCustAcc) & confPassword (same newPassword)', () => {
      accountInformationPage.goToAccInformationEdit(accInformation.newEmailCustAcc,accInformation.weakPass)
      accountInformationPage.editPassword(accInformation.weakPass,accInformation.lowPass,accInformation.lowPass)
      cy.url().should('include','/account/edit/')
      accountInformationPage.verifyErrorMsg(accountInformationPage.passAlert,accInformation.message.minPassword)
    })

    //edit password - klik change password
    it.only('change password', () => {
      accountInformationPage.goToAccInformationEdit(Cypress.env('emailCustAcc'),Cypress.env('passCustAcc'),accountInformationPage.editPass)
      cy.inputText(accountInformationPage.curPass,Cypress.env('passCustAcc'))
      cy.inputText(accountInformationPage.password,Cypress.env('passCustAcc'))
      cy.inputText(accountInformationPage.passConfirm,Cypress.env('passCustAcc'))
      accountInformationPage.clickSaveBtn() 
      cy.url().should('include','/account/login/')
      accountInformationPage.verifyErrorMsg(accountInformationPage.successMsg,accInformation.message.success)
    })
    
    
    //back to begin - reset
    it('edit-firstName, lastName, email, & password - curPassword(valid), newPassword (emailCustAcc) & confPassword (same newPassword)', () => {
      accountInformationPage.goToAccInformationEdit(accInformation.newEmailCustAcc,accInformation.weakPass)
      accountInformationPage.resetData(accInformation.firstCustName,accInformation.lastCustName,Cypress.env('emailCustAcc'),accInformation.weakPass,Cypress.env('passCustAcc'),Cypress.env('passCustAcc'))
      cy.url().should('include','/account/login/')
      accountInformationPage.verifyErrorMsg(accountInformationPage.successMsg,accInformation.message.success)
    })




    


  })
  