export default class FormValidator {
  constructor(options, form) {
    this.form = form;

    this.inputSelector = options.inputSelector;
    this.error = options.error;
    this.inputTypeError = options.inputTypeError;
    this.buttonSelector = options.buttonSelector;
    this.inactiveButton = options.inactiveButton;
    this.popupErrorActive = options.popupErrorActive;

    this._inputs = [...this.form.querySelectorAll(this.inputSelector)];
    this._button = this.form.querySelector(this.buttonSelector);
  }

  _hideErrorMessage(errorSection, input) {
    errorSection.classList.remove(this.popupErrorActive);
    errorSection.textContent = '';
    input.classList.remove(this.inputTypeError);
  }

  _showErrorMessage(errorSection, errorText, input) {
    errorSection.classList.add(this.popupErrorActive);
    errorSection.textContent = errorText;
    input.classList.add(this.inputTypeError);
  }

  checkInputValidity(input, errorSection) {
   if (!input.validity.valid) {
     this._showErrorMessage(errorSection, input.validationMessage, input);
   } else {
     this._hideErrorMessage(errorSection, input);
   }
  }

  _hasInvalidInput() {
    return this._inputs.some(input => !input.validity.valid)
   }

  toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._button.classList.add(this.inactiveButton);
      this._button.disabled = true;
    } else {
      this._button.classList.remove(this.inactiveButton);
      this._button.disabled = false;
    }
   }

  _setEventListener() {

    this.toggleButtonState();

    this._inputs.forEach(input => input.addEventListener('input', () => {

      this.toggleButtonState();

      const errorSection = this.form.querySelector("." + input.id + this.error);
      this.checkInputValidity(input, errorSection);
    }))
   }

  enableValidationForm() {
    this._setEventListener();
    }
}
