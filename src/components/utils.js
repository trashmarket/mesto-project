
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

const getForm = (selector) => document.querySelector(selector).querySelector('.popup__form');

const closePopup = function (popup) {
  popup.classList.remove('popup_active');

  document.removeEventListener('keydown', pressEscape)
}

const pressEscape = (event) => {
  if (event.key === 'Escape') {
    const popup = document.querySelector('.popup_active');
    closePopup(popup);
  }
}


export {
  controlInputsAfterclickAddCard,
  controlInputAvatarPopup,
  getForm,
  closePopup
}
