describe("Hospitals", () => {
    it("video and 3 hospital images", () => {
      cy.visit("/api/auth/signin");
  
      cy.get('input[name="email"]').type("patient1@gmail.com"); 
      cy.get('input[name="password"]').type("17554gun"); 
      cy.get('button[type="submit"]').click();
  
      cy.wait(2000); // wait after authen
  
      cy.visit("/");
  
      cy.get("video").should("be.visible");
      cy.get("video").should("have.prop", "paused", false);
  
      cy.wait(5000)
  
      cy.get("button").contains("Pause").click();
      cy.get("video").should("have.prop", "paused", true);
  
      cy.get("button")
        .contains("Booking Your Vaccine Now")
        .click();
  
      cy.wait(5000);
  
      cy.get("img").should("exist");
  
      cy.get("img").should("have.length.gte", 3);
    });
  });
