export default class MonstersList {
  get favoriteButton() {
    return cy.get('[data-testid="favorite-btn"]');
  }

  get monsterName() {
    return cy.get('[data-testid="card-monster-name"]');
  }

  get title() {
    return cy.get('[data-testid="dynamic-title"]');
  }

  delete() {
    cy.get('[data-testid="btn-delete"]').click();
  }

  favorite() {
    this.favoriteButton.click();
  }
}
