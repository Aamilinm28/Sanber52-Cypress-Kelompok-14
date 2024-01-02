import loginPage from "../../support/pageObject/login.page"

const accInformation = require('../../fixtures/account-information.json')




class accountInformationPage {
    firstName = '#firstname'
    lastName = '#lastname'
    emailCheckList = '#change-email'
    passCheckList = '#change-password'
    curPass = '#current-password'
    email = '#email'
    password = '#password'

    editPass = '.change-password'
    editUser = '.block-dashboard-info > .block-content > .box > .box-actions > .edit > span'

    passConfirm = '#password-confirmation'
    firstNameAlert = '#firstname-error'
    lastNameAlert = '#lastname-error'
    curPassAlert = '#current-password-error'
    emailAlert = '#email-error'
    passAlert = '#password-error'
    passConfirmAlert = '#password-confirmation'
    saveBtn = '#form-validate > .actions-toolbar > div.primary > .action'
    successMsg = '.message-success > div'
    errorMsg='.message-error > div'
    passMeter= '#password-strength-meter'


    clickSaveBtn(){
        cy.get(this.saveBtn).click()
    }

    clickEmail(){
        cy.get(this.emailCheckList).click()
    }

    clickPassword(){
        cy.get(this.passCheckList).click()
    }

    //verifySuccessMsg(message){
   //     cy.get(location).should('contain.text',message)
   // }
   verifyErrorMsg(location,message){
        cy.element(location).should('contain.text',message)
    
    }
    

    goToAccInformationEdit(email,pass,mode){
        cy.get(loginPage.email).type(email)
        cy.get(loginPage.pass).type(pass)
        loginPage.clickLoginBtn()
        cy.url().should('include','/account/index/')
        cy.goClick(mode)
    }

    editPassword(curPass,password,confPassword){
        this.clickPassword()
        cy.inputText(this.curPass,curPass)
        cy.inputText(this.password,password)
        cy.inputText(this.passConfirm,confPassword)
        this.clickSaveBtn()
    }

    editEmail(email,password){
        this.clickEmail()
        cy.inputText(this.email,email)
        cy.inputText(this.curPass,password)
        this.clickSaveBtn()
    }
    
    resetData(firstName,lastName,email,curPass,password,confPassword){
        cy.inputText(this.firstName,firstName)
        cy.inputText(this.lastName,lastName)
        this.clickEmail()
        this.clickPassword()
        cy.inputText(this.email,email)
        cy.inputText(this.curPass,curPass)
        cy.inputText(this.password,password)
        cy.inputText(this.passConfirm,confPassword)
        this.clickSaveBtn()
    }
}
export default new accountInformationPage()
