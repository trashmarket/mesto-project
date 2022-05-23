import './pages/index.css';
import FormValidator from './components/validate.js';
import { enableProfilePopup, changeProfile, getUserId, profileAvatar } from './components/popupProfile.js';
import { openPopupAddCard, handleCardFormSubmit } from './components/popup-add-card.js';
import { clickLayout } from './components/click-layout.js';
import { clickPopupCloseButton } from './components/click-popup-close-button.js';
import { setParamsProfilePopup } from './components/set-params-profile-popup.js';
import { setParamsPopupaddCards } from './components/set-params-popupadd-card';
import { setValidateForm } from './components/set-params-validate-form';
import { cloneCardTemplate, searchElementOfCurrentTarget, getForm } from './components/utils.js'
// import {getCards, showError, addNewCard} from './components/api.js';
import Api from './components/api.js';
// import {removeCard, listenHeartButton} from './components/create-card.js';
import { enablePopupAatar, popupAvatar, chengeAvatar } from './components/popup-avatar.js';
import Section from './components/section';
import { renderCards } from './components/section.js';

const popups = document.querySelectorAll('.popup');
const profileUpdateButton = document.querySelector('.profile__update-profile');
const popupProfile = document.querySelector('.profile-popup');
//card
const photoCardsList = document.querySelector('.photo-cards__list');
const cardTemplate = document.querySelector('#card').content;
// new form
const popupAddCard = document.querySelector('.popup_type_add-card');
const buttonAddForm = document.querySelector('.profile__button');
const popupAddCardInputs = popupAddCard.querySelectorAll('.popup__input');
const popupAddCardInputText = document.querySelector('.popup__name-new-card');
const popupAddCardInputLink = document.querySelector('.popup__link-new-card');
const popupAddSubmit = popupAddCard.querySelector('.popup__submit');
// avatar

const api = new Api();



const profileFormValid = new FormValidator(setValidateForm(), getForm('.profile-popup'));

profileFormValid.enableValidationForm();

const cardFormValid = new FormValidator(setValidateForm(), getForm('.popup_type_add-card'));

cardFormValid.enableValidationForm();

const avatarFormValid = new FormValidator(setValidateForm(), getForm('.popup_type_add-avatar'));

avatarFormValid.enableValidationForm();


// enableValidationForm(setValidateForm());

profileAvatar.addEventListener('click', () => {
  enablePopupAatar(setParamsProfilePopup());
})

popupAvatar.addEventListener('submit', (event) => {
  event.preventDefault();
  chengeAvatar(profileAvatar);
})

profileUpdateButton.addEventListener('click', () => {
  enableProfilePopup(
    setParamsProfilePopup(popupProfile),
    profileFormValid.checkInputValidity.bind(profileFormValid)
  )
})

popupProfile.addEventListener('submit', (event) => {
  event.preventDefault();
  changeProfile();
});

popups.forEach(popup => {
  popup.addEventListener('click', clickLayout);
  popup.querySelector('.popup__close').addEventListener('click', (event) => {
    clickPopupCloseButton(event);
  })
});





getUserId(api.getUser.bind(api)).then(myId => {
  api.getCards().then((res => {
    const section = new Section({ data: res, id: myId, renderData: renderCards, }, photoCardsList)
    section.rendererCards();
  }))
});


popupAddCard.addEventListener('submit', (event) => {
  event.preventDefault();
  const title = popupAddCardInputText.value;
  const link = popupAddCardInputLink.value;

  popupAddSubmit.textContent = 'Сохранение...';
  api.addNewCard(title, link)
    .then(item => {

      const section = new Section({ data: item, renderData: renderCards }, photoCardsList)
      section.addItem();

      handleCardFormSubmit(setParamsPopupaddCards(popupAddCard, searchElementOfCurrentTarget(popupAddCard, '.popup__submit'), photoCardsList), cloneCardTemplate(cardTemplate));
    }
    ).finally(() => {
      popupAddSubmit.textContent = 'Сохранить'
    })
});

buttonAddForm.addEventListener('click', () => openPopupAddCard(popupAddCard, popupAddCardInputs));
