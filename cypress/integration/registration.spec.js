const locators = require("../fixtures/locators.json");
const faker = require("faker");
const errors = require("../fixtures/errors.json");
const data = require("../fixtures/data.json");

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

        cy.get(locators.register.lastName).click().type(data.loginRegister.lastName);
        cy.get(locators.register.email).click().type(data.loginRegister.email);
        cy.get(locators.register.password).click().type(data.loginRegister.password);
        cy.get(locators.register.passwordConfirmation).click().type(data.loginRegister.passwordConfirmation);
        cy.get(locators.register.checkbox).check();
        cy.get(locators.register.submit).click();
        cy.url().should('eq', 'https://gallery-app.vivifyideas.com/register');
    });
    it('registration without last name', () => {
        cy.get(locators.register.firstName).click().type(data.loginRegister.firstName);
        cy.get(locators.register.lastName).clear();
        cy.get(locators.register.email).clear().type(data.loginRegister.email);
        cy.get(locators.register.password).clear().type(data.loginRegister.password);
        cy.get(locators.register.passwordConfirmation).clear().type(data.loginRegister.passwordConfirmation);
        cy.get(locators.register.checkbox).check();
        cy.get(locators.register.submit).click();
        cy.url().should('eq', 'https://gallery-app.vivifyideas.com/register');
    });
    it('registration without email', () => {
        cy.get(locators.register.firstName).clear().type(data.loginRegister.firstName);
        cy.get(locators.register.lastName).clear().type(data.loginRegister.lastName);
        cy.get(locators.register.email).clear();
        cy.get(locators.register.password).clear().type(data.loginRegister.password);
        cy.get(locators.register.passwordConfirmation).clear().type(data.loginRegister.passwordConfirmation);
        cy.get(locators.register.checkbox).check();
        cy.get(locators.register.submit).click();
        cy.url().should('eq', 'https://gallery-app.vivifyideas.com/register');
    });
    it('registration with email without @ character', () => {
        cy.get(locators.register.firstName).clear().type(data.loginRegister.firstName);
        cy.get(locators.register.lastName).clear().type(data.loginRegister.lastName);
        cy.get(locators.register.email).clear().type(data.loginRegister.emailIncorrectType);
        cy.get(locators.register.password).clear().type(data.loginRegister.password);
        cy.get(locators.register.passwordConfirmation).clear().type(data.loginRegister.passwordConfirmation);
        cy.get(locators.register.checkbox).check();
        cy.get(locators.register.submit).click();
        cy.url().should('eq', 'https://gallery-app.vivifyideas.com/register');
    });
    it('registration with email without . character', () => {
        cy.get(locators.register.firstName).clear().type(data.loginRegister.firstName);
        cy.get(locators.register.lastName).clear().type(data.loginRegister.lastName);
        cy.get(locators.register.email).clear().type(data.loginRegister.emailWithoutDot);
        cy.get(locators.register.password).clear().type(data.loginRegister.password);
        cy.get(locators.register.passwordConfirmation).clear().type(data.loginRegister.passwordConfirmation);
        cy.get(locators.register.checkbox).check();
        cy.get(locators.register.submit).click();
        cy.get('.alert').should('contain', errors.register.emailWithoutDot);
    });
    it('registration without password', () => {
        cy.get(locators.register.firstName).clear().type(data.loginRegister.firstName);
        cy.get(locators.register.lastName).clear().type(data.loginRegister.lastName);
        cy.get(locators.register.email).clear().type(data.loginRegister.email);
        cy.get(locators.register.password).clear();
        cy.get(locators.register.passwordConfirmation).clear().type(data.loginRegister.passwordConfirmation);
        cy.get(locators.register.checkbox).check();
        cy.get(locators.register.submit).click();
        cy.url().should('eq', 'https://gallery-app.vivifyideas.com/register');
    });
    it('registration without confirm password', () => {
        cy.get(locators.register.firstName).clear().type(data.loginRegister.firstName);
        cy.get(locators.register.lastName).clear().type(data.loginRegister.lastName);
        cy.get(locators.register.email).clear().type(data.loginRegister.email);
        cy.get(locators.register.password).clear().type(data.loginRegister.password);
        cy.get(locators.register.passwordConfirmation).clear();
        cy.get(locators.register.checkbox).check();
        cy.get(locators.register.submit).click();
        cy.url().should('eq', 'https://gallery-app.vivifyideas.com/register');
    });
    it('registration with password less than 8 characters', () => {
        cy.get(locators.register.firstName).clear().type(data.loginRegister.firstName);
        cy.get(locators.register.lastName).clear().type(data.loginRegister.lastName);
        cy.get(locators.register.email).clear().type(data.loginRegister.email);
        cy.get(locators.register.password).clear().type(data.loginRegister.passwordShort);
        cy.get(locators.register.passwordConfirmation).clear().type(data.loginRegister.passwordShort);
        cy.get(locators.register.checkbox).check();
        cy.get(locators.register.submit).click();
        cy.get('.alert').should('contain', errors.register.passwordShort);
    });
    it('registration with password without number', () => {
        cy.get(locators.register.firstName).clear().type(data.loginRegister.firstName);
        cy.get(locators.register.lastName).clear().type(data.loginRegister.lastName);
        cy.get(locators.register.email).clear().type(data.loginRegister.email);
        cy.get(locators.register.password).clear().type(data.loginRegister.passwordWithoutNumber);
        cy.get(locators.register.passwordConfirmation).clear().type(data.loginRegister.passwordWithoutNumber);
        cy.get(locators.register.checkbox).check();
        cy.get(locators.register.submit).click();
        cy.get('.alert').should('contain', errors.register.passwordWithoutNumber);
    });
    it('registration password and confirm password are not the same', () => {
        cy.get(locators.register.firstName).clear().type(data.loginRegister.firstName);
        cy.get(locators.register.lastName).clear().type(data.loginRegister.lastName);
        cy.get(locators.register.email).clear().type(data.loginRegister.email);
        cy.get(locators.register.password).clear().type(data.loginRegister.passwordLong);
        cy.get(locators.register.passwordConfirmation).clear().type(data.loginRegister.passwordConfirmation);
        cy.get(locators.register.checkbox).check();
        cy.get(locators.register.submit).click();
        cy.get(errors.createGallery.alert).should('contain', errors.register.passwordNotMatch);
    });
    it('registration checkbox not checked', () => {
        cy.get(locators.register.firstName).clear().type(data.loginRegister.firstName);
        cy.get(locators.register.lastName).clear().type(data.loginRegister.lastName);
        cy.get(locators.register.email).clear().type(data.loginRegister.email);
        cy.get(locators.register.password).clear().type(data.loginRegister.password);
        cy.get(locators.register.passwordConfirmation).clear().type(data.loginRegister.passwordConfirmation);
        cy.get(locators.register.checkbox).uncheck();
        cy.get(locators.register.submit).click();
        cy.get(errors.createGallery.alert).should('contain', errors.register.checkboxNotChecked);
    });
    it('successful registration', () => {
        cy.get(locators.register.firstName).clear().type(data.loginRegister.firstName);
        cy.get(locators.register.lastName).clear().type(data.loginRegister.lastName);
        cy.get(locators.register.email).clear().type(data.loginRegister.email);
        cy.get(locators.register.password).clear().type(data.loginRegister.password);
        cy.get(locators.register.passwordConfirmation).clear().type(data.loginRegister.passwordConfirmation);
        cy.get(locators.register.checkbox).check();
        cy.get(locators.register.submit).click();
        cy.url().should('eq', 'https://gallery-app.vivifyideas.com/');
    });
});
