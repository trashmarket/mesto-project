
const setEventListener = (form, inputSelector, error, inputTypeError, buttonSelector, inactiveButton, popupErrorActive) => {
  const inputs = [...form.querySelectorAll(inputSelector)];
  const button = form.querySelector(buttonSelector);
  toggleButtonState(inputs, button, inactiveButton);
  inputs.forEach(input => input.addEventListener('input', () => {
    toggleButtonState(inputs, button, inactiveButton);
    const errorSection = form.querySelector("." + input.id + error);
    checkInputValidity(input, errorSection, popupErrorActive, inputTypeError);
  }))
}

const showErrorMessage = (errorSection, errorText, input, popupErrorActive, inputTypeError) => {
  errorSection.classList.add(popupErrorActive);
  errorSection.textContent = errorText;
  input.classList.add(inputTypeError);
}

const hideErrorMessage = (errorSection, input, popupErrorActive, inputTypeError) => {
  errorSection.classList.remove(popupErrorActive);
  errorSection.textContent = '';
  input.classList.remove(inputTypeError);
}
 
const checkInputValidity = (input, errorSection, popupErrorActive, inputTypeError) => {
  if (!input.validity.valid) {
    showErrorMessage(errorSection, input.validationMessage, input, popupErrorActive, inputTypeError);
  } else {
    hideErrorMessage(errorSection, input, popupErrorActive, inputTypeError);
  }
}

const hasInvalidInput = (inputList) => {
  return inputList.some(input => !input.validity.valid)
}

const toggleButtonState = (inputList, button, inactiveButton) => {
  if (hasInvalidInput(inputList)) {
    button.classList.add(inactiveButton);
    button.disabled = true;
  } else {
    button.classList.remove(inactiveButton);
    button.disabled = false;
  }
}

 const enableValidationForm = ({form, error, inputSelector, inputTypeError, buttonSelector, inactiveButton, popupErrorActive}) => {
  const formList = document.querySelectorAll(form);

  formList.forEach((form) => {
    setEventListener(form, inputSelector, error, inputTypeError, buttonSelector, inactiveButton, popupErrorActive);
  })
}

export {enableValidationForm, toggleButtonState, checkInputValidity};