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

  randomImage() {
    const random = Math.floor(Math.random() * 5) + 1;
    return cy.get(`[data-testid="monster-${random}"]`).click();
  }

  fill(name: string, attack: number, defense: number, hp: number, speed: number) {
    this.name.type(name || '{backspace}');
    hp && this.hp.type(hp.toString());
    attack && this.attack.type(attack.toString());
    defense && this.defense.type(defense.toString());
    speed && this.speed.type(speed.toString());
  }

  create() {
    cy.get('[data-testid="btn-create-monster"]').click();
  }
}
