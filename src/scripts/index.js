import { CreditCardsStore } from './stores';
import { AddNewCardView, ListOfCardsView, DeletePopupView } from './views';
import { AddNewCardController, ListOfCardsController, DeleteCardPopupController } from './controllers';

class App {
    constructor() {
        this.initStores();
        this.initControllers();
    }

    static init() {
        new App();
    }

    initStores() {
        this.creditCardStore = CreditCardsStore.create();
    }

    initControllers() {
        new ListOfCardsController(new ListOfCardsView(), this.creditCardStore);
        new AddNewCardController(new AddNewCardView(), this.creditCardStore);
        new DeleteCardPopupController(new DeletePopupView(), this.creditCardStore);
    }
}

export default App;
