import './pages/index.css';
import FormValidator from './components/FormValidator.js';
import {
  enableProfilePopup,
  profileAvatar,
  openPopupAddCard,
  setValidateForm,
  enablePopupAatar,
  popupAvatar
} from './components/params.js';
import { getForm } from './components/utils.js'
import Api from './components/Api.js';
import Section from './components/Section';
import PopupWithForm from './components/PopupWithForm';
import UserInfo from './components/UserInfo';
import Card from "./components/Card.js"
import PopupWithImage from './components/PopupWithImage.js'

const profileUpdateButton = document.querySelector('.profile__update-profile');
const popupProfile = document.querySelector('.profile-popup');

const photoCardsList = document.querySelector('.photo-cards__list');

const popupAddCard = document.querySelector('.popup_type_add-card');
const buttonAddForm = document.querySelector('.profile__button');
const popupAddCardInputs = popupAddCard.querySelectorAll('.popup__input');
const popupAddSubmit = popupAddCard.querySelector('.popup__submit');

const buttonProfile = popupProfile.querySelector('.popup__submit');

const buttonAvatar = popupAvatar.querySelector('.popup__submit')

let cardsList;
let userInfo;

const api = new Api(
  {
    baseUrl: 'https://nomoreparties.co/v1/plus-cohort-9',
    headers: {
              authorization: '269d00fb-9633-4d7c-a362-c3582f6daca7',
              'Content-Type': 'application/json'
            }
  }
);

const popup = new PopupWithImage ('.popup-image');

const profileFormValid = new FormValidator(setValidateForm(), getForm('.profile-popup'));

profileFormValid.enableValidationForm();

const cardFormValid = new FormValidator(setValidateForm(), getForm('.popup_type_add-card'));

cardFormValid.enableValidationForm();

const avatarFormValid = new FormValidator(setValidateForm(), getForm('.popup_type_add-avatar'));

avatarFormValid.enableValidationForm();





const popupAvatarClass = new PopupWithForm(
  '.popup_type_add-avatar',
  (inputs) => {
    buttonAvatar.textContent = 'Сохранение...'
    api.reloadAvatar(inputs.descriptions).then(res => {
      profileAvatar.style.backgroundImage = `url(${res.avatar})`;
    }).catch(api.showError).finally(() => buttonAvatar.textContent = 'Сохранить');;
    popupAvatarClass.close()}
  );

profileAvatar.addEventListener('click', () => {
  enablePopupAatar({selectorErrorInput: 'popup__input_type_error'});
  popupAvatarClass.open();
});


popupAvatarClass.setEventListeners();

const popupProfileClass = new PopupWithForm(
  '.profile-popup',
  (inputs) => {
    buttonProfile.textContent = 'Сохранение...';
    api.editingProfile(inputs.name, inputs.descriptions)
    .then(res => {
      userInfo.setUserInfo({name:res.name, about:res.about, userAvatar:res.avatar, id:res._id});
      popupProfileClass.close()
    })
    .catch(api.showError)
    }
  );


profileUpdateButton.addEventListener('click', () => {
  enableProfilePopup(userInfo)
  popupProfileClass.open();
})

popupProfileClass.setEventListeners();


const initCards = (cards, userData) => {
  cardsList = new Section({ data: cards, id: userData._id, renderData: renderCards, }, photoCardsList);
  cardsList.rendererCards();
  return cardsList;
};

const initUserInfo = (userData) => {
  userInfo = new UserInfo({name:userData.name, about:userData.about, userId:userData._id, userAvatar: userData.avatar});
  userInfo.setUserInfo({name:userData.name, about:userData.about, userAvatar:userData.avatar, id:userData._id})
  return userInfo;
};


Promise.all([api.getUser(), api.getCards()])
  .then(([userData, cards]) => {
    cardsList = initCards(cards, userData);
    userInfo = initUserInfo(userData);
  })
  .catch(api.showError)


const popupAddCardClass = new PopupWithForm(
  '.popup_type_add-card',
  (inputs) => {
    {
      popupAddSubmit.textContent = 'Сохранение...';
      api.addNewCard(inputs.name, inputs.descriptions)
        .then(item => {
          cardsList.addItem(item);
        }
        )
        .catch(api.showError)
        .finally(() => {
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


popup.setEventListeners();

function openPopupImage(srcImage, textImage) {
  popup.open(srcImage, textImage);
}


export function renderCards(item, myId) {
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


