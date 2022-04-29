import {checkInputValidity} from './validate'
 const cleaneInputs = function (inputs) {
  inputs.forEach(item => {
    item.value = '';
  });
}

const controlInputsAfterclickProfile = (inputs, popup, selectorErrorInput) => {
  inputs.forEach(input => {
    const errorSection = popup.querySelector("." + input.id + "-error");
    checkInputValidity(input, errorSection, 'popup__input_type_error_active')
    input.classList.remove(selectorErrorInput)
  })
}

const controlInputsAfterclickAddCard = (inputs, popup) => {
  inputs.forEach(input => {
    const errorSection = popup.querySelector("." + input.id + "-error");
    input.classList.remove('popup__input_type_error');
    errorSection.classList.remove('popup__input_type_error_active');
  })
}

const cloneCardTemplate = (card) => card.cloneNode(true);

const searchElementOfCurrentTarget = (event, selector) => event.currentTarget.querySelector(selector);

export {cleaneInputs, controlInputsAfterclickProfile, controlInputsAfterclickAddCard, cloneCardTemplate, searchElementOfCurrentTarget}