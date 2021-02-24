describe('registration with password less than 8 characters', () => {
    it('Visit gallery page', () => {
        cy.visit('/');
    });
    it('Click on register button', () => {
        cy.get("a[href='/register']").click();
    });
    it('try to register without checked checkbox', () => {
        cy.get('#first-name').click().type('Pera');
        cy.get('#last-name').click().type('Peric');
        cy.get('#email').click().type('peraperic1114533890@gmail.com');
        cy.get('#password').click().type('1234567');
        cy.get('#password-confirmation').click().type('1234567');
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();
    });
});