// Useful section in cypress docs:
// https://docs.cypress.io/guides/references/assertions#Common-Assertions
// https://docs.cypres.io/api/commands/should.html#Syntax
// Cypress uses Chai assertions
// https://www.chaijs.com/api/assert/
// https://www.chaijs.com/api/bdd/   <-- Chains to use with should
describe('Make sure site loads', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Page Loads', () => {
    cy.contains('Filter');

    cy.get('[data-testid=movies-list-movie')
      .first()
      .then(($movie) => {
        const movieUrl = $movie.attr('href');
        cy.get('[data-testid=movies-list-movie]').first().click();
        cy.url().should('include', movieUrl);
      });
  });

  it('Correct number of movies', () => {
    cy.get('[data-testid=movies-list-movie]').should('have.length', 20);
  });

  it('Undderstands chainers', () => {
    cy.get('[data-testid=movies-list-movie]').should('have.length', 20);
    cy.get('[data-testid=movies-list-movie]').should('exist');
    cy.get('[data-testid=movies-loading-movie]').should('not.exist');
    // in cypress.json, add { "experimentatlStudio": true}
    // click in test browser
    // click on magic wand icon
    // click around (link to optional actions at the top)
    // save
    /* ==== Generated with Cypress Studio ==== */
    cy.get('input').clear();
    cy.get('input').type('Justice');
    cy.get('input').clear();
    cy.get(':nth-child(5) > [data-testid=movies-list-movie] > img').click();
    /* ==== End Cypress Studio ==== */
  });
});
