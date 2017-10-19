class AddNewCardController {
    constructor(view, store) {
        this.view = view;
        this.store = store;

        this.bindHandlers();
    }

    bindHandlers() {
        this.view.bindAddCard((card) => this.addCard(card));
    }

    addCard(card) {
        this.store.addCreditCard(card);
    }
}

export default AddNewCardController;
