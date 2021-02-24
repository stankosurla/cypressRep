describe('password less than 8', () => {
    it('Visit gallery page', () => {
        cy.visit('/');
    });
    it('Click on login button', () => {
        cy.get("a[href='/login']").click();
    });
    it('try to log in with short password', () => {
        cy.get('#email').click().type('24675998@gmail.com')
        cy.get('#password').click().type('1234567')
        cy.get('button[type="submit"]').click()
    });
});