class AddNewCardViewModel {
  constructor(view, model) {
    this.view = view;
    this.model = model;

    this.bindHandlers();
  }

  bindHandlers() {
    this.view.bindAddCard(card => this.addCard(card));
  }

  addCard(card) {
    this.model.addCreditCard(card);
  }
}

export default AddNewCardViewModel;
