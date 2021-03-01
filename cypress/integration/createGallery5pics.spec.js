import { loginPage } from '../page_objects/loginPage.js'
import { createGallery } from '../page_objects/createGallery.js'

describe('create gallery with 5 photos', () => {

    let cats = [
        "https://upload.wikimedia.org/wikipedia/commons/4/4d/Cat_March_2010-1.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/1/1a/Arthur%2C_the_cat.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/a/a5/Red_Kitten_01.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/6/66/Taipei_cats.jpg",
        "https://upload.wikimedia.org/wikipedia/commons/2/22/Turkish_Van_Cat.jpg"
    ]

    it('login', () => {
        cy.visit('/');
        loginPage.visitLogin();
        loginPage.login("test12345678@gmail.com", "12345678")
    });
    it('successful create', () => {
        createGallery.clickCreateGall();
        createGallery.fillTitleInput('Cats');
        createGallery.fillDescriptionInput('5 cats');
        cats.forEach(function (value, i) {
            var input = 'div#app div:nth-child(' + (i + 2) + ') > div > input';
            cy.get(input).type(value);
            if (i < cats.length - 1) {
                cy.get('form div:nth-of-type(3) > [type]').click();
            }
        })
        createGallery.clickSubmitButton();
    });
});