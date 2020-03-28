describe('Home Routes', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('navigates to the sign up page', () => {
    cy.contains('Sign Up').click()
    cy.contains('Sign Up')  
  })

  it('navigates to the login page', () => {
    cy.contains('Sign In').click()
    cy.contains('Sign In')  
  })
})


describe('Sign Up Routes', () => {
  beforeEach(() => {
    cy.visit('/signup')
  })

  it('navigates to the discover page after registering', () => {
    cy.get('button').click()  
    cy.contains('Discover')  
  })

  it('navigates to the login page if already a member', () => {
    cy.contains('Sign In').click()
    cy.contains('Sign In')  
  })
})


describe('Sign In Routes', () => {
  beforeEach(() => {
    cy.visit('/login')
  })

  it('navigates to the discover page after registering', () => {
    cy.get('button').click()  
    cy.contains('Discover')  
  })

  it('navigates to the register page if not already a member', () => {
    cy.contains('Sign Up').click()
    cy.contains('Sign Up')  
  })
})