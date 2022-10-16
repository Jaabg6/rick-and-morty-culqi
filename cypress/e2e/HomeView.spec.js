// https://docs.cypress.io/api/introduction/api.html

describe("HomeView test", () => {
  it("visits the app root url and check content", () => {
    cy.visit("/");
    cy.get("img").should("be.visible");
    cy.get("input").should("be.visible");
  });

  it("try to pass params less than 4", () => {
    cy.visit("/");
    cy.get("input").type("ric").type("{enter}");
    cy.get('[role="alert"]').should("be.visible");
  });

  it("try to pass params higher than 20", () => {
    const text_example = "Cirque du Soleil Zumanity Member";

    cy.visit("/");
    cy.get("input").type(text_example).type("{enter}");
    cy.get('[role="alert"]').should("be.visible");
  });

  it("try to pass a correct param > 4 and < 20", () => {
    const text_example = "Cirque du Soleil Zumanity Member";
    function number_between(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    const valid_text = text_example.slice(0, number_between(4, 20));

    cy.visit("/");
    cy.get("input").type(valid_text).type("{enter}");
    cy.url().should("include", "/list-characters/");
  });
});
