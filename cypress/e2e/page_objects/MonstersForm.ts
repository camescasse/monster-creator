import { Monster } from '../../../src/models/interfaces/monster.interface';

export default class MonstersForm {
  get name() {
    return cy.get('[data-testid="monster-name"]');
  }

  get hp() {
    return cy.get('[data-testid="hp-value"]');
  }

  get attack() {
    return cy.get('[data-testid="attack-value"]');
  }

  get defense() {
    return cy.get('[data-testid="defense-value"]');
  }

  get speed() {
    return cy.get('[data-testid="speed-value"]');
  }

  get alertMessage() {
    return cy.get('.MuiAlert-message');
  }

  selectRandomImage() {
    const random = Math.floor(Math.random() * 5) + 1;
    cy.get(`[data-testid="monster-${random}"]`).click();
    return this;
  }

  fill(monster: Monster) {
    this.name.type(monster.name || '{backspace}');
    monster.hp && this.hp.type(monster.hp.toString());
    monster.attack && this.attack.type(monster.attack.toString());
    monster.defense && this.defense.type(monster.defense.toString());
    monster.speed && this.speed.type(monster.speed.toString());
    return this;
  }

  create() {
    cy.get('[data-testid="btn-create-monster"]').click();
  }
}
