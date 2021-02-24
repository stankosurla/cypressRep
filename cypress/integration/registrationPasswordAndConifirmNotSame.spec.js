describe('password and confirm password are not the same', () => {
    it('Visit gallery page', () => {
        cy.visit('/');
    });
    it('Click on register button', () => {
        cy.get("a[href='/register']").click();
    });
    it('try to register with different password and confirm password fields', () => {
        cy.get('#first-name').click().type('Pera');
        cy.get('#last-name').click().type('Peric');
        cy.get('#email').click().type('peraperic12322567890@gmail.com');
        cy.get('#password').click().type('123456789');
        cy.get('#password-confirmation').click().type('12345678');
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();
    });
});