import { CreditCardsModel } from './models';
import { AddNewCardView, ListOfCardsView, DeletePopupView } from './views';
import { AddNewCardViewModel, ListOfCardsViewModel, DeleteCardPopupViewModel } from './view-models';

class App {
  constructor() {
    this.initModels();
    this.initViewModels();
  }

  static init() {
    return new App();
  }

  initModels() {
    this.creditCardModel = new CreditCardsModel();
  }

  initViewModels() {
    this.listOfCardsViewModel = new ListOfCardsViewModel(new ListOfCardsView(), this.creditCardModel);
    this.addNewCardViewModel = new AddNewCardViewModel(new AddNewCardView(), this.creditCardModel);
    this.deleteCardPopupViewModel = new DeleteCardPopupViewModel(new DeletePopupView(), this.creditCardModel);
  }
}

export default App;
