import logincp from "../../support/pageObject/login-choose-product"
// digunakan untuk memanggil function yang ada di folder berbeda contohnya di folder login choose...
const userlogin = require('../../fixtures/logincp.json')


describe("Login and Choose Product", () => {
    // let signinBtn = '.panel > .header > .authorization-link > a'
    // let Loginbttn = '.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2'
    // let formeEmail = '#email'
    // let formPassword = '.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass'

    beforeEach(() => {
        cy.visit('')
    })
    // memilih produk tanpa login
    it('Choose Product Without Login', () => {
        cy.get('.home-main > img').click()
        cy.get(':nth-child(1) > .product-item-info > .photo > .product-image-container > .product-image-wrapper > .product-image-photo').click()
        cy.get(':nth-child(3) > .product-item-info > .photo > .product-image-container > .product-image-wrapper > .product-image-photo').click()
    })
    // memilih produk tanpa login pada categories men
    it.only('Choose Another Product On Men Categories without Login', () => {
        cy.get('#ui-id-5').click()
        cy.get(':nth-child(1) > .product-item-info > .product-item-photo > .product-image-container > .product-image-wrapper > .product-image-photo').click()
        cy.get(':nth-child(3) > .product-item-info > .photo > .product-image-container > .product-image-wrapper > .product-image-photo').click()
    })
    // Choose Product Jacket in Categories, tanpa login
    it('Choose Product Jacket in Sale Categories, Without Login', () => {
        cy.get(logincp.salectg).click()
        cy.get(logincp.jaketctg).click()
        cy.get(':nth-child(1) > .product-item-info > .photo > .product-image-container > .product-image-wrapper > .product-image-photo').click()
    })
    // choose Produk login terlebih dahulu tanpa POM dan Fixtures
    it('Choose Product with Login use POM', () => {
        cy.get('.panel > .header > .authorization-link > a').click()
        cy.get('#email').type('mursyid@gmail.com')
        cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type('123qweASD')
        cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2').click(),
        cy.get(':nth-child(3) > .product-item-info > .product-item-photo > .product-image-container > .product-image-wrapper > .product-image-photo').click()
        cy.get(':nth-child(3) > .product-item-info > .photo > .product-image-container > .product-image-wrapper > .product-image-photo').click()
    })
    // choose Produk jaket dalam categories sale, login terlebih dahulu tanpa POM dan Fixtures
    it('Choose Product Jacket in categories sale', () => {
        cy.get('.panel > .header > .authorization-link > a').click()
        cy.get('#email').type('mursyid@gmail.com')
        cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type('123qweASD')
        cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2').click(),
        cy.get('#ui-id-8').click()
        cy.get('.categories-menu > :nth-child(2) > :nth-child(2) > a').click()
        cy.get(':nth-child(1) > .product-item-info > .photo > .product-image-container > .product-image-wrapper > .product-image-photo').click()
    })
    // Choose Product dengan login terlebih dahulu dan menggunakan POM 
    it('Choose Product with Login use POM', () => {
        cy.get(logincp.signinBtn).click()
        // logincp adalah function yang dibuat di folder login choose yang berisi variabel yang telah diseting
        cy.get(logincp.formEmail).type('mursyid@gmail.com')
        cy.get(logincp.formPassword).type('123qweASD')
        cy.get(logincp.Loginbttn).click(),
        cy.get(':nth-child(3) > .product-item-info > .product-item-photo > .product-image-container > .product-image-wrapper > .product-image-photo').click()
        cy.get(':nth-child(3) > .product-item-info > .photo > .product-image-container > .product-image-wrapper > .product-image-photo').click()
    })
    // Choose Product Jacket in Categories, login terlebih dahulu menggunakan POM 
    it('Choose Product Jacket in Sale Categories, Login first use POM', () => {
        cy.get(logincp.signinBtn).click()
        // logincp adalah function yang dibuat di folder login choose yang berisi variabel yang telah diseting
        cy.get(logincp.formEmail).type('mursyid@gmail.com')
        cy.get(logincp.formPassword).type('123qweASD')
        cy.get(logincp.Loginbttn).click(),
        cy.get(logincp.salectg).click()
        cy.get(logincp.jaketctg).click()
        cy.get(':nth-child(1) > .product-item-info > .photo > .product-image-container > .product-image-wrapper > .product-image-photo').click()
    })

    // Choose Product dengan login Menggunakan POM dan Fixtures
    it('Choose Product with Login use fixtures', () => {
        cy.get(logincp.signinBtn).click()
        // logincp adalah function yang dibuat di folder login choose yang berisi variabel yang telah diseting
        cy.get(logincp.formEmail).type(userlogin.valid_email)
        cy.get(logincp.formPassword).type(userlogin.valid_pass)
        cy.get(logincp.Loginbttn).click(),
        cy.get(':nth-child(3) > .product-item-info > .product-item-photo > .product-image-container > .product-image-wrapper > .product-image-photo').click()
        cy.get(':nth-child(3) > .product-item-info > .photo > .product-image-container > .product-image-wrapper > .product-image-photo').click()
    })
    // Choose Product Jacket in Categories, login terlebih dahulu menggunakan POM dan Fixtures
    it('Choose Product Jacket in Sale Categories, Login first use POM and Fixtures', () => {
        cy.get(logincp.signinBtn).click()
        // logincp adalah function yang dibuat di folder login choose yang berisi variabel yang telah diseting
        cy.get(logincp.formEmail).type(userlogin.valid_email)
        cy.get(logincp.formPassword).type(userlogin.valid_pass)
        cy.get(logincp.Loginbttn).click(),
        cy.get(logincp.salectg).click()
        cy.get(logincp.jaketctg).click()
        cy.get(':nth-child(1) > .product-item-info > .photo > .product-image-container > .product-image-wrapper > .product-image-photo').click()
    })

})