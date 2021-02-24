describe('registration', () => {

    it('Visit gallery page', () => {
        cy.visit('/');
    });
    it('Click on register button', () => {
        cy.get("a[href='/register']").click();
    });
    it('fill register fields', () => {
        cy.get('#last-name').click().type('Peric');
        cy.get('#email').click().type('peraperic1234507890@gmail.com');
        cy.get('#password').click().type('12345678');
        cy.get('#password-confirmation').click().type('12345678');
        cy.get('input[type="checkbox"]').check();
    });
    it('click on btn', () => {
        cy.get('button[type="submit"]').click();
    });


    it('Visit gallery page', () => {
        cy.visit('/');
    });
    it('Click on register button', () => {
        cy.get("a[href='/register']").click();
    });
    it('fill register fields', () => {
        cy.get('#first-name').click().clear().type('Pera');
        cy.get('#last-name').click().clear().type('Peric');
        cy.get('#email').click().clear().type('peraperic17123258901@gmail.com');
        cy.get('#password').click().clear().type('12345678');
        cy.get('#password-confirmation').click().clear().type('12345678');
        cy.get('input[type="checkbox"]').check();
    });
    it('click on btn', () => {
        cy.get('button[type="submit"]').click();
    });
});
