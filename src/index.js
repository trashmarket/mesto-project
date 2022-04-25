import './pages/index.css';
import {enableValidationForm, pressEscape} from './components/validate.js';
import {closePopup} from './components/modal.js';
import {enableProfilePopup} from './components/popupProfile.js';
import {cardsArr} from './components/cards-arr.js';
import {appendNewCard} from './components/append-new-card.js';
import {setParamCard} from './components/set-param-card.js';
import {createNewCard} from './components/popup-add-card.js';

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

createNewCard(popupAddCard, buttonAddForm);
