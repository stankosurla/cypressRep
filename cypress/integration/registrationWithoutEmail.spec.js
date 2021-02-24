describe('registration without email', () => {
    it('Visit gallery page', () => {
        cy.visit('/');
    });
    it('Click on register button', () => {
        cy.get("a[href='/register']").click();
    });
    it('try to register without email', () => {
        cy.get('#first-name').click().type('Pera');
        cy.get('#last-name').click().type('Peric');
        cy.get('#password').click().type('12345678');
        cy.get('#password-confirmation').click().type('12345678');
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();
    });
});