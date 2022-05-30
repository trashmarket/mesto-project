import './pages/index.css';
import FormValidator from './components/validate.js';
import { enableProfilePopup, profileAvatar} from './components/popupProfile.js';
import { openPopupAddCard, handleCardFormSubmit } from './components/popup-add-card.js';

import { setParamsProfilePopup } from './components/set-params-profile-popup.js';
import { setParamsPopupaddCards } from './components/set-params-popupadd-card';
import { setValidateForm } from './components/set-params-validate-form';
import { cloneCardTemplate, searchElementOfCurrentTarget, getForm } from './components/utils.js'

import Api from './components/api.js';

import { enablePopupAatar, chengeAvatar } from './components/popup-avatar.js';
import Section from './components/section';
import { renderCards } from './components/section.js';
import PopupWithForm from './components/PopupWithForm';
import UserInfo from './components/UserInfo';

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
const buttonProfile = popupProfile.querySelector('.popup__submit');
const profileTitle = document.querySelector('.profile__title');
const profileSubTitle = document.querySelector('.profile__sub-title');
const api = new Api();



const profileFormValid = new FormValidator(setValidateForm(), getForm('.profile-popup'));

profileFormValid.enableValidationForm();

const cardFormValid = new FormValidator(setValidateForm(), getForm('.popup_type_add-card'));

cardFormValid.enableValidationForm();

const avatarFormValid = new FormValidator(setValidateForm(), getForm('.popup_type_add-avatar'));

avatarFormValid.enableValidationForm();



const popupAvatarClass = new PopupWithForm(
  '.popup_type_add-avatar',
  (inputs) => {chengeAvatar(api, profileAvatar, inputs[0]); popupAvatarClass.close()}
  );

profileAvatar.addEventListener('click', () => {
  enablePopupAatar(setParamsProfilePopup());
  popupAvatarClass.open();
});


popupAvatarClass.setEventListeners();


// const popupProfileClass = new PopupWithForm(
//   '.profile-popup',
//   (inputs) => {
//     buttonProfile.textContent = 'Сохранение...';
//     const userInfo = new UserInfo({name:inputs[0],info:inputs[1]});
//     userInfo.setUserInfo(api.editingProfile.bind(api))
//     .then(res => {
//       profileTitle.textContent = res.name;
//       profileSubTitle.textContent = res.about;
//     }).catch(api.showError).finally(() => buttonProfile.textContent = 'Сохранить')
//      popupProfileClass.close()}
//   );

  const popupProfileClass = new PopupWithForm(
    '.profile-popup',
    (inputs) => {
      buttonProfile.textContent = 'Сохранение...';
      api.editingProfile(inputs[0],inputs[1])
      .then(res => {
        profileTitle.textContent = res.name;
        profileSubTitle.textContent = res.about;
      })
      popupProfileClass.close()
       }
    );



profileUpdateButton.addEventListener('click', () => {
  enableProfilePopup(
    setParamsProfilePopup(popupProfile),
    profileFormValid.checkInputValidity.bind(profileFormValid)
  )
  popupProfileClass.open();
})

popupProfileClass.setEventListeners();






// const userInfo = new UserInfo({});




// userInfo.getUserInfo(api.getUser.bind(api)).then(myId => {
//   api.getCards().then((res => {
//     const section = new Section({ data: res, id: myId, renderData: renderCards, }, photoCardsList)
//     section.rendererCards();
//   }))
// });



let cardsList;
let userInfo;

const initCards = (cards, userData) => {
  cardsList = new Section({ data: cards, id: userData._id, renderData: renderCards, }, photoCardsList);
  cardsList.rendererCards();
  return cardsList;
};


const initUserInfo = (userData) => {
  userInfo = new UserInfo({name:userData.name, about:userData.about, userId:userData._id, userAvatar: userData.avatar});
  return userInfo;
};


api.getUser().then((userData) => {
  api.getCards().then((res) => {
    cardsList = initCards(res, userData);
    userInfo = initUserInfo(userData)
  })
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





