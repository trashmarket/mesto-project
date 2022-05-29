export default class FormValidator {
  constructor(options, form) {
    this.form = form;

    this.inputSelector = options.inputSelector;
    this.error = options.error;
    this.inputTypeError = options.inputTypeError;
    this.buttonSelector = options.buttonSelector;
    this.inactiveButton = options.inactiveButton;
    this.popupErrorActive = options.popupErrorActive;
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

  _hasInvalidInput(inputList) {
   return inputList.some(input => !input.validity.valid)
  }

  toggleButtonState(inputs, button) {
   if (this._hasInvalidInput(inputs)) {
     button.classList.add(this.inactiveButton);
     button.disabled = true;
   } else {
     button.classList.remove(this.inactiveButton);
     button.disabled = false;
   }
  }

  _setEventListener(inputs, button) {

   this.toggleButtonState(inputs, button, this.inactiveButton);

   inputs.forEach(input => input.addEventListener('input', () => {

     this.toggleButtonState(inputs, button, this.inactiveButton);

     const errorSection = this.form.querySelector("." + input.id + this.error);
     this.checkInputValidity(input, errorSection);
   }))
  }

  enableValidationForm() {
  const inputs = [...this.form.querySelectorAll(this.inputSelector)];
  const button = this.form.querySelector(this.buttonSelector);

  this._setEventListener(inputs, button);
  }
}