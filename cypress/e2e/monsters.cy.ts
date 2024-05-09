import { Monster } from '../../src/models/interfaces/monster.interface';

describe('Monsters', () => {
  describe('Create', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3000/');
    });

    [
      { id: '', name: '', attack: 0, defense: 0, hp: 0, speed: 0, imageUrl: '' },
      { id: '', name: 'monstrito', attack: 0, defense: 0, hp: 0, speed: 0, imageUrl: '' },
      { id: '', name: 'monstrito', attack: 10, defense: 0, hp: 0, speed: 0, imageUrl: '' },
      { id: '', name: 'monstrito', attack: 10, defense: 20, hp: 0, speed: 0, imageUrl: '' },
      { id: '', name: 'monstrito', attack: 10, defense: 20, hp: 30, speed: 0, imageUrl: '' },
    ].forEach(({ name, attack, defense, hp, speed }) => {
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

    it('should create a monster given all values except image', () => {
      const noImageMonster: Monster = {
        id: '',
        name: 'monstrote',
        attack: 10,
        defense: 20,
        hp: 30,
        speed: 40,
        imageUrl: '',
      };

      cy.get('[data-testid="monster-name"]').type(noImageMonster.name);
      cy.get('[data-testid="hp-value"]').type(noImageMonster.hp.toString());
      cy.get('[data-testid="attack-value"]').type(noImageMonster.attack.toString());
      cy.get('[data-testid="defense-value"]').type(noImageMonster.defense.toString());
      cy.get('[data-testid="speed-value"]').type(noImageMonster.speed.toString());
      cy.get('[data-testid="btn-create-monster"]').click();

      cy.get('[data-testid="card-monster-name"]').should('contain.text', noImageMonster.name);
    });

    function createMonster(monster: Monster) {
      cy.get('[data-testid="monster-name"]').type(monster.name);
      cy.get('[data-testid="hp-value"]').type(monster.hp.toString());
      cy.get('[data-testid="attack-value"]').type(monster.attack.toString());
      cy.get('[data-testid="defense-value"]').type(monster.defense.toString());
      cy.get('[data-testid="speed-value"]').type(monster.speed.toString());
      cy.get('[data-testid="monster-1"]').click();
      cy.get('[data-testid="btn-create-monster"]').click();
    }

    it('should create a monster given all values and image', () => {
      const monster: Monster = {
        id: '',
        name: 'monstrote',
        attack: 10,
        defense: 20,
        hp: 30,
        speed: 40,
        imageUrl: '',
      };

      createMonster(monster);

      cy.get('[data-testid="card-monster-name"]').should('contain.text', monster.name);
    });

    it('should delete a monster given one is created', () => {
      const monster: Monster = {
        id: '',
        name: 'monstrosaso',
        attack: 20,
        defense: 30,
        hp: 40,
        speed: 50,
        imageUrl: '',
      };

      createMonster(monster);
      cy.get('[data-testid="btn-delete"]').click();

      cy.get('[data-testid="dynamic-title"]').should('have.text', 'There are no monsters');
    });

    it('should favorite and unfavorite given a monster is created', () => {
      const monster: Monster = {
        id: '',
        name: 'monstrosasote',
        attack: 30,
        defense: 40,
        hp: 50,
        speed: 60,
        imageUrl: '',
      };

      createMonster(monster);
      cy.get('[data-testid="favorite-btn"]').click();
      cy.get('[data-testid="favorite-btn"]').should('have.attr', 'style', 'color: red;');

      cy.get('[data-testid="favorite-btn"]').click();
      cy.get('[data-testid="favorite-btn"]').should('have.attr', 'style', 'color: rgba(0, 0, 0, 0.6);');
    });
  });
});
