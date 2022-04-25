const setEventListener = (form, inputSelector, error, inputTypeError, buttonSelector, inactiveButton) => {
  const inputs = [...form.querySelectorAll(inputSelector)];
  const button = form.querySelector(buttonSelector);

  toggleButtonState(inputs, button, inactiveButton);
  inputs.forEach(input => input.addEventListener('input', () => {
    toggleButtonState(inputs, button, inactiveButton);
    const errorSection = form.querySelector("." + input.id + error);
    checkInputValidity(form, input, errorSection, inputTypeError);
  }))
}

const showErrorMessage = (errorSection, errorText, input) => {
  errorSection.classList.add('popup__input_type_error_active');
  errorSection.textContent = errorText;
  input.classList.add('popup__input_type_error');
}

const hideErrorMessage = (errorSection, input) => {
  errorSection.classList.remove('popup__input_type_error_active');
  errorSection.textContent = '';
  input.classList.remove('popup__input_type_error');
}
 
const checkInputValidity = (form, input, errorSection, inputTypeError) => {
  if (!input.validity.valid) {
    showErrorMessage(errorSection, input.validationMessage, input);
  } else {
    hideErrorMessage(errorSection, input);
  }
}

const hasInvalidInput = (inputList) => {
  console.log(inputList);
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

export const enableValidation = ({form, error, inputSelector, inputTypeError, buttonSelector, inactiveButton}) => {
  const formList = document.querySelectorAll(form);

  formList.forEach((form) => {
    setEventListener(form, inputSelector, error, inputTypeError, buttonSelector, inactiveButton);
  })
}