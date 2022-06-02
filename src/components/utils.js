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

const searchElementOfCurrentTarget = (popupAddCard, selector) => popupAddCard.querySelector(selector);

const getForm = (selector) => document.querySelector(selector).querySelector('.popup__form');

export {
        controlInputsAfterclickProfile,
        controlInputsAfterclickAddCard,
        searchElementOfCurrentTarget,
        controlInputAvatarPopup,
        creatElement,
        getForm,
      }
