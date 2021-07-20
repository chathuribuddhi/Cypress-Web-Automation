
const map = {
    nameTxtBox:
      "#developer-name",
    featureCheckBox:
      "#main-form > div > div.row > div.column.col-1 > fieldset:nth-child(2) > p > label",
    detailsCheckbox:
      "#main-form > div > div.row > div.column.col-2 > fieldset:nth-child(1) > p > label",
    dropDown:
      "#preferred-interface",
    enableSlider:
      "#tried-test-cafe",
    slider:
      "#slider > span",
    commentTxtBox:
      "#comments",
    button:
      "#submit-button",
    acceptLabel:
      "#article-header",
    populate:
      "#populate",
  };


export function example(urlPath, details) {
    cy.visit(urlPath);
    cy.get(map.nameTxtBox).type(details.neme);
    cy.wait(3000);
    cy.get(map.populate).click();
    // cy.type('{enter}');
    cy.wait(3000);

    cy.get(map.featureCheckBox).eq(0).click().should('have.text', details.feature);
    cy.wait(3000);

    cy.get(map.detailsCheckbox).eq(0).click().should('have.text', details.os);
    cy.wait(3000);

    cy.get(map.dropDown).select('JavaScript API');
    cy.get(map.enableSlider).check().should('be.checked');
    cy.get(map.slider).click().type('{rightarrow}');
    cy.wait(3000);

    cy.get(map.commentTxtBox).type(details.text);
    cy.get(map.button).click();
    cy.get(map.acceptLabel).contains(details.accept_text);
    cy.wait(3000);
}