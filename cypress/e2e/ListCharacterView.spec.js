describe("ListCharacterView test", () => {
  it("visits the list View without Search any before. But if param is correct fetch data", () => {
    cy.visit("/list-characters/Cirqu");
    cy.get("#character_card").should("be.visible");
    cy.get("#character_card").contains("Cirqu");
  });

  it("visits the list View without Search any before. But if param is NOT correct", () => {
    cy.visit("/list-characters/ric"); //less than 4 characters
    cy.get('[role="alert"]').should("be.visible");
  });

  it("try to pass params less than 4", () => {
    cy.visit("/list-characters/Cirqu");
    cy.get("input").type("ric").type("{enter}");
    cy.get('[role="alert"]').should("be.visible");
  });

  it("try to pass params higher than 20", () => {
    const text_example = "Cirque du Soleil Zumanity Member";

    cy.visit("/list-characters/Cirqu");
    cy.get("input").type(text_example).type("{enter}");
    cy.get('[role="alert"]').should("be.visible");
  });

  it("try to pass a correct param > 4 and < 20", () => {
    const text_example = "Cirque du Soleil Zumanity Member";
    function number_between(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    const valid_text = text_example.slice(0, number_between(4, 20));

    cy.visit("/list-characters/Cirqu");
    cy.get("input").type(valid_text).type("{enter}");
    cy.url().should("include", "/list-characters/");
  });

  it("check buttons filter by status", () => {
    cy.visit("/list-characters/rick");
    cy.get("#character_card").should("be.visible");
    let status = ["Alive", "Dead", "unknown"];

    //check all status
    status.forEach((status) => {
      cy.contains("STATUS").click();
      cy.contains(status).click();
      cy.get("#character_card").contains(status);
    });
  });
});
