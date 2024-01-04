import loginChooseProduct from "../../support/pageObject/login-choose-product"
// const loginPage2 = new loginPage2()


describe("Login and Choose Product", () => {
    // let signinBtn = '.panel > .header > .authorization-link > a'
    // let Loginbttn = '.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2'
    // let formeEmail = '#email'
    // let formPassword = '.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass'
   
    beforeEach(() => {
        cy.visit('')
    })

    it('Choose Product with Login',() => {
        cy.get(loginChooseProduct.signinBtn).click()
        cy.get(loginChooseProduct.formEmail).type('mursyid@gmail.com')
        cy.get(loginChooseProduct.formPassword).type('123qweASD')
        cy.get(loginChooseProduct.Loginbttn).click(),
        cy.get(':nth-child(3) > .product-item-info > .product-item-photo > .product-image-container > .product-image-wrapper > .product-image-photo').click()
        cy.get(':nth-child(3) > .product-item-info > .photo > .product-image-container > .product-image-wrapper > .product-image-photo').click()
    })
   it('Choose Product Without Login',() => {
    cy.get('.home-main > img').click()
    cy.get(':nth-child(1) > .product-item-info > .photo > .product-image-container > .product-image-wrapper > .product-image-photo').click()
    cy.get(':nth-child(3) > .product-item-info > .photo > .product-image-container > .product-image-wrapper > .product-image-photo').click()
   })
   it('Choose Another Product On Men Categories without Login', () => {
    cy.get('#ui-id-5').click()
    cy.get(':nth-child(1) > .product-item-info > .product-item-photo > .product-image-container > .product-image-wrapper > .product-image-photo').click()
    cy.get(':nth-child(3) > .product-item-info > .photo > .product-image-container > .product-image-wrapper > .product-image-photo').click()
   })
      
    })
