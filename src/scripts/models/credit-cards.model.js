import BaseModel from './base.model';
import {
  CARD_ADDED,
  CARD_REMOVED,
  CARD_REMOVE_REQUEST,
} from '../constants';

class CreditCardsModel extends BaseModel {
  getCreditCards() {
    return JSON.parse(localStorage.getItem('creditCards')) || [];
  }

  setCreditCards(values) {
    localStorage.setItem('creditCards', JSON.stringify(values));
  }

  addCreditCard(card) {
    const cards = this.getCreditCards();
    const hadCards = !!cards.length;

    cards.push(card);
    this.setCreditCards(cards);

    this.emit(CARD_ADDED, card, hadCards);
  }

  removeCreditCard(id) {
    const cards = this.getCreditCards().filter(c => c.id !== id);
    this.setCreditCards(cards);

    this.emit(CARD_REMOVED, id, !!cards.length);
  }

  requestCreditCardRemove(id) {
    const card = this.getCreditCards().filter(c => c.id === id);

    this.emit(CARD_REMOVE_REQUEST, ...card);
  }
}

export default CreditCardsModel;
