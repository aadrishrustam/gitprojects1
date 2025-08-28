describe('Login Test', () => {
  it('Visits the example site', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('Kitchen Sink')
  })
})
