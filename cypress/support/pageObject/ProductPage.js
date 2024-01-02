// ProductPage.js
class ProductPage {
  constructor() {
    this.url = "https://magento.softwaretestingboard.com/";
    this.addProductButton = "#add-product-button";
    this.productNameField = "#product-name";
    this.productSKUField = "#product-sku";
    this.productPriceField = "#product-price";
    this.saveButton = "#save-button";
    this.productTable = "#product-table";
  }

  visit() {
    cy.visit(this.url);
  }

  addProduct(name, sku, price) {
    cy.get(this.addProductButton).click();
    cy.get(this.productNameField).type(name);
    cy.get(this.productSKUField).type(sku);
    cy.get(this.productPriceField).type(price);
    cy.get(this.saveButton).click();
  }

  viewProduct(name) {
    cy.get(this.productTable).contains(name).click();
  }

  deleteProduct(name) {
    cy.get(this.productTable)
      .contains(name)
      .parent()
      .find(".delete-button")
      .click();
  }
}

export default ProductPage;
