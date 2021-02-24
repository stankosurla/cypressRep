describe('registration checkbox not checked password', () => {
    it('Visit gallery page', () => {
        cy.visit('/');
    });
    it('Click on register button', () => {
        cy.get("a[href='/register']").click();
    });
    it('try to register without checked checkbox', () => {
        cy.get('#first-name').click().type('Pera');
        cy.get('#last-name').click().type('Peric');
        cy.get('#email').click().type('peraperic1234533890@gmail.com');
        cy.get('#password').click().type('12345678');
        cy.get('#password-confirmation').click().type('12345678');
        cy.get('button[type="submit"]').click();
    });
});