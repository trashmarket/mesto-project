import './pages/index.css';
import {enableValidationForm} from './components/validate.js';
import {closePopup} from './components/modal.js';
import {enableProfilePopup} from './components/popupProfile.js';
import {cardsArr} from './components/cards-arr.js';
import {appendNewCard} from './components/append-new-card.js';
import {setParamCard} from './components/set-param-card.js';
import {createNewCard} from './components/popup-add-card.js';
import {clickLayout} from './components/click-layout.js';
import {clickPopupCloseButton} from './components/click-popup-close-button.js';
const popups = document.querySelectorAll('.popup');

enableValidationForm({
  form: '.popup__form',
  error: '-error',
  inputSelector: '.popup__input',
  inputTypeError: '.popup__input_type_error',
  buttonSelector: '.popup__submit',
  inactiveButton: 'popup__submit_inactive',
  popupErrorActive: 'popup__input_type_error_active'
})

const profileUpdateButton = document.querySelector('.profile__update-profile');
const popupsCloseButton = document.querySelectorAll('.popup__close');
const popupProfile = document.querySelector('.profile-popup');

profileUpdateButton.addEventListener('click', () => {
enableProfilePopup({
  popupProfile: popupProfile,
  profileTitle: document.querySelector('.profile__title'),
  profileSubTitle: document.querySelector('.profile__sub-title'),
  profilePopupTitle: popupProfile.querySelector('.profile-popup-title'),
  profilePopupSubtitle: popupProfile.querySelector('.profile-popup-subtitle')
})})

popups.forEach(popup => {
  popup.addEventListener('click', clickLayout);
  popup.querySelector('.popup__close').addEventListener('click', clickPopupCloseButton)
});

//card

cardsArr.forEach(item => {
  appendNewCard(setParamCard('arr', item.link, item.name));
})

// new form

const popupAddCard = document.querySelector('.popup_type_add-card');
const buttonAddForm = document.querySelector('.profile__button');

createNewCard(popupAddCard, buttonAddForm);
