describe("Testing our form inputs", ()=> {
    beforeEach(function(){
        cy.visit("http://localhost:3000");
    })
    it("Input name into the Name Input", ()=> {
        cy.get('[href="/pizza"]')
            .click()
        cy.get("#name")
            .type("Charlene Johnson")
            .should("have.value", "Charlene Johnson")
        cy.get('[name="sausage"]')
            .check()
        cy.get('[name="spinach"]')
            .check()
        cy.get('[name="onions"]')
            .check()
        cy.get('.sc-fzpans')
            .click()
    })
})