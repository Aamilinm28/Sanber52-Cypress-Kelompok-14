// CartPage.js
class CartPage {
  addProductToCart() {
    cy.visit("https://magento.softwaretestingboard.com/");
    cy.contains("Add to Cart").click({ force: true });
  }

  viewAndEditCart() {
    cy.xpath(
      "/html/body//div[@class='minicart-wrapper']/a[@href='https://magento.softwaretestingboard.com/checkout/cart/']"
    ).click({ force: true });
    cy.contains("View and Edit Cart").click({ force: true });
  }

  removeProductFromCart() {
    cy.xpath(
      "/html//table[@id='shopping-cart-table']/tbody[@class='cart item']//a[@title='Remove item']"
    ).within(() => {
      cy.contains("Remove").click({ force: true });
    });
  }

  verifyEmptyCart() {
    cy.contains("You have no items in your shopping cart.");
  }
}

export default new CartPage();
