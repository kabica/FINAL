describe('Friends Page', () => {
  beforeEach(() => {
    cy.visit('/friends')
  })

  it('searches for a friend and filters', () => {
    cy.get('input').type('Meat Police')
    cy.contains('Meat Police')
  })
})
