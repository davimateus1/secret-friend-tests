import { faker } from '@faker-js/faker';

describe('Complete sort flow', () => {
  const participants = Array.from({ length: 5 }, () =>
    faker.person.firstName()
  );

  beforeEach(() => {
    cy.visit(Cypress.env('baseUrl'));
  });

  it('Should be able to dont start the sort if participants are less than 3', () => {
    const twoParticipants = participants.slice(0, 2);

    const input = cy.get('input[id="add-participant-input"]');
    const buttonStartBefore = cy.getByData('button[id="start-button"]');
    const buttonAdd = cy.get('button[id="add-participant-button"]');

    buttonStartBefore.should('be.disabled');
    buttonStartBefore.should('have.css', 'cursor', 'not-allowed');

    twoParticipants.forEach((participant) => {
      input.type(participant);
      buttonAdd.click();

      input.clear();
      input.should('be.empty');
      input.should('have.focus');
    });

    const buttonStartAfter = cy.getByData('button[id="start-button"]');

    buttonStartAfter.should('be.disabled');
    buttonStartAfter.should('have.css', 'cursor', 'not-allowed');
  });

  it('Should be able to dont add a duplicate participant', () => {
    const participantsDuplicate = [...participants, participants[0]];
    const errorMessage = cy.getByData('text[id="error-message"]');

    errorMessage.should('not.exist');

    participantsDuplicate.forEach((participant) => {
      const input = cy.get('input[id="add-participant-input"]');
      const buttonAdd = cy.get('button[id="add-participant-button"]');

      input.type(participant);
      buttonAdd.click();

      input.clear();
      input.should('be.empty');
      input.should('have.focus');
    });

    errorMessage.should('exist');
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

    const sortResult = cy.getByData('#sort-result');
    sortResult.should('have.text', '');

    participants.forEach((_, index) => {
      select.select(participants[index]);
      select.should('have.value', participants[index]);

      const sortButton = cy.getByData('button[id="sort-button"]');
      sortButton.click();
    });

    sortResult.should('not.have.text', '');
  });
});
