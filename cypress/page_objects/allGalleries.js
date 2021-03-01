class AllGalleries {

    get navigationAllGalleries() {
        return cy.get('.nav-link').eq(0);
    }

    get searchInput() {
        return cy.get('input[type="text"]');
    }

    get filterButton() {
        return cy.get('button[type="button"]');
    }

    clickFilterButton() {
        this.filterButton.click();
    }

    fillSearchInput(str) {
        this.searchInput.clear().type(str);
    }

    visitAllGalleries() {
        this.navigationAllGalleries.click();
    }
}

export const allGalleries = new AllGalleries();