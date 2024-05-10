export default class MonstersList {
  get deleteButton() {
    return cy.get('[data-testid="btn-delete"]');
  }

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
    this.deleteButton.click();
  }

  clickFavorite() {
    this.favoriteButton.click();
  }
}
