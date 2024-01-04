// LoginPage.js
class LoginPage {
  visitLoginPage() {
    cy.visit("https://magento.softwaretestingboard.com/");
  }

  login(email, password) {
    cy.xpath(
      "/html/body[@class='cms-home cms-index-index page-layout-1column']//div[@class='panel wrapper']/div/ul[@class='header links']/li[@class='authorization-link']/a[@href='https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/']"
    ).click();
    cy.get("#email").type(email);
    cy.get("#pass").type(password);
    cy.get("#send2").click();
  }
}

export default new LoginPage();
