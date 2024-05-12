import { Monster } from '../../src/models/interfaces/monster.interface';
import MonstersForm from './page_objects/MonstersForm';
import MonstersList from './page_objects/MonstersList';
import 'dotenv/config';

describe('Monsters', () => {
  const form = new MonstersForm();
  const list = new MonstersList();

  const monster: Monster = {
    id: '',
    name: 'monstrote',
    attack: 10,
    defense: 20,
    hp: 30,
    speed: 40,
    imageUrl: '',
  };

  beforeEach(() => {
    const BASE_URL = Cypress.config('baseUrl');
    if (!BASE_URL) throw new Error('Please add the BASE_URL environment variable to your .env file.');
    cy.visit(BASE_URL);
  });

  describe('Form', () => {
    [
      { id: '', name: '', attack: 0, defense: 0, hp: 0, speed: 0, imageUrl: '' },
      { id: '', name: 'monstrito', attack: 0, defense: 0, hp: 0, speed: 0, imageUrl: '' },
      { id: '', name: 'monstrito', attack: 10, defense: 0, hp: 0, speed: 0, imageUrl: '' },
      { id: '', name: 'monstrito', attack: 10, defense: 20, hp: 0, speed: 0, imageUrl: '' },
      { id: '', name: 'monstrito', attack: 10, defense: 20, hp: 30, speed: 0, imageUrl: '' },
    ].forEach(monster => {
      it(`should show a warning given 
          name:    ${monster.name}, 
          attack:  ${monster.attack}, 
          defense: ${monster.defense}, 
          hp:      ${monster.hp}, 
          speed:   ${monster.speed}`, () => {
        form.fill(monster).create();

        form.alertMessage.should('contain.text', 'required');
      });
    });

    it('should create a monster given all values except image', () => {
      form.fill(monster).create();

      list.monsterName.should('contain.text', monster.name);
    });

    it('should create a monster given all values and image', () => {
      form.fill(monster).selectRandomImage().create();

      list.monsterName.should('contain.text', monster.name);
    });
  });

  describe('List', () => {
    it('should delete a monster given one is created', () => {
      form.fill(monster).selectRandomImage().create();
      list.delete();

      list.title.should('have.text', 'There are no monsters');
    });

    it('should favorite and unfavorite given a monster is created', () => {
      form.fill(monster).selectRandomImage().create();
      list.favorite();

      list.favoriteButton.should('have.attr', 'style', 'color: red;');
      list.favorite();
      list.favoriteButton.should('have.attr', 'style', 'color: rgba(0, 0, 0, 0.6);');
    });
  });
});
