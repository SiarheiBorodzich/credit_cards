import { CARD_ADDED, CARD_REMOVED } from '../constants';

class ListOfCardsController {
    constructor(view, store) {
        this.view = view;
        this.store = store;

        this.initView();
        this.initSubscribers();
        this.bindHandlers();
    }

    initView() {
        const cards = this.store.getCreditCards();
        this.view.render(cards);
    }

    initSubscribers() {
        this.store.subscribe(CARD_ADDED, (card) => this.view.appendCard(card));
        this.store.subscribe(CARD_REMOVED, (id) => this.view.removeCard(id));
    }

    bindHandlers() {
        this.view.bindRequestCardRemove((id) => this.requestCardRemove(id));
    }

    requestCardRemove(id) {
        this.store.requestCreditCardRemove(id);
    }
}

export default ListOfCardsController;
