import logincp from "../../support/pageObject/login-choose-product"
// digunakan untuk memanggil function yang ada di folder berbeda contohnya di folder login choose...


describe("Login and Choose Product", () => {
    // let signinBtn = '.panel > .header > .authorization-link > a'
    // let Loginbttn = '.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2'
    // let formeEmail = '#email'
    // let formPassword = '.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass'
   
    beforeEach(() => {
        cy.visit('')
    })

    it('Choose Product with Login',() => {
        cy.get(logincp.signinBtn).click()
        // logincp adalah function yang dibuat di folder login choose yang berisi variabel yang telah diseting
        cy.get(logincp.formEmail).type('mursyid@gmail.com')
        cy.get(logincp.formPassword).type('123qweASD')
        cy.get(logincp.Loginbttn).click(),
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
