describe('login without password', () => {
    it('Visit gallery page', () => {
        cy.visit('/');
    });
    it('Click on login button', () => {
        cy.get("a[href='/login']").click();
    });
    it('try to log in without password', () => {
        cy.get('#email').click().type('test246897531@gmail.com')
        cy.get('button[type="submit"]').click()
    });
});