import {openPopup, closePopup} from './modal.js';
import {appendNewCard} from './append-new-card.js'
import {setParamCard} from './set-param-card.js'
import {cleaneInputs, controlInputsAfterclick} from './utils.js';
import {toggleButtonState} from './validate.js';

const openPopupAddCard = (popupAddCard, popupAddCardInputs) => {
  openPopup(popupAddCard)
  cleaneInputs(popupAddCardInputs);
}

const handleCardFormSubmit = ({popupCard, popupButton, popupAddCardInputs, popupAddCardInputText, popupAddCardInputLink, selectorActive}) => {
  const title = popupAddCardInputText.value;
  const link = popupAddCardInputLink.value;
  if (title === '' || link === '') return; 
  
  appendNewCard(setParamCard(null, link, title));
  closePopup(popupCard);
  cleaneInputs(popupAddCardInputs);
  toggleButtonState([...popupAddCardInputs], popupButton, selectorActive)
}

export {handleCardFormSubmit, openPopupAddCard};