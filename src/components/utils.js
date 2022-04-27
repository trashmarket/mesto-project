import {checkInputValidity} from './validate'
 const cleaneInputs = function (inputs) {
  inputs.forEach(item => {
    item.value = '';
  });
}

const controlInputsAfterclickProfile = (inputs, popup) => {
  inputs.forEach(input => {
    const errorSection = popup.querySelector("." + input.id + "-error");
    checkInputValidity(input, errorSection, 'popup__input_type_error_active')
  })
}

const controlInputsAfterclickAddCard = (inputs, popup) => {
  inputs.forEach(input => {
    const errorSection = popup.querySelector("." + input.id + "-error");
    input.classList.remove('popup__input_type_error');
    errorSection.classList.remove('popup__input_type_error_active');
  })
}

export {cleaneInputs, controlInputsAfterclickProfile, controlInputsAfterclickAddCard}