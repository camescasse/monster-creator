import { Monster } from '../../src/models/interfaces/monster.interface';

const incompleteMonsters: Monster[] = [
  { id: '', name: '', attack: 0, defense: 0, hp: 0, speed: 0, imageUrl: '' },
  { id: '', name: 'monstrito', attack: 0, defense: 0, hp: 0, speed: 0, imageUrl: '' },
  { id: '', name: 'monstrito', attack: 10, defense: 0, hp: 0, speed: 0, imageUrl: '' },
  { id: '', name: 'monstrito', attack: 10, defense: 20, hp: 0, speed: 0, imageUrl: '' },
  { id: '', name: 'monstrito', attack: 10, defense: 20, hp: 30, speed: 0, imageUrl: '' },
];

describe('Monsters', () => {
  describe('Create', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/');
    });

    incompleteMonsters.forEach(({ name, attack, defense, hp, speed }) => {
      it(`should show a warning given 
          name:    ${name}, 
          attack:  ${attack}, 
          defense: ${defense}, 
          hp:      ${hp}, 
          speed:   ${speed}`, () => {
        cy.get('[data-testid="monster-name"]').type(name || '{backspace}');
        hp && cy.get('[data-testid="hp-value"]').type(hp.toString());
        attack && cy.get('[data-testid="attack-value"]').type(attack.toString());
        defense && cy.get('[data-testid="defense-value"]').type(defense.toString());
        speed && cy.get('[data-testid="speed-value"]').type(speed.toString());
        cy.get('[data-testid="btn-create-monster"]').click();

        cy.get('.MuiAlert-message').should('contain.text', 'required');
      });
    });
  });
});
