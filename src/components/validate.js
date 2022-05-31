
// const setEventListener = (form, inputSelector, error, inputTypeError, buttonSelector, inactiveButton, popupErrorActive) => {
//   const inputs = [...form.querySelectorAll(inputSelector)];
//   const button = form.querySelector(buttonSelector);
//   toggleButtonState(inputs, button, inactiveButton);
//   inputs.forEach(input => input.addEventListener('input', () => {
//     toggleButtonState(inputs, button, inactiveButton);
//     const errorSection = form.querySelector("." + input.id + error);
//     checkInputValidity(input, errorSection, popupErrorActive, inputTypeError);
//   }))
// }

// const showErrorMessage = (errorSection, errorText, input, popupErrorActive, inputTypeError) => {
//   errorSection.classList.add(popupErrorActive);
//   errorSection.textContent = errorText;
//   input.classList.add(inputTypeError);
// }

// const hideErrorMessage = (errorSection, input, popupErrorActive, inputTypeError) => {
//   errorSection.classList.remove(popupErrorActive);
//   errorSection.textContent = '';
//   input.classList.remove(inputTypeError);
// }
 
// const checkInputValidity = (input, errorSection, popupErrorActive, inputTypeError) => {
//   if (!input.validity.valid) {
//     showErrorMessage(errorSection, input.validationMessage, input, popupErrorActive, inputTypeError);
//   } else {
//     hideErrorMessage(errorSection, input, popupErrorActive, inputTypeError);
//   }
// }

// const hasInvalidInput = (inputList) => {
//   return inputList.some(input => !input.validity.valid)
// }

// const toggleButtonState = (inputList, button, inactiveButton) => {
//   if (hasInvalidInput(inputList)) {
//     button.classList.add(inactiveButton);
//     button.disabled = true;
//   } else {
//     button.classList.remove(inactiveButton);
//     button.disabled = false;
//   }
// }

//  const enableValidationForm = ({form, error, inputSelector, inputTypeError, buttonSelector, inactiveButton, popupErrorActive}) => {
//   const formList = document.querySelectorAll(form);

//   formList.forEach((form) => {
//     setEventListener(form, inputSelector, error, inputTypeError, buttonSelector, inactiveButton, popupErrorActive);
//   })
// }

// export {enableValidationForm, toggleButtonState, checkInputValidity};

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