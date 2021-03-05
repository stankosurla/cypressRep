import { loginPage } from '../page_objects/loginPage.js';
import { allGalleries } from '../page_objects/allGalleries.js';
const data = require("../fixtures/data.json");
const errors = require("../fixtures/errors.json");

describe('all galleries', () => {

    it('login', () => {
        cy.visit('/');
        loginPage.visitLogin();
        loginPage.login(data.loginRegister.email, data.loginRegister.password);
        cy.url().should('eq', 'https://gallery-app.vivifyideas.com/');
    });
    it('get all galleries', () => {
        allGalleries.visitAllGalleries();
        cy.get(".title-style").should('contain', 'All Galleries');
    });
    it('empty search field', () => {
        allGalleries.clickFilterButton();
    });
    it('search for non existing word', () => {
        allGalleries.fillSearchInput('asdasdasdasd');
        allGalleries.clickFilterButton();
        cy.get('h4').should('contain', errors.allGalleries.notFound);
    });
    it('search if title contains word', () => {
        allGalleries.fillSearchInput('jedn');
        allGalleries.clickFilterButton();
        cy.get('h2 > .box-title').should('contain', 'jedn');
    });
    it('search if 2 galleries contain word', () => {
        allGalleries.fillSearchInput('Cats');
        allGalleries.clickFilterButton();
        cy.wait(1500);
        cy.get('.container > .grid').children().should('contain', 'Cats');
    });
    it('search for existing word', () => {
        allGalleries.fillSearchInput('cat');
        allGalleries.clickFilterButton();
        cy.wait(1500);
        cy.get('.cell').should('contain', 'cat');
    });
});