describe('Member Homehandy', function () {

  // Ignore Stripe.js load error globally
  Cypress.on('uncaught:exception', (err, runnable) => {
    if (err.message.includes('Failed to load Stripe.js')) {
      return false; // prevent test from failing
    }
  });

  beforeEach(() => {
    cy.visit("https://new-dev.homehandy.com/login");

    // Login with explicit waits for stability
    cy.get('input[name="identifier"]', { timeout: 10000 }).should('be.visible').type('aashra@probits.com.au');
    cy.get('span.cl-internal-2iusy0').first().click();
    cy.get('input[name="password"]', { timeout: 10000 }).should('be.visible').type('P@ssw0rd');
    cy.get('span.cl-internal-2iusy0').first().click();

    // Wait for dashboard/home to load
    cy.get('img[alt="Avatar"]', { timeout: 15000 }).should('be.visible');
  });

  it('Profile', () => {
    // Profile
    cy.get('img[alt="Avatar"]').click();
    cy.contains('li.MuiMenuItem-root', 'Profile').click();

    // Billing
    cy.get('img[alt="Avatar"]').click();
    cy.contains('li.MuiMenuItem-root', 'Billing').click();

    // Help & Support
    cy.get('img[alt="Avatar"]').click();
    cy.contains('li.MuiMenuItem-root', 'Help & Support').click();

    // Sign Out
    cy.get('img[alt="Avatar"]').click();
    cy.contains('li.MuiMenuItem-root', 'Sign out').click();
  });

  it('Market Place', () => {
    cy.get('.MuiList-root > :nth-child(2)').click();
    cy.get('.css-2prbad > .MuiButtonBase-root').click();
    cy.get('[data-testid="CheckBoxOutlineBlankIcon"]')
    .should('be.visible')
    .click();




  });

});
