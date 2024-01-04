import "cypress-xpath";

import loginPage from "../../support/pageObject/loginPage";
import cartPage from "../../support/pageObject/cartPage";
const shoppingCart = require("../../fixtures/shoppingCart.json");

describe("Verify Success Shopping Cart Functionality", () => {
  it("Login, Add Product to Cart, View Product, and Delete Product from Cart", () => {
    // Kunjungi halaman website
    cy.visit("https://magento.softwaretestingboard.com/");

    // Login
    cy.get(".header.panel > .header.links > .authorization-link > a").click();
    cy.get("#email").type("meimei@gmail.com");
    cy.get("#pass").type("meimei123@");
    cy.get("#send2").click();

    // Tambahkan produk ke keranjang
    cy.visit("https://magento.softwaretestingboard.com/");
    cy.contains("Hero Hoodie").click({ force: true });

    // Memilih ukuran
    cy.xpath(
      "//div[@id='product-options-wrapper']//div[@class='swatch-opt']/div[1]/div[@role='listbox']/div[3]"
    ).click({
      force: true,
    });
    cy.contains("M").click({ force: true });

    // Memilih warna
    cy.xpath(
      "//div[@id='product-options-wrapper']//div[@class='swatch-opt']/div[2]/div[@role='listbox']/div[3]"
    ).click({
      force: true,
    });
    cy.contains("Green").click({ force: true });

    // Mengisi jumlah
    cy.xpath("/html//input[@id='qty']").type("2");

    // Menambahkan produk ke keranjang
    cy.contains("Add to Cart").click({ force: true });

    // Lihat produk yang telah ditambahkan
    cy.xpath(
      "//body//div[@class='minicart-wrapper']/a[@href='https://magento.softwaretestingboard.com/checkout/cart/']/span[@class='counter qty']/span[@class='counter-number']"
    ).click({ force: true });
    cy.contains("View and Edit Cart").click({ force: true });

    // Hapus produk dari keranjang
    cy.xpath(
      "/html//table[@id='shopping-cart-table']/tbody[@class='cart item']//a[@title='Remove item']"
    ).within(() => {
      cy.contains("Remove").click({ force: true });
    });

    // Verifikasi keranjang kosong setelah menghapus produk
    cy.contains("You have no items in your shopping cart.");
  });
});

//FIXTURES
describe("Verify Success Shopping Cart Functionality - Fixtures", () => {
  beforeEach(() => {
    cy.visit("https://magento.softwaretestingboard.com/");
  });

  it("Login, Add Product to Cart, View Product, and Delete Product from Cart", () => {
    // Load data dari fixture
    cy.fixture("shoppingCart").then((shoppingCart) => {
      // Login
      cy.xpath(
        "/html/body[@class='cms-home cms-index-index page-layout-1column']//div[@class='panel wrapper']/div/ul[@class='header links']/li[@class='authorization-link']/a[@href='https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/']"
      ).click({ force: true });
      cy.xpath("//input[@id='email']").type(shoppingCart.email);
      cy.xpath("//input[@name='login[password]']").type(shoppingCart.password);
      cy.get("#send2").click({ force: true });
    });

    // Tambahkan produk ke keranjang
    cy.visit("https://magento.softwaretestingboard.com/");
    cy.contains("Hero Hoodie").click({ force: true });

    // Memilih ukuran
    cy.xpath(
      "//div[@id='product-options-wrapper']//div[@class='swatch-opt']/div[1]/div[@role='listbox']/div[3]"
    ).click({
      force: true,
    });
    cy.contains("M").click({ force: true });

    // Memilih warna
    cy.xpath(
      "//div[@id='product-options-wrapper']//div[@class='swatch-opt']/div[2]/div[@role='listbox']/div[3]"
    ).click({
      force: true,
    });
    cy.contains("Green").click({ force: true });

    // Mengisi jumlah
    cy.xpath("/html//input[@id='qty']").type("2");

    // Menambahkan produk ke keranjang
    cy.contains("Add to Cart").click({ force: true });

    // Lihat produk yang telah ditambahkan
    cy.xpath(
      "//body//div[@class='minicart-wrapper']/a[@href='https://magento.softwaretestingboard.com/checkout/cart/']/span[@class='counter qty']/span[@class='counter-number']"
    ).click({ force: true });
    cy.contains("View and Edit Cart").click({ force: true });

    // Hapus produk dari keranjang
    cy.xpath(
      "/html//table[@id='shopping-cart-table']/tbody[@class='cart item']//a[@title='Remove item']"
    ).within(() => {
      cy.contains("Remove").click({ force: true });
    });

    // Verifikasi keranjang kosong setelah menghapus produk
    cy.contains("You have no items in your shopping cart.");
  });
});

//CUSTOM COMMAND
describe("Verify Success Shopping Cart Functionality - Custom Command", () => {
  beforeEach(() => {
    cy.visit("https://magento.softwaretestingboard.com/");
  });

  it("Login, Add Product to Cart, View Product, and Delete Product from Cart", () => {
    cy.login();

    // Tambahkan produk ke keranjang
    cy.visit("https://magento.softwaretestingboard.com/");
    cy.contains("Hero Hoodie").click({ force: true });

    // Memilih ukuran
    cy.xpath(
      "//div[@id='product-options-wrapper']//div[@class='swatch-opt']/div[1]/div[@role='listbox']/div[3]"
    ).click({
      force: true,
    });
    cy.contains("M").click({ force: true });

    // Memilih warna
    cy.xpath(
      "//div[@id='product-options-wrapper']//div[@class='swatch-opt']/div[2]/div[@role='listbox']/div[3]"
    ).click({
      force: true,
    });
    cy.contains("Green").click({ force: true });

    // Mengisi jumlah
    cy.xpath("/html//input[@id='qty']").type("2");

    // Menambahkan produk ke keranjang
    cy.contains("Add to Cart").click({ force: true });

    // Lihat produk yang telah ditambahkan
    cy.xpath(
      "//body//div[@class='minicart-wrapper']/a[@href='https://magento.softwaretestingboard.com/checkout/cart/']/span[@class='counter qty']/span[@class='counter-number']"
    ).click({ force: true });
    cy.contains("View and Edit Cart").click({ force: true });

    // Hapus produk dari keranjang
    cy.xpath(
      "/html//table[@id='shopping-cart-table']/tbody[@class='cart item']//a[@title='Remove item']"
    ).within(() => {
      cy.contains("Remove").click({ force: true });
    });

    // Verifikasi keranjang kosong setelah menghapus produk
    cy.contains("You have no items in your shopping cart.");
  });
});

//PAGE OBJECT MODEL (POM)
describe("Verify Success Shopping Cart Functionality - Page Object Model", () => {
  beforeEach(() => {
    loginPage.visitLoginPage();
  });

  it("Login, Add Product to Cart, View Product, and Delete Product from Cart", () => {
    const email = "meimei@gmail.com";
    const password = "meimei123@";

    loginPage.login(email, password);

    cartPage.addProductToCart();
    cartPage.viewAndEditCart();
    cartPage.removeProductFromCart();
    cartPage.verifyEmptyCart();
  });
});
