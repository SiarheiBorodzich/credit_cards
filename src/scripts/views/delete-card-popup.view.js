import PopupView from './popup.view';
import { $delegate, $getItemId, escapeForHTML } from '../utils';

class DeleteCardPopupView extends PopupView {
    constructor() {
        super();

        this.attachEventListeners();
    }

    attachEventListeners() {
        $delegate(this.$popupContainer, '.cc-button-cancel', 'click', ({ target }) => {
            const $deleteCardPopup = target.closest('.cc-delete-card-popup');
            this.closePopup($getItemId($deleteCardPopup));
        });
    }

    bindSubmitPress(handler) {
        $delegate(this.$popupContainer, '.cc-button-submit', 'click', ({ target }) => {
            const $deleteCardPopup = target.closest('.cc-delete-card-popup');
            const id = $getItemId($deleteCardPopup);
            
            this.closePopup(id);
            handler(id);
        });
    }

    renderPopupTemplate(card) {
        return `
            <div class="cc-delete-card-popup cc-popup" data-id="${card.id}">
                <p class="cc-message">
                    Are you sure you want to delete card with number <span>${escapeForHTML(card.number)}</span>?
                </p>
                <div class="cc-button-container">
                    <button class="cc-button-cancel cc-button">No</button>
                    <button class="cc-button-submit cc-button">Yes</button>
                </div>
            </div>
        `;
    }
}

export default DeleteCardPopupView;
