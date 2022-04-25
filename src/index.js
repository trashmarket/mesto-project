import './pages/index.css';
import {enableValidationForm, pressEscape} from './components/validate.js';
import {openPopup, closePopup} from './components/modal.js';
import {enableProfilePopup} from './components/popupProfile.js';
import {cleaneInputs} from './components/utils.js';
import {cardsArr} from './components/cards-arr.js';
import {appendNewCard} from './components/append-new-card.js';
import {setParamCard} from './components/set-param-card.js';

const popups = document.querySelectorAll('.popup');
const popupsContainers = document.querySelectorAll('.popup__container');

enableValidationForm({
  form: '.popup__form',
  error: '-error',
  inputSelector: '.popup__input',
  inputTypeError: '.popup__input_type_error',
  buttonSelector: '.popup__submit',
  inactiveButton: 'popup__submit_inactive'
})

enableProfilePopup({
  popupProfile: document.querySelector('.profile-popup'),
  profileUpdateButton: document.querySelector('.profile__update-profile'),
  profileTitle: document.querySelector('.profile__title'),
  profileSubTitle: document.querySelector('.profile__sub-title')
})

document.addEventListener('keydown', (event) => {
  pressEscape(event.key);
})

popupsContainers.forEach(container => container.addEventListener('click', (event) => event.stopPropagation()));

popups.forEach(popup => popup.addEventListener('click', () => closePopup(popup)));

//card

cardsArr.forEach(item => {
  appendNewCard(setParamCard('arr', item.link, item.name));
})

// new form

const popupAddCard = document.querySelector('.popup_type_add-card');
const buttonAddForm = document.querySelector('.profile__button');
const buttonClosePopupAddCard = popupAddCard.querySelector('.popup__close');
const popupAddCardInputs = popupAddCard.querySelectorAll('.popup__input');
const popupAddCardInputText = popupAddCard.querySelector('.popup__name-new-card');
const popupAddCardInputLink = popupAddCard.querySelector('.popup__link-new-card');

const openPopupAddCard = function (event) {
  openPopup(popupAddCard)
  cleaneInputs(popupAddCardInputs);
}

buttonAddForm.addEventListener('click', openPopupAddCard);

buttonClosePopupAddCard.addEventListener('click', function(event) {
  closePopup(popupAddCard);
})

const handleCardFormSubmit = function(event) {
  event.preventDefault();
  const title = popupAddCardInputText.value;
  const link = popupAddCardInputLink.value;
  if (title === '' || link === '') return; 
  // link, title, null, cardTemplate, photeCardsList, subTitleImage, popupContentImage, popupImage, popupImageButton
  appendNewCard(setParamCard(null, link, title));
  closePopup(popupAddCard);
  cleaneInputs(popupAddCardInputs);
}

popupAddCard.addEventListener('submit', handleCardFormSubmit);

// like && trash can
