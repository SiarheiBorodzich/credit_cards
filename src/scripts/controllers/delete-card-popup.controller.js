import { CARD_REMOVE_REQUEST } from '../constants';

class DeleteCardPopupController {
    constructor(view, store) {
        this.view = view;
        this.store = store;

        this.bindHandlers();
        this.initSubscribers();
    }

    initSubscribers() {
        this.store.subscribe(CARD_REMOVE_REQUEST, (card) => this.view.render(card));
    }

    bindHandlers() {
        this.view.bindSubmitPress((id) => this.removeCard(id));
    }

    removeCard(id) {
        this.store.removeCreditCard(id);
    }
}

export default DeleteCardPopupController;
