import { $qs, $insertInto, $remove } from '../utils';

class PopupView {
  constructor() {
    this.$popupContainer = $qs('#cc-popup-container');
  }

  closePopup(id) {
    this.$popupContainer.classList.remove('cc-overlay');
    $remove(`[data-id='${id}']`, this.$popupContainer);
  }

  render(data) {
    this.$popupContainer.classList.add('cc-overlay');
    $insertInto(this.$popupContainer, this.renderPopupTemplate(data));
  }
}

export default PopupView;
