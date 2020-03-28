describe('Profile Page', () => {
  beforeEach(() => {
    cy.visit('/profile')
  })

  it('selects a game card, shows stats', () => {
    cy.get('.slider-wrapper').get('.show-details-button').first().click()
    cy.contains('Time Played')
  })
})
