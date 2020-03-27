describe("Test out inputs and submit out form", function () {
    this.beforeEach(function () {
        cy.visit("http://localhost:3000/");
    });

    it("Checks form inputs and submit", function () {
        cy.get("[data-cy=pizza")
        .click();
        cy.get("[data-cy=size]")
        .select("Small")
        .should("have.value", "Small")
        cy.get("[data-cy=sauce] > :nth-child(1) > input")
        .check("Classic Red")
        .should("have.value", "Classic Red");
        cy.get("[data-cy=sauce] > :nth-child(2) > input")
        .check("BBQ")
        .should("have.value", "BBQ");
        cy.get("[data-cy=sauce] > :nth-child(3) > input")
        .check("Garlic Ranch")
        .should("have.value", "Garlic Ranch");
        cy.get("[data-cy=sauce] > :nth-child(4) > input")
        .check("Alfredo")
        .should("have.value", "Alfredo");
        cy.get("[data-cy=pepperoni]")
        .check()
        .should("have.value", "on");
        cy.get("[data-cy=sausage]")
        .check()
        .should("have.value", "on");
        cy.get("[data-cy=pineapple]")
        .check()
        .should("have.value", "on");
        cy.get("[data-cy=bacon]")
        .check()
        .should("have.value", "on");
        cy.get("[data-cy=glutenFree]")
        .click()
        cy.get("[data-cy=name]")
        .type("Nathan")
        .should("have.value", "Nathan")
        cy.get("[data-cy=submit]")
        .click();

        


    });

});