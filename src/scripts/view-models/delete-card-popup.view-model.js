import { CARD_REMOVE_REQUEST } from '../constants';

class DeleteCardPopupViewModel {
  constructor(view, model) {
    this.view = view;
    this.model = model;

    this.bindHandlers();
    this.initSubscribers();
  }

  initSubscribers() {
    this.model.subscribe(CARD_REMOVE_REQUEST, card => this.view.render(card));
  }

  bindHandlers() {
    this.view.bindSubmitPress(id => this.removeCard(id));
  }

  removeCard(id) {
    this.model.removeCreditCard(id);
  }
}

export default DeleteCardPopupViewModel;
