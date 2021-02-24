describe('password without number', () => {
    it('Visit gallery page', () => {
        cy.visit('/');
    });
    it('Click on login button', () => {
        cy.get("a[href='/login']").click();
    });
    it('try to log in with password without number', () => {
        cy.get('#email').click().type('24675998@gmail.com')
        cy.get('#password').click().type('asdfghjkl')
        cy.get('button[type="submit"]').click()
    });
});