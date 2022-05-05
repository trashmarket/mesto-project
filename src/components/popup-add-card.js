import {openPopup, closePopup} from './modal.js';
import {cleaneInputs, controlInputsAfterclickAddCard} from './utils.js';
import {toggleButtonState} from './validate.js';
const popupAddCardInputs = document.querySelectorAll('.popup__input');

const openPopupAddCard = (popupAddCard, popupAddCardInputs) => {
  openPopup(popupAddCard)
  cleaneInputs(popupAddCardInputs);
  controlInputsAfterclickAddCard(popupAddCardInputs, popupAddCard);
}

const handleCardFormSubmit = ({
  popupCard,
  popupButton,
  selectorActive,
}, carde) => {

  closePopup(popupCard);
  cleaneInputs(popupAddCardInputs);
  toggleButtonState([...popupAddCardInputs], popupButton, selectorActive);
}

export {handleCardFormSubmit, openPopupAddCard};