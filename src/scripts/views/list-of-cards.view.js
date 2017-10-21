import {
  $qs, $insertInto, $delegate, $getItemIdOfParent, $remove,
  escapeForHTML, assembleTemplate,
} from '../utils';

class ListOfCardsView {
  constructor() {
    this.$listOfCardsContainer = $qs('.cc-list-of-cards-container');
  }

  bindRequestCardRemove(handler) {
    $delegate(this.$listOfCardsContainer, '.cc-delete-card', 'click', ({ target }) => {
      handler($getItemIdOfParent(target));
    });
  }

  appendCard(card) {
    $insertInto(this.$listOfCardsContainer, this.renderCard(card));
  }

  removeCard(id) {
    $remove(`[data-id='${id}']`, this.$listOfCardsContainer);
  }

  renderCard(card) {
    const comment = card.comment ?
      `<p class="cc-card-comment"><i>Comment:</i> ${escapeForHTML(card.comment)}</p>` :
      '';

    return `
      <div class="cc-card-container" data-id="${card.id}">
        <span class="cc-delete-card">x</span>
        <div class="${card.type} cc-card">${card.niceType}</div>
        <p class="cc-card-number"><i>Number:</i> ${escapeForHTML(card.number)}</p>
        ${comment}
      </div>
    `;
  }

  render(cards) {
    $insertInto(
      this.$listOfCardsContainer,
      assembleTemplate(cards, this.renderCard),
    );
  }
}

export default ListOfCardsView;
