describe('upload pdf to site', () => {
  it('should login', function () {
    cy.visit('https://id.atlassian.com/login')

    cy.findByPlaceholderText(/Enter email/i).type('dalonso@mymoid.com')
    cy.findAllByText('Continue').click()
  })
  it('should sign in with google', function () {
    cy.pause()
  })
})
