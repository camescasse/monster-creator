import { Monster } from '../../src/models/interfaces/monster.interface';

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

  get createButton() {
    return cy.get('[data-testid="btn-create-monster"]');
  }

  get requiredAlert() {
    return cy.get('.MuiAlert-message');
  }

  randomImage() {
    const random = Math.floor(Math.random() * 5) + 1;
    return cy.get(`[data-testid="monster-${random}"]`).click();
  }

  createInvalid(name: string, attack: number, defense: number, hp: number, speed: number) {
    this.name.type(name || '{backspace}');
    hp && this.hp.type(hp.toString());
    attack && this.attack.type(attack.toString());
    defense && this.defense.type(defense.toString());
    speed && this.speed.type(speed.toString());
    this.createButton.click();
  }

  createValidWithoutImage(name: string, attack: number, defense: number, hp: number, speed: number) {
    this.name.type(name);
    this.hp.type(hp.toString());
    this.attack.type(attack.toString());
    this.defense.type(defense.toString());
    this.speed.type(speed.toString());
    this.createButton.click();
  }

  create(monster: Monster) {
    this.name.type(monster.name);
    this.hp.type(monster.hp.toString());
    this.attack.type(monster.attack.toString());
    this.defense.type(monster.defense.toString());
    this.speed.type(monster.speed.toString());
    this.randomImage().click();
    this.createButton.click();
  }
}
