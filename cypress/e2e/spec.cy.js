describe('calculator', function () {
  beforeEach(function () {
    cy.visit('http://localhost:3000');
  });

  it('should add two numbers', function () {
    cy.contains('1').click()
    cy.contains('+').click()
    cy.contains('2').click()
    cy.contains('=').click()
    cy.get('#current-operand').should('contain', 3);
  });

  it('should subtract two numbers', function () {
    cy.contains('5').click()
    cy.contains('-').click()
    cy.contains('3').click()
    cy.contains('=').click()
    cy.get('#current-operand').should('contain', 2);
  });

  it('should multiply two numbers', function () {
    cy.contains('5').click()
    cy.contains('*').click()
    cy.contains('4').click()
    cy.contains('=').click()
    cy.get('#current-operand').should('contain', 20);
  });

  it('should divide two numbers', function () {
    cy.contains('8').click()
    cy.contains('÷').click()
    cy.contains('2').click()
    cy.contains('=').click()
    cy.get('#current-operand').should('contain', 4);
  });

});