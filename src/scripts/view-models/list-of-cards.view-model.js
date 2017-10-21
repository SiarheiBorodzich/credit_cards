import { CARD_ADDED, CARD_REMOVED } from '../constants';

class ListOfCardsViewModel {
  constructor(view, model) {
    this.view = view;
    this.model = model;

    this.initView();
    this.initSubscribers();
    this.bindHandlers();
  }

  initView() {
    const cards = this.model.getCreditCards();
    this.view.render(cards);
  }

  initSubscribers() {
    this.model.subscribe(CARD_ADDED, card => this.view.appendCard(card));
    this.model.subscribe(CARD_REMOVED, id => this.view.removeCard(id));
  }

  bindHandlers() {
    this.view.bindRequestCardRemove(id => this.requestCardRemove(id));
  }

  requestCardRemove(id) {
    this.model.requestCreditCardRemove(id);
  }
}

export default ListOfCardsViewModel;
