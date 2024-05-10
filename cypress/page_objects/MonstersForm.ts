import { Monster } from '../../src/models/interfaces/monster.interface';

export default class MonstersForm {
  open() {
    cy.visit('http://localhost:3000/');
  }

  createInvalid(name: string, attack: number, defense: number, hp: number, speed: number) {
    cy.get('[data-testid="monster-name"]').type(name || '{backspace}');
    hp && cy.get('[data-testid="hp-value"]').type(hp.toString());
    attack && cy.get('[data-testid="attack-value"]').type(attack.toString());
    defense && cy.get('[data-testid="defense-value"]').type(defense.toString());
    speed && cy.get('[data-testid="speed-value"]').type(speed.toString());
    cy.get('[data-testid="btn-create-monster"]').click();
  }

  createValidWithoutImage(name: string, attack: number, defense: number, hp: number, speed: number) {
    cy.get('[data-testid="monster-name"]').type(name);
    cy.get('[data-testid="hp-value"]').type(hp.toString());
    cy.get('[data-testid="attack-value"]').type(attack.toString());
    cy.get('[data-testid="defense-value"]').type(defense.toString());
    cy.get('[data-testid="speed-value"]').type(speed.toString());
    cy.get('[data-testid="btn-create-monster"]').click();
  }

  create(monster: Monster) {
    cy.get('[data-testid="monster-name"]').type(monster.name);
    cy.get('[data-testid="hp-value"]').type(monster.hp.toString());
    cy.get('[data-testid="attack-value"]').type(monster.attack.toString());
    cy.get('[data-testid="defense-value"]').type(monster.defense.toString());
    cy.get('[data-testid="speed-value"]').type(monster.speed.toString());
    const random = Math.floor(Math.random() * 5) + 1;
    cy.get(`[data-testid="monster-${random}"]`).click();
    cy.get('[data-testid="btn-create-monster"]').click();
  }
}
