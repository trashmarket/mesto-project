import {openPopup, closePopup} from './modal.js';
import {createCard} from './create-card.js'
import {setParamCard} from './set-param-card.js'
import {cleaneInputs, controlInputsAfterclickAddCard} from './utils.js';
import {toggleButtonState} from './validate.js';

const openPopupAddCard = (popupAddCard, popupAddCardInputs) => {
  openPopup(popupAddCard)
  cleaneInputs(popupAddCardInputs);
  controlInputsAfterclickAddCard(popupAddCardInputs, popupAddCard);
}

const handleCardFormSubmit = ({popupCard, popupButton, popupAddCardInputs, popupAddCardInputText, popupAddCardInputLink, selectorActive}) => {
  const title = popupAddCardInputText.value;
  const link = popupAddCardInputLink.value;
  if (title === '' || link === '') return; 
  
  closePopup(popupCard);
  cleaneInputs(popupAddCardInputs);
  toggleButtonState([...popupAddCardInputs], popupButton, selectorActive)
  return createCard(setParamCard(link, title));
}

export {handleCardFormSubmit, openPopupAddCard};