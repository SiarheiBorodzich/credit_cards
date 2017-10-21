import { $qs, $on, $getFormValues, $insertAfter, $remove, escapeForHTML } from '../utils';
import { validateCard, getCardInfo } from '../services';

class AddNewCardView {
  constructor() {
    this.hasErrors = false;
    this.$form = $qs('#cc-add-new-card-form');
    this.$cardNumber = $qs('.cc-card-number', this.$form);

    this.attachEventListeners();
  }

  attachEventListeners() {
    $on(this.$cardNumber, 'blur', ({ target }) => {
      const validationMessage = validateCard(target.value);

      if (!this.hasErrors && validationMessage) {
        $insertAfter(this.$cardNumber, this.renderValidationMessage(validationMessage));
        this.$cardNumber.classList.add('cc-error');
        this.hasErrors = true;
      } else if (this.hasErrors && validationMessage) {
        this.clearValidationMessage();
        $insertAfter(this.$cardNumber, this.renderValidationMessage(validationMessage));
      } else {
        this.clearValidationMessage();
        this.$cardNumber.classList.remove('cc-error');
        this.hasErrors = false;
      }

      $qs('.cc-submit-button', this.$form).disabled = this.hasErrors;
    });

    $on(this.$cardNumber, 'input', ({ target: { value, maxLength } }) => {
      this.$cardNumber.value = value.replace(/\D/g, '');

      if (value.length > maxLength) {
        this.$cardNumber.value = value.slice(0, maxLength);
      }
    });
  }

  clearValidationMessage() {
    $remove('.cc-validation-message', this.$form);
  }

  resetForm() {
    $qs('.cc-submit-button', this.$form).disabled = true;
    this.$form.reset();
  }

  bindAddCard(handler) {
    $on(this.$form, 'submit', (event) => {
      event.preventDefault();
      const formValues = $getFormValues(event.target.elements);
      const { type, niceType } = getCardInfo(formValues.number);

      Object.assign(formValues, {
        type,
        niceType,
      });

      handler(formValues);

      this.resetForm();
    });
  }

  renderValidationMessage(message) {
    return `
      <span class="cc-validation-message">
        ${escapeForHTML(message)}
      </span>
    `;
  }
}

export default AddNewCardView;
