import {checkInputValidity} from './validate.js'
 const cleaneInputs = function (inputs) {
  inputs.forEach(item => {
    item.value = '';
  });
}

const controlInputsAfterclickProfile = (inputs, popup, selectorErrorInput, checkInputValidity) => {
  inputs.forEach(input => {
    const errorSection = popup.querySelector("." + input.id + "-error");
    checkInputValidity(input, errorSection)
    input.classList.remove(selectorErrorInput)
  })
}

const controlInputAvatarPopup = (inputs, popup, selectorErrorInput) => {
  inputs.forEach(input => {
    const errorSection = popup.querySelector("." + input.id + "-error");
    errorSection.classList.remove('.popup__input_type_error_active');
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

const creatElement = (children, parentTag, parentSelector) => {
  const elementDom = document.createElement(parentTag);
  elementDom.className = parentSelector;
  elementDom.append(children);
  return elementDom;
}

const cloneCardTemplate = (card) => card.cloneNode(true); // - удалить. больше не нужен

const searchElementOfCurrentTarget = (popupAddCard, selector) => popupAddCard.querySelector(selector);

const getForm = (selector) => document.querySelector(selector).querySelector('.popup__form');

const closePopup = function (popup) {
  popup.classList.remove('popup_active');

  document.removeEventListener('keydown', pressEscape)
}

const pressEscape = (event) => {
  if (event.key === 'Escape') {
    const popup = document.querySelector('.popup_active');

    // popup.classList.remove('popup_active');
    closePopup(popup);
  }
}

export {
        cleaneInputs,
        controlInputsAfterclickProfile,
        controlInputsAfterclickAddCard,
        cloneCardTemplate, // - удалить. больше не нужен
        searchElementOfCurrentTarget,
        controlInputAvatarPopup,
        creatElement,
        getForm,
        closePopup
      }
