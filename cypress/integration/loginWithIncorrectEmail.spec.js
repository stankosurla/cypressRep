describe('incorrect email', () => {
    it('Visit gallery page', () => {
        cy.visit('/');
    });
    it('Click on login button', () => {
        cy.get("a[href='/login']").click();
    });
    it('try to log in with incorrect email', () => {
        cy.get('#email').click().type('pera@gmail.com')
        cy.get('#password').click().type('12345678')
        cy.get('button[type="submit"]').click()
    });
});