describe('registration without last name', () => {
    it('Visit gallery page', () => {
        cy.visit('/');
    });
    it('Click on register button', () => {
        cy.get("a[href='/register']").click();
    });
    it('try to register without lname', () => {
        cy.get('#first-name').click().type('Pera');
        cy.get('#email').click().type('peraperic1232267890@gmail.com');
        cy.get('#password').click().type('12345678');
        cy.get('#password-confirmation').click().type('12345678');
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();
    });
});