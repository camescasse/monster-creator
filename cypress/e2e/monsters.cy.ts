import { Monster } from '../../src/models/interfaces/monster.interface';
import MonstersForm from './page_objects/MonstersForm';
import MonstersList from './page_objects/MonstersList';

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
  const monstersList = new MonstersList();

  beforeEach(() => {
    cy.visit('http://localhost:3000/');
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
        monstersForm.fill(name, attack, defense, hp, speed).create();

        monstersForm.alertMessage.should('contain.text', 'required');
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

      monstersForm
        .fill(
          noImageMonster.name,
          noImageMonster.attack,
          noImageMonster.defense,
          noImageMonster.hp,
          noImageMonster.speed
        )
        .create();

      monstersList.monsterName.should('contain.text', noImageMonster.name);
    });

    it('should create a monster given all values and image', () => {
      monstersForm
        .fill(monster.name, monster.attack, monster.defense, monster.hp, monster.speed)
        .selectRandomImage()
        .create();

      monstersList.monsterName.should('contain.text', monster.name);
    });
  });

  describe('List', () => {
    it('should delete a monster given one is created', () => {
      monstersForm
        .fill(monster.name, monster.attack, monster.defense, monster.hp, monster.speed)
        .selectRandomImage()
        .create();
      monstersList.delete();

      monstersList.title.should('have.text', 'There are no monsters');
    });

    it('should favorite and unfavorite given a monster is created', () => {
      monstersForm
        .fill(monster.name, monster.attack, monster.defense, monster.hp, monster.speed)
        .selectRandomImage()
        .create();
      monstersList.favorite();

      monstersList.favoriteButton.should('have.attr', 'style', 'color: red;');

      monstersList.favorite();
      monstersList.favoriteButton.should('have.attr', 'style', 'color: rgba(0, 0, 0, 0.6);');
    });
  });
});
