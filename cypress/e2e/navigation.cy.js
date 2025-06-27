/* global describe, it, cy, beforeEach */

describe("Navigation Tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:1234");
  });

  it("Navigates to Home page", () => {
    cy.get('[data-cy="nav-home"]').click();
    cy.contains("Welcome"); // adjust to expected content on Home
  });

  it("Navigates to About page", () => {
    cy.get('[data-cy="nav-about"]').click();
    cy.contains("About"); // or another unique string from the About section
  });

  it("Navigates to Card Sets page", () => {
    cy.get('[data-cy="nav-cardsets"]').click();
    cy.contains("Your Flashcards"); // or any unique text on the Card Sets page
  });
});
