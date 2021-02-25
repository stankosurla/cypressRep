describe('registration', () => {
    it('registration without first name', () => {
        cy.visit('/');
        cy.get("a[href='/register']").click();
        cy.get('#last-name').click().type('Peric');
        cy.get('#email').click().type('peraperic1234846877@gmail.com');
        cy.get('#password').click().type('12345678');
        cy.get('#password-confirmation').click().type('12345678');
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();
    });
    it('registration without last name', () => {
        cy.get('#first-name').click().type('Pera');
        cy.get('#last-name').clear();
        cy.get('#email').clear().type('peraperic1274111890@gmail.com');
        cy.get('#password').clear().type('12345678');
        cy.get('#password-confirmation').clear().type('12345678');
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();
    });
    it('registration without email', () => {
        cy.get('#first-name').clear().type('Pera');
        cy.get('#last-name').clear().type('Peric');
        cy.get('#email').clear();
        cy.get('#password').clear().type('12345678');
        cy.get('#password-confirmation').clear().type('12345678');
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();
    });
    it('registration with email without @ character', () => {
        cy.get('#first-name').clear().type('Pera');
        cy.get('#last-name').clear().type('Peric');
        cy.get('#email').clear().type('peraperic1114223890gmail.com');
        cy.get('#password').clear().type('12345678');
        cy.get('#password-confirmation').clear().type('12345678');
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();
    });
    it('registration with email without . character', () => {
        cy.get('#first-name').clear().type('Pera');
        cy.get('#last-name').clear().type('Peric');
        cy.get('#email').clear().type('peraperic1114223890@gmailcom');
        cy.get('#password').clear().type('12345678');
        cy.get('#password-confirmation').clear().type('12345678');
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();
    });
    it('registration without password', () => {
        cy.get('#first-name').clear().type('Pera');
        cy.get('#last-name').clear().type('Peric');
        cy.get('#email').clear().type('peraperic1114223890@gmail.com');
        cy.get('#password').clear();
        cy.get('#password-confirmation').clear().type('12345678');
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();
    });
    it('registration without confirm password', () => {
        cy.get('#first-name').clear().type('Pera');
        cy.get('#last-name').clear().type('Peric');
        cy.get('#email').clear().type('peraperic1114223890@gmail.com');
        cy.get('#password').clear().type('12345678');
        cy.get('#password-confirmation').clear();
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();
    });
    it('registration with password less than 8 characters', () => {
        cy.get('#first-name').clear().type('Pera');
        cy.get('#last-name').clear().type('Peric');
        cy.get('#email').clear().type('peraperic1114223890@gmail.com');
        cy.get('#password').clear().type('1234567');
        cy.get('#password-confirmation').clear().type('1234567');
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();
    });
    it('registration with password without number', () => {
        cy.get('#first-name').clear().type('Pera');
        cy.get('#last-name').clear().type('Peric');
        cy.get('#email').clear().type('peraperic1114223890@gmail.com');
        cy.get('#password').clear().type('asdfghjk');
        cy.get('#password-confirmation').clear().type('asdfghjk');
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();
    });
    it('registration password and confirm password are not the same', () => {
        cy.get('#first-name').clear().type('Pera');
        cy.get('#last-name').clear().type('Peric');
        cy.get('#email').clear().type('peraperic1114223890@gmail.com');
        cy.get('#password').clear().type('123456789');
        cy.get('#password-confirmation').clear().type('12345678');
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();
    });
    it('registration checkbox not checked', () => {
        cy.get('#first-name').clear().type('Pera');
        cy.get('#last-name').clear().type('Peric');
        cy.get('#email').clear().type('peraperic17123337701@gmail.com');
        cy.get('#password').clear().type('12345678');
        cy.get('#password-confirmation').clear().type('12345678');
        cy.get('input[type="checkbox"]').uncheck();
        cy.get('button[type="submit"]').click();
    });
    it('successful registration', () => {
        cy.get('#first-name').clear().type('Pera');
        cy.get('#last-name').clear().type('Peric');
        cy.get('#email').clear().type('peraperic144432788331@gmail.com');
        cy.get('#password').clear().type('12345678');
        cy.get('#password-confirmation').clear().type('12345678');
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();
    });
});
