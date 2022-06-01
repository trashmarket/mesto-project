import './pages/index.css';
import FormValidator from './components/FormValidator';

import {setParams} from './components/setParams'
// import { setValidateForm } from './components/set-params-validate-form';
import { getForm, controlInputAvatarPopup, controlInputsAfterclickProfile} from './components/utils.js'

import Api from './components/api.js';
import {controlInputsAfterclickAddCard} from './components/utils';
import Section from './components/section';
import PopupWithForm from './components/PopupWithForm';
import UserInfo from './components/UserInfo';
import Card from "./components/card.js"
import PopupWithImage from './components/PopupWithImage.js'

const profileUpdateButton = document.querySelector('.profile__update-profile');
const popupProfile = document.querySelector('.profile-popup');

//card
const photoCardsList = document.querySelector('.photo-cards__list');

// new form
const popupAddCard = document.querySelector('.popup_type_add-card');
const buttonAddForm = document.querySelector('.profile__button');
const popupAddCardInputs = popupAddCard.querySelectorAll('.popup__input');
const popupAddSubmit = popupAddCard.querySelector('.popup__submit');
// avatar
const buttonProfile = popupProfile.querySelector('.popup__submit');
const profileTitle = document.querySelector('.profile__title');
const profileSubTitle = document.querySelector('.profile__sub-title');
const profileAvatar = document.querySelector('.profile__avatar');
const api = new Api();



const profileFormValid = new FormValidator(setParams.setValidateForm(), getForm('.profile-popup'));

profileFormValid.enableValidationForm();

const cardFormValid = new FormValidator(setParams.setValidateForm(), getForm('.popup_type_add-card'));

cardFormValid.enableValidationForm();

const avatarFormValid = new FormValidator(setParams.setValidateForm(), getForm('.popup_type_add-avatar'));

avatarFormValid.enableValidationForm();


const popupAvatar = document.querySelector('.popup_type_add-avatar');
const popupLinkAvatar = popupAvatar.querySelector('.popup__link-new-avatar');
const inputs = [...popupAvatar.querySelectorAll('.popup__input')];
const buttonAvatar = popupAvatar.querySelector('.popup__submit')
const enablePopupAatar = ({ selectorErrorInput }) => {
  avatarFormValid.toggleButtonState(inputs, buttonAvatar);
  controlInputAvatarPopup(inputs, popupAvatar, selectorErrorInput);
}

const popupAvatarClass = new PopupWithForm(
  '.popup_type_add-avatar',
  (inputs) => {
    enablePopupAatar(setParams.setParamsProfilePopup());
    buttonAvatar.textContent = 'Сохранение...'
    api.reloadAvatar(inputs.descriptions).then(res => {
      profileAvatar.style.backgroundImage = `url(${res.avatar})`;
    }).catch(api.showError).finally(() => buttonAvatar.textContent = 'Сохранить');;
    popupAvatarClass.close()
    popupLinkAvatar.value = '';
  }
  );

profileAvatar.addEventListener('click', () => {
  popupAvatarClass.open();
});


popupAvatarClass.setEventListeners();

const profilePopupTitle = document.querySelector('.profile-popup-title');
const profilePopupSubtitle = document.querySelector('.profile-popup-subtitle');
const profilePopupInputs = [...popupProfile.querySelectorAll('.popup__input')]


const restoreInputs = () => {
  profilePopupTitle.value = profileTitle.textContent.trim();
  profilePopupSubtitle.value = profileSubTitle.textContent.trim();
}

const enableProfilePopup = ({ selectorErrorInput}, checkInputValidity) => {
  // restoreInputs();
  profileFormValid.toggleButtonState(profilePopupInputs, buttonProfile);
  controlInputsAfterclickProfile(profilePopupInputs, popupProfile, selectorErrorInput, checkInputValidity);
}

  const popupProfileClass = new PopupWithForm(
    '.profile-popup',
    (inputs) => {
      buttonProfile.textContent = 'Сохранение...';
      api.editingProfile(inputs.name,inputs.descriptions)
      .then(res => {
        profileTitle.textContent = res.name;
        profileSubTitle.textContent = res.about;
      })
      popupProfileClass.close()
       }
    );

profileUpdateButton.addEventListener('click', () => {
  restoreInputs();
  enableProfilePopup(
    setParams.setParamsProfilePopup(popupProfile),
    profileFormValid.checkInputValidity.bind(profileFormValid)
  )
  popupProfileClass.open();
})

popupProfileClass.setEventListeners();





let cardsList;
let userInfo;

const initCards = (cards, userData) => {
  cardsList = new Section({ data: cards, id: userData._id, renderData: renderCards, }, photoCardsList);
  cardsList.rendererCards();
  return cardsList;
};


const initUserInfo = (userData) => {
  userInfo = new UserInfo({name:userData.name, about:userData.about, userId:userData._id, userAvatar: userData.avatar});
  userInfo.setUserInfo({name:userData.name, about:userData.about, userAvatar:userData.avatar})
  return userInfo;
};


api.getUser().then((userData) => {
  api.getCards().then((res) => {
    cardsList = initCards(res, userData);
    userInfo = initUserInfo(userData);
  })
});




const popupAddCardClass = new PopupWithForm(
  '.popup_type_add-card',
  (inputs) => {
    {
      popupAddSubmit.textContent = 'Сохранение...';
      api.addNewCard(inputs.name, inputs.descriptions)
        .then(item => {
          cardsList.addItem(item);
        }
        ).finally(() => {
          popupAddSubmit.textContent = 'Сохранить'
        })
    };
    popupAddCardClass.close()
  }
  );


buttonAddForm.addEventListener('click', () => {
  controlInputsAfterclickAddCard(popupAddCardInputs, popupAddCard);
  popupAddCardClass.open()
});


popupAddCardClass.setEventListeners();



const popup = new PopupWithImage ('.popup-image');
popup.setEventListeners();

function openPopupImage(srcImage, textImage) {
  popup.open(srcImage, textImage);
}


 function renderCards(item, myId) {
  const cardNew = new Card(
    {
      link: item.link,
      title: item.name,
      ownerId: item.owner._id,
      likes: item.likes,
      idCard: item._id,
      selectorActiveLike: 'photo-cards__button_active',
      myId: myId
    },
    '#card',
    api,
    openPopupImage
  )
  return cardNew.create()
}


