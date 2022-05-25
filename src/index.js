import './pages/index.css';
import FormValidator from './components/validate.js';
import { enableProfilePopup, getUserId, profileAvatar, changeProfile } from './components/popupProfile.js';
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
import PopupWithForm from './components/PopupWithForm';

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

const popupAvatarClass = new PopupWithForm(
  '.popup_type_add-avatar',
  (inputs) => {chengeAvatar(api, profileAvatar, inputs[0]); popupAvatarClass.close()}
  );

profileAvatar.addEventListener('click', () => {
  enablePopupAatar(setParamsProfilePopup());
  popupAvatarClass.open();
});


popupAvatarClass.setEventListeners();


const popupProfileClass = new PopupWithForm(
  '.profile-popup',
  (inputs) => {changeProfile(api, inputs[0], inputs[1]); popupProfileClass.close()}
  );



profileUpdateButton.addEventListener('click', () => {
  enableProfilePopup(
    setParamsProfilePopup(popupProfile),
    profileFormValid.checkInputValidity.bind(profileFormValid)
  )
  popupProfileClass.open();

})

popupProfileClass.setEventListeners();



// popups.forEach(popup => {
//   popup.addEventListener('click', clickLayout);
//   popup.querySelector('.popup__close').addEventListener('click', (event) => {
//     clickPopupCloseButton(event);
//   })
// });



getUserId(api.getUser.bind(api)).then(myId => {
  api.getCards().then((res => {
    const section = new Section({ data: res, id: myId, renderData: renderCards, }, photoCardsList)
    section.rendererCards();
  }))
});



const popupAddCardClass = new PopupWithForm(
  '.popup_type_add-card',
  (inputs) => {
    {
      const title = inputs[0];
      const link = inputs[1];
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
    };
    popupAddCardClass.close()
  }
  );


buttonAddForm.addEventListener('click', () => {
  openPopupAddCard(popupAddCard, popupAddCardInputs);
  popupAddCardClass.open()
});


popupAddCardClass.setEventListeners();
