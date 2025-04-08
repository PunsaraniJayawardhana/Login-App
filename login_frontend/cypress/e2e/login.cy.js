describe('Login Page Test', () => {
  it('should login successfully with valid credentials', () => {
    cy.visit('http://localhost:3000/login'); 

    cy.get('[data-testid = cypress-title]').should('exist')

    cy.get('input#email').type('your_registered_email@example.com');
    cy.get('input#password').type('your_password');

    cy.get('button[type="submit"]').click();

    
    // cy.url().should('eq', 'http://localhost:3000/');
    // cy.window().then((win) => {
    //   const token = win.localStorage.getItem('token');
    //   expect(token).to.not.be.null;
    // });
  });
});