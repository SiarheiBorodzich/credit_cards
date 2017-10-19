import BaseStore from './base.store';
import {
    CARD_ADDED,
    CARD_REMOVED,
    CARD_REMOVE_REQUEST,
} from '../constants';

class CreditCardsStore extends BaseStore {
    static create() {
        return new CreditCardsStore()
    }

    getCreditCards() {
        return JSON.parse(localStorage.getItem('creditCards')) || [];
    }

    setCreditCards(values) {
        localStorage.setItem('creditCards', JSON.stringify(values));
    }

    addCreditCard(card) {
        const cards = this.getCreditCards();

        cards.push(card);
        this.setCreditCards(cards);

        this.emit(CARD_ADDED, card);
    }

    removeCreditCard(id) {
        const cards = this.getCreditCards().filter((card) => card.id !== id);
        this.setCreditCards(cards);
        
        this.emit(CARD_REMOVED, id);
    }

    requestCreditCardRemove(id) {
        const card = this.getCreditCards().filter((card) => card.id === id);

        this.emit(CARD_REMOVE_REQUEST, ...card);
    }
}

export default CreditCardsStore;
