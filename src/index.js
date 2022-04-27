import './pages/index.css';
import {enableValidationForm} from './components/validate.js';
import {enableProfilePopup, changeProfile} from './components/popupProfile.js';
import {cardsArr} from './components/cards-arr.js';
import {appendNewCard} from './components/append-new-card.js';
import {setParamCard} from './components/set-param-card.js';
import {openPopupAddCard, handleCardFormSubmit} from './components/popup-add-card.js';
import {clickLayout} from './components/click-layout.js';
import {clickPopupCloseButton} from './components/click-popup-close-button.js';
import {setParamsProfilePopup} from './components/set-params-profile-popup.js'
import {setParamsPopupaddCards} from './components/set-params-popupadd-card'
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
const popupProfile = document.querySelector('.profile-popup');

profileUpdateButton.addEventListener('click', () => {
enableProfilePopup(setParamsProfilePopup(popupProfile))
})

popupProfile.addEventListener('submit', (event) => {
  event.preventDefault();
  changeProfile(setParamsProfilePopup(popupProfile));
 });

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
const popupAddCardInputs = popupAddCard.querySelectorAll('.popup__input');

popupAddCard.addEventListener('submit',(event) => {
  event.preventDefault();
  
  const button = event.currentTarget.querySelector('.popup__submit');

  handleCardFormSubmit(setParamsPopupaddCards(popupAddCard, button));
});

buttonAddForm.addEventListener('click',() => openPopupAddCard(popupAddCard, popupAddCardInputs));
