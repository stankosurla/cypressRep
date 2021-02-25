describe('Login test', () => {
    it('login without password', () => {
        cy.visit('/');
        cy.get("a[href='/login']").click();
        cy.get('#email').click().type('test12345678@gmail.com');
        cy.get('button[type="submit"]').click();
    });
    it('login incorrect email', () => {
        cy.get('#email').clear().type('test246897531@gmail.com');
        cy.get('#password').click().type('12345678');
        cy.get('button[type="submit"]').click();
    });
    it('login incorrect email type', () => {
        cy.get('#email').clear().type('pera.gmail.com');
        cy.get('#password').clear().type('12345678');
        cy.get('button[type="submit"]').click();
    });
    it('login password less than 8 characters', () => {
        cy.get('#email').clear().type('test12345678@gmail.com');
        cy.get('#password').clear().type('1234567');
        cy.get('button[type="submit"]').click();
    });
    it('login password without number', () => {
        cy.get('#email').clear().type('test12345678@gmail.com');
        cy.get('#password').clear().type('asdfghjkl');
        cy.get('button[type="submit"]').click();
    });
    it('Successful login', () => {
        cy.get('#email').clear().type('test12345678@gmail.com');
        cy.get('#password').clear().type('12345678');
        cy.get('button[type="submit"]').click();
    });
});
