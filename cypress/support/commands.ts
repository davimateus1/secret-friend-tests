/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

Cypress.Commands.add('getByData', (selector: string, ...args: any[]) => {
  return cy.get(selector, ...args);
});

Cypress.Commands.add('addParticipants', (participants: string[]) => {
  const beforeButtonStart = cy.getByData('button[id="start-button"]');

  beforeButtonStart.should('be.disabled');
  beforeButtonStart.should('have.css', 'cursor', 'not-allowed');

  participants.forEach((participant) => {
    const input = cy.get('input[id="add-participant-input"]');
    const buttonAdd = cy.get('button[id="add-participant-button"]');

    input.type(participant);
    buttonAdd.click();

    input.clear();
    input.should('be.empty');
    input.should('have.focus');

    const participantsList = cy.get('ul[id="participants-list"]');

    participantsList.should('contain', participant);
  });

  const afterButtonStart = cy.getByData('button[id="start-button"]');

  afterButtonStart.should('not.be.disabled');
  afterButtonStart.should('have.css', 'cursor', 'pointer');
  afterButtonStart.click();

  cy.url().should('eq', `${Cypress.env('baseUrl')}/sorteio`);
});
