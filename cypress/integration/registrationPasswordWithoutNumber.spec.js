describe('registration with password without number', () => {
    it('Visit gallery page', () => {
        cy.visit('/');
    });
    it('Click on register button', () => {
        cy.get("a[href='/register']").click();
    });
    it('try to register with password without number', () => {
        cy.get('#first-name').click().type('Pera');
        cy.get('#last-name').click().type('Peric');
        cy.get('#email').click().type('peraperic1114223890@gmail.com');
        cy.get('#password').click().type('asdfghjk');
        cy.get('#password-confirmation').click().type('asdfghjk');
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();
    });
});