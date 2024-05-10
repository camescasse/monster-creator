import { Monster } from '../../src/models/interfaces/monster.interface';
import MonstersForm from '../page_objects/MonstersForm';

describe('Monsters', () => {
  const monster: Monster = {
    id: '',
    name: 'monstrote',
    attack: 10,
    defense: 20,
    hp: 30,
    speed: 40,
    imageUrl: '',
  };
  const monstersForm = new MonstersForm();

  beforeEach(() => {
    monstersForm.open();
  });

  describe('Form', () => {
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
        monstersForm.createInvalid(name, attack, defense, hp, speed);

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

      monstersForm.createValidWithoutImage(
        noImageMonster.name,
        noImageMonster.attack,
        noImageMonster.defense,
        noImageMonster.hp,
        noImageMonster.speed
      );

      cy.get('[data-testid="card-monster-name"]').should('contain.text', noImageMonster.name);
    });

    it('should create a monster given all values and image', () => {
      monstersForm.create(monster);

      cy.get('[data-testid="card-monster-name"]').should('contain.text', monster.name);
    });
  });

  describe('List', () => {
    it('should delete a monster given one is created', () => {
      monstersForm.create(monster);
      cy.get('[data-testid="btn-delete"]').click();

      cy.get('[data-testid="dynamic-title"]').should('have.text', 'There are no monsters');
    });

    it('should favorite and unfavorite given a monster is created', () => {
      monstersForm.create(monster);
      cy.get('[data-testid="favorite-btn"]').click();
      cy.get('[data-testid="favorite-btn"]').should('have.attr', 'style', 'color: red;');

      cy.get('[data-testid="favorite-btn"]').click();
      cy.get('[data-testid="favorite-btn"]').should('have.attr', 'style', 'color: rgba(0, 0, 0, 0.6);');
    });
  });
});
