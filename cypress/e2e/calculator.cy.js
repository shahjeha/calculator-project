describe('Calculator UI Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5500'); // Live server ka port ho sakta hai 5500, apne port ko check karo
  });

  it('should perform addition correctly', () => {
    cy.get('button').contains('1').click();
    cy.get('button').contains('+').click();
    cy.get('button').contains('2').click();
    cy.get('button').contains('=').click();
    cy.get('#display').should('have.value', '3');
  });

  it('should clear the input when C is pressed', () => {
    cy.get('button').contains('9').click();
    cy.get('button').contains('C').click();
    cy.get('#display').should('have.value', '');
  });

  it('should perform multiplication correctly', () => {
    cy.get('button').contains('4').click();
    cy.get('button').contains('*').click();
    cy.get('button').contains('5').click();
    cy.get('button').contains('=').click();
    cy.get('#display').should('have.value', '20');
  });

  it('should handle division by zero', () => {
    cy.get('button').contains('8').click();
    cy.get('button').contains('/').click();
    cy.get('button').contains('0').click();
    cy.get('button').contains('=').click();
    cy.on('window:alert', (txt) => {
      expect(txt).to.contains('Invalid expression!');
    });
  });
});
