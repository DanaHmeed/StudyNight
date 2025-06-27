/* global describe, it, cy, beforeEach */

describe("Form Tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:1234");
  });

  it("Creates a new Set (happy path)", () => {
    cy.contains("Create Set").click();
    cy.get('[data-cy="input-setName"]').type("Biology");
    cy.get('[data-cy="form-createSet"]').submit();
    cy.contains("Biology").should("exist");
  });

  it("Fails to create Set with empty input", () => {
    cy.contains("Create Set").click();
    cy.get('[data-cy="form-createSet"]').submit();
    cy.get('[data-cy="error-message"]').should("contain", "This field is required");
  });

  it("Adds a card (happy path)", () => {
    cy.contains("Add Card").click();
    cy.get('[data-cy="input-question"]').type("What is DNA?");
    cy.get('[data-cy="input-answer"]').type("Genetic material");
    cy.get('[data-cy="form-createSet"]').submit(); // or a specific card form if separate
    cy.contains("What is DNA?").should("exist");
  });

  it("Fails to add card with missing fields", () => {
    cy.contains("Add Card").click();
    cy.get('[data-cy="form-createSet"]').submit();
    cy.get('[data-cy="error-message"]').should("contain", "This field is required");
  });
});
