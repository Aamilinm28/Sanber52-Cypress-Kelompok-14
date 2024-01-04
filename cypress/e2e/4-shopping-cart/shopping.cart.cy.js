// import ProductPage from "../pages/ProductPage";

// describe("Magento Website Tests", () => {
//   const productPage = new ProductPage();

//   beforeEach(() => {
//     productPage.visit();
//   });

//   it("should add, view, and delete a product using page object", () => {
//     const productName = "Fusion Backpack";
//     const productSKU = "NEW001";
//     const productPrice = "";

//     productPage.addProduct(productName, productSKU, productPrice);
//     productPage.viewProduct(productName);

//     productPage.deleteProduct(productName);
//   });
// });

describe("Add to Cart with Login on Magento Site Funtionality", () => {
  beforeEach(() => {
    // Buka situs dan lakukan login
    cy.visit("https://magento.softwaretestingboard.com/");
    cy.contains("Sign In").click();
    cy.get("#email").type("meifadil@xx.com");
    cy.get("#pass").type("meifadil123@");
    cy.get("#send2").click();
  });

  it("verify Success Add product to cart after login", () => {
    // Temukan elemen produk dan klik untuk membuka halaman produk
    cy.contains("Fusion Backpack").click();

    it("should select size, color, and quantity in shopping cart", () => {
      // Kunjungi halaman produk yang akan ditambahkan ke keranjang belanja
      cy.visit("https://magento.softwaretestingboard.com/your-product-url");

      cy.get("#add-to-cart-button").click();
      // Verifikasi bahwa produk telah ditambahkan ke keranjang
      cy.contains("Product added to cart successfully").should("be.visible");
      // Lanjut ke halaman keranjang belanja
      cy.get("#cart-icon").click();
    });

    // Tambahkan produk ke keranjang belanja
    cy.contains("Add to Cart").click();

    // Buka keranjang belanja untuk verifikasi
    cy.get(".minicart-wrapper").trigger("mouseover");
    cy.contains("View and Edit Cart").click();
    cy.contains("Push It Messenger Bag").should("be.visible");
  });
});

describe("verify Success View Product in Cart Tests", () => {
  it("should view product in the cart", () => {
    // Kunjungi halaman keranjang belanja
    cy.visit("https://magento.softwaretestingboard.com/checkout/cart/");
    // Verifikasi bahwa halaman keranjang belanja ditampilkan
    cy.contains("Shopping Cart").should("be.visible");

    // Verifikasi bahwa produk ada di dalam keranjang belanja
    cy.contains("Fusion Backpack").should("be.visible");

    // Lakukan verifikasi atau tindakan lain sesuai kebutuhan, misalnya verifikasi jumlah produk, harga, atau atribut lain
    cy.contains('Quantity: 2').should('be.visible');
    cy.contains('Price: $50').should('be.visible');

    // Lanjut untuk melihat detail produk
    cy.contains("here").click(); // Ganti dengan teks atau selektor yang sesuai

    // Verifikasi bahwa halaman detail produk yang ada di keranjang ditampilkan
    cy.contains("Product Details").should("be.visible");
  });
});

describe("Delete Product from Cart Tests", () => {
  it("should delete product from the cart", () => {
    // Kunjungi halaman keranjang belanja
    cy.visit("https://magento.softwaretestingboard.com/checkout/cart/");
    // Verifikasi bahwa halaman keranjang belanja ditampilkan
    cy.contains("Shopping Cart").should("be.visible");

    // Verifikasi bahwa produk ada di dalam keranjang belanja
    cy.contains("Fusion Backpack").should("be.visible");
    // Hapus produk dari keranjang belanja
    cy.contains("Remove").click();

    // Verifikasi bahwa produk telah dihapus dari keranjang belanja
    cy.contains("Fusion Backpack").should("not.exist");
  });
});

//custom command
describe("Verify Success Add, View and Delete Product", () => {
  it("should add, view, and delete a product using custom commands", () => {
    cy.magentoLogin("meifadil", "meifadil123@");
    cy.addProduct("Fusion Backpack", "NEW001", "1");
    const productId = "Fusion Backpack";
    cy.viewProduct(productId);
    cy.deleteProduct(productId);
  });
});

//fixtures
describe("Verify Success Add, View and Delete Product", () => {
  beforeEach(() => {
    cy.fixture("products.json").as("products");
  });

  it("should add, view, and delete a product using fixtures", () => {
    cy.loginMagento("meifadil", "meifadil123@");

    cy.get("@products").then((products) => {
      cy.addProduct(
        products.newProduct.name,
        products.newProduct.sku,
        products.newProduct.price
      );
      cy.visit(
        "https://magento.softwaretestingboard.com/admin/catalog/product/grid/"
      );
      cy.contains(products.newProduct.name).should("be.visible");

      // Menggunakan find untuk mendapatkan ID produk yang baru saja ditambahkan
      cy.get("tr")
        .contains(products.newProduct.name)
        .parent()
        .within(() => {
          cy.get('input[name="product_ids[]"]')
            .invoke("val")
            .then((productId) => {
              cy.deleteProduct(productId);
            });
        });
    });
  });
});
