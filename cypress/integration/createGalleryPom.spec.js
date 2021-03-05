import { loginPage } from '../page_objects/loginPage.js';
import { createGallery } from '../page_objects/createGallery.js';
import { allGalleries } from '../page_objects/allGalleries.js';
const data = require("../fixtures/data.json");
const errors = require("../fixtures/errors.json");

describe('create gallery', () => {
    it('login', () => {
        cy.visit('/');
        loginPage.visitLogin();
        loginPage.login(data.loginRegister.email, data.loginRegister.password);
    });
    it('title one char, too short', () => {
        createGallery.clickCreateGall();
        createGallery.fillTitleInput(data.create.titleOneLetter);
        createGallery.fillDescriptionInput(data.create.description);
        createGallery.fillImageInput(data.create.imageUrl);
        createGallery.clickSubmitButton();
        cy.get(errors.createGallery.alert).should('contain', errors.createGallery.titleShort).and('have.css', 'background-color', 'rgb(248, 215, 218)');
    });
    it('title 256 chars, too long', () => {
        createGallery.clearFields();
        createGallery.fillTitleInput(data.create.string256chars);
        createGallery.fillDescriptionInput(data.create.description);
        createGallery.fillImageInput(data.create.imageUrl);
        createGallery.clickSubmitButton();
        cy.get(errors.createGallery.alert).should('contain', errors.createGallery.titleLong).and('have.css', 'background-color', 'rgb(248, 215, 218)');
    });
    it('without title', () => {
        createGallery.clearFields();
        createGallery.fillDescriptionInput(data.create.description);
        createGallery.fillImageInput(data.create.imageUrl);
        createGallery.clickSubmitButton();
        cy.url().should('eq', 'https://gallery-app.vivifyideas.com/create');
    });
    it('without image', () => {
        createGallery.clearFields();
        createGallery.fillTitleInput(data.create.title);
        createGallery.fillDescriptionInput(data.create.description);
        createGallery.clickSubmitButton();
        cy.url().should('eq', 'https://gallery-app.vivifyideas.com/create');
    });
    it('bad image extension', () => {
        createGallery.clearFields();
        createGallery.fillTitleInput(data.create.title);
        createGallery.fillDescriptionInput(data.create.description);
        createGallery.fillImageInput(data.create.imageUrlBadExtension);
        createGallery.clickSubmitButton();
        cy.get(errors.createGallery.alert).should('contain', errors.createGallery.imageBadExtension);
    });
    it('successful create', () => {
        createGallery.clearFields();
        createGallery.fillTitleInput(data.create.title);
        createGallery.fillDescriptionInput(data.create.description);
        createGallery.fillImageInput(data.create.imageUrl);
        createGallery.clickSubmitButton();
        createGallery.titleInput.should('not.exist');
        createGallery.descriptionInput.should('not.exist');
        createGallery.imageInput.should('not.exist');
    });
    it('get all galleries', () => {
        allGalleries.visitAllGalleries();
        cy.get(".title-style").should('contain', 'All Galleries');
        cy.get(".cell:first-child").should('contain', data.create.title);
    });
});