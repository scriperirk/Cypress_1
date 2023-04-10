
let login;
let pass;

describe('login spec', () => {
  beforeEach(() => {
    cy.visit("/")
  })
  it("Should successfully login", () => {
    login = 'test@test.com';
    pass = 'test';
    cy.login(login, pass);
    cy.contains("Добро пожаловать test@test.com").should("be.visible");
  });

  it("Should not login with empty login", () => {
    login = ' ';
    pass = 'test';
    cy.login(login, pass);

    cy.get("#mail")
      .then(($el) => $el[0].checkValidity())
      .should("be.false");
    cy.get("#mail")
      .then(($el) => $el[0].validationMessage)
      .should("contain", "Заполните это поле.");
  });

  it("Should not login with empty password", () => {
    cy.contains("Log in").click();
    cy.get("#mail").type("test@test.com");
    cy.contains("Submit").click();
    cy.get("#pass")
      .then(($el) => $el[0].checkValidity())
      .should("be.false");
  });

})