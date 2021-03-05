import { loginPage } from '../page_objects/loginPage.js';
import { createGallery } from '../page_objects/createGallery.js';
const data = require('../fixtures/data.json');

describe('create gallery with 5 photos', () => {

    let cats = [
        data.create.imageCatOne,
        data.create.imageCatTwo,
        data.create.imageCatThree,
        data.create.imageCatFour,
        data.create.imageCatFive
    ]

    it('login', () => {
        cy.visit('/');
        loginPage.visitLogin();
        loginPage.login(data.loginRegister.email, data.loginRegister.password);
    });
    it('successful create', () => {
        createGallery.clickCreateGall();
        createGallery.fillTitleInput(data.create.titleFiveCats);
        createGallery.fillDescriptionInput(data.create.descFiveCats);
        cats.forEach(function (value, i) {
            var input = 'div#app div:nth-child(' + (i + 2) + ') > div > input';
            cy.get(input).type(value);
            if (i < cats.length - 1) {
                cy.get('form div:nth-of-type(3) > [type]').click();
            }
        })
        createGallery.clickSubmitButton();
        createGallery.titleInput.should('not.exist');
        createGallery.descriptionInput.should('not.exist');
        createGallery.imageInput.should('not.exist');
    });
});