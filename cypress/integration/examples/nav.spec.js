describe('Navigation Bar', () => {
  beforeEach(() => {
    cy.visit('/discover')
  })

  it('navigates to friends page', () => {
    cy.get('nav').contains('Friends').click()
    cy.contains('Your Friends')
  })

  it('navigates to home page', () => {
    cy.get('nav').get('img').first().click()
    cy.contains('Sign Up')
  })

  it('navigates to profile page', () => {
    cy.get('nav').get('a').last().click()
    cy.contains('Edit Profile')
  })
})
