import { faker } from '@faker-js/faker';

describe('Configuration Page e2e', () => {
  const participants = Array.from({ length: 5 }, () =>
    faker.person.firstName()
  );

  beforeEach(() => {
    cy.visit(Cypress.env('baseUrl'));
  });

  it('Should be able disable the button if the input is empty', () => {
    const input = cy.getByData('input[id="add-participant-input"]');

    input.should('be.empty');

    const buttonAdd = cy.getByData('button[id="add-participant-button"]');

    buttonAdd.should('be.disabled');
    buttonAdd.should('have.css', 'cursor', 'not-allowed');

    const buttonStart = cy.getByData('button[id="start-button"]');

    buttonStart.should('be.disabled');
    buttonStart.should('have.css', 'cursor', 'not-allowed');

    input.type('Davi');
    buttonAdd.should('not.be.disabled');
    input.clear();
  });

  it('Should be able to add a participants and sort them', () => {
    cy.addParticipants(participants);

    const select = cy.get('[data-testid="select-participant"]');

    select.select(participants[2]);
    select.should('have.value', participants[2]);

    const sortButton = cy.getByData('button[id="sort-button"]');
    sortButton.click();
  });
});
