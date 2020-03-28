describe('Discover Page', () => {
  beforeEach(() => {
    cy.visit('/discover')
  })

  it('selects a game card, shows overview and all details', () => {
    cy.get('[alt="logo"]').first().click()
    cy.contains('GAME OVERVIEW')
    cy.get('div#more').click()
    cy.contains('PATCH NOTES')
  })
})
