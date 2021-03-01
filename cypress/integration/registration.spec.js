const locators = require("../fixtures/locators.json");
const faker = require("faker");

describe('registration', () => {

    let userData = {
        randomName: faker.name.firstName(),
        randomLastName: faker.name.lastName(),
        randomEmail: faker.internet.email(),
        randomPassword: faker.internet.password()
    }

    beforeEach(() => {
        cy.visit('/');
        cy.get(locators.register.register).click();
    });
    it('registration without first name', () => {

        cy.get(locators.register.lastName).click().type(userData.randomLastName);
        cy.get(locators.register.email).click().type(userData.randomEmail);
        cy.get(locators.register.password).click().type(userData.randomPassword);
        cy.get(locators.register.passwordConfirmation).click().type('12345678');
        cy.get(locators.register.checkbox).check();
        cy.get(locators.register.submit).click();
    });
    it('registration without last name', () => {
        cy.get(locators.register.firstName).click().type(faker.name.firstName());
        cy.get(locators.register.lastName).clear();
        cy.get(locators.register.email).clear().type('peraperic1274111890@gmail.com');
        cy.get(locators.register.password).clear().type('12345678');
        cy.get(locators.register.passwordConfirmation).clear().type('12345678');
        cy.get(locators.register.checkbox).check();
        cy.get(locators.register.submit).click();
    });
    it('registration without email', () => {
        cy.get(locators.register.firstName).clear().type('Pera');
        cy.get(locators.register.lastName).clear().type('Peric');
        cy.get(locators.register.email).clear();
        cy.get(locators.register.password).clear().type('12345678');
        cy.get(locators.register.passwordConfirmation).clear().type('12345678');
        cy.get(locators.register.checkbox).check();
        cy.get(locators.register.submit).click();
    });
    it('registration with email without @ character', () => {
        cy.get(locators.register.firstName).clear().type('Pera');
        cy.get(locators.register.lastName).clear().type('Peric');
        cy.get(locators.register.email).clear().type('peraperic1114223890gmail.com');
        cy.get(locators.register.password).clear().type('12345678');
        cy.get(locators.register.passwordConfirmation).clear().type('12345678');
        cy.get(locators.register.checkbox).check();
        cy.get(locators.register.submit).click();
    });
    it('registration with email without . character', () => {
        cy.get(locators.register.firstName).clear().type('Pera');
        cy.get(locators.register.lastName).clear().type('Peric');
        cy.get(locators.register.email).clear().type('peraperic1114223890@gmailcom');
        cy.get(locators.register.password).clear().type('12345678');
        cy.get(locators.register.passwordConfirmation).clear().type('12345678');
        cy.get(locators.register.checkbox).check();
        cy.get(locators.register.submit).click();
    });
    it('registration without password', () => {
        cy.get(locators.register.firstName).clear().type('Pera');
        cy.get(locators.register.lastName).clear().type('Peric');
        cy.get(locators.register.email).clear().type('peraperic1114223890@gmail.com');
        cy.get(locators.register.password).clear();
        cy.get(locators.register.passwordConfirmation).clear().type('12345678');
        cy.get(locators.register.checkbox).check();
        cy.get(locators.register.submit).click();
    });
    it('registration without confirm password', () => {
        cy.get(locators.register.firstName).clear().type('Pera');
        cy.get(locators.register.lastName).clear().type('Peric');
        cy.get(locators.register.email).clear().type('peraperic1114223890@gmail.com');
        cy.get(locators.register.password).clear().type('12345678');
        cy.get(locators.register.passwordConfirmation).clear();
        cy.get(locators.register.checkbox).check();
        cy.get(locators.register.submit).click();
    });
    it('registration with password less than 8 characters', () => {
        cy.get(locators.register.firstName).clear().type('Pera');
        cy.get(locators.register.lastName).clear().type('Peric');
        cy.get(locators.register.email).clear().type('peraperic1114223890@gmail.com');
        cy.get(locators.register.password).clear().type('1234567');
        cy.get(locators.register.passwordConfirmation).clear().type('1234567');
        cy.get(locators.register.checkbox).check();
        cy.get(locators.register.submit).click();
    });
    it('registration with password without number', () => {
        cy.get(locators.register.firstName).clear().type('Pera');
        cy.get(locators.register.lastName).clear().type('Peric');
        cy.get(locators.register.email).clear().type('peraperic1114223890@gmail.com');
        cy.get(locators.register.password).clear().type('asdfghjk');
        cy.get(locators.register.passwordConfirmation).clear().type('asdfghjk');
        cy.get(locators.register.checkbox).check();
        cy.get(locators.register.submit).click();
    });
    it('registration password and confirm password are not the same', () => {
        cy.get(locators.register.firstName).clear().type('Pera');
        cy.get(locators.register.lastName).clear().type('Peric');
        cy.get(locators.register.email).clear().type('peraperic1114223890@gmail.com');
        cy.get(locators.register.password).clear().type('123456789');
        cy.get(locators.register.passwordConfirmation).clear().type('12345678');
        cy.get(locators.register.checkbox).check();
        cy.get(locators.register.submit).click();
    });
    it('registration checkbox not checked', () => {
        cy.get(locators.register.firstName).clear().type('Pera');
        cy.get(locators.register.lastName).clear().type('Peric');
        cy.get(locators.register.email).clear().type('peraperic17123337701@gmail.com');
        cy.get(locators.register.password).clear().type('12345678');
        cy.get(locators.register.passwordConfirmation).clear().type('12345678');
        cy.get(locators.register.checkbox).uncheck();
        cy.get(locators.register.submit).click();
    });
    it('successful registration', () => {
        cy.get(locators.register.firstName).clear().type('Pera');
        cy.get(locators.register.lastName).clear().type('Peric');
        cy.get(locators.register.email).clear().type('peraperic144432788331@gmail.com');
        cy.get(locators.register.password).clear().type('12345678');
        cy.get(locators.register.passwordConfirmation).clear().type('12345678');
        cy.get(locators.register.checkbox).check();
        cy.get(locators.register.submit).click();
    });
});
