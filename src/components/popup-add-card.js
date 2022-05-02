import {openPopup, closePopup} from './modal.js';
import {createCard} from './create-card.js'
import {setParamCard} from './set-param-card.js';
import {setParamsTemplateCards} from './set-prams-template-card.js'
import {cleaneInputs, controlInputsAfterclickAddCard} from './utils.js';
import {toggleButtonState} from './validate.js';
import {addNewCard, showError} from './api.js'
const popupAddCardInputs = document.querySelectorAll('.popup__input');
const popupAddCardInputText = document.querySelector('.popup__name-new-card');
const popupAddCardInputLink = document.querySelector('.popup__link-new-card');

const openPopupAddCard = (popupAddCard, popupAddCardInputs) => {
  openPopup(popupAddCard)
  cleaneInputs(popupAddCardInputs);
  controlInputsAfterclickAddCard(popupAddCardInputs, popupAddCard);
}

const handleCardFormSubmit = ({
  popupCard,
  popupButton,
  selectorActive,
  photoCardsList
}, carde) => {
  const title = popupAddCardInputText.value;
  const link = popupAddCardInputLink.value;
  if (title === '' || link === '') return; 

  closePopup(popupCard);
  cleaneInputs(popupAddCardInputs);
  toggleButtonState([...popupAddCardInputs], popupButton, selectorActive)
  addNewCard(title, link).then(res => {
    photoCardsList.prepend(createCard({link: res.link, title: res.name}, setParamsTemplateCards(carde)));
  }).catch(showError);
}

export {handleCardFormSubmit, openPopupAddCard};