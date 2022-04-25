import {openPopup, closePopup} from './modal.js';
import {appendNewCard} from './append-new-card.js'
import {setParamCard} from './set-param-card.js'
import {cleaneInputs} from './utils.js'

export const createNewCard = (popupAddCard, buttonAddForm) => {
  const buttonClosePopupAddCard = popupAddCard.querySelector('.popup__close');
  const popupAddCardInputs = popupAddCard.querySelectorAll('.popup__input');
  const popupAddCardInputText = popupAddCard.querySelector('.popup__name-new-card');
  const popupAddCardInputLink = popupAddCard.querySelector('.popup__link-new-card');

  popupAddCard.addEventListener('submit',(event) => {
    event.preventDefault();
    handleCardFormSubmit(popupAddCardInputText, popupAddCardInputLink, popupAddCard, popupAddCardInputs)
  });

  buttonAddForm.addEventListener('click',() => openPopupAddCard(popupAddCard, popupAddCardInputs));

  buttonClosePopupAddCard.addEventListener('click', function(event) {
  closePopup(popupAddCard);
})
}

const openPopupAddCard = (popupAddCard, popupAddCardInputs) => {
  openPopup(popupAddCard)
  cleaneInputs(popupAddCardInputs);
}

const handleCardFormSubmit = (popupAddCardInputText, popupAddCardInputLink, popupAddCard, popupAddCardInputs) => {
  const title = popupAddCardInputText.value;
  const link = popupAddCardInputLink.value;
  if (title === '' || link === '') return; 
  // link, title, null, cardTemplate, photeCardsList, subTitleImage, popupContentImage, popupImage, popupImageButton
  appendNewCard(setParamCard(null, link, title));
  closePopup(popupAddCard);
  cleaneInputs(popupAddCardInputs);
}