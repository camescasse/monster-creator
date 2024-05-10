export default class MonstersList {
  delete() {
    cy.get('[data-testid="btn-delete"]').click();
  }

  clickFavorite() {
    cy.get('[data-testid="favorite-btn"]').click();
  }
}
