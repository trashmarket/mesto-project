import './pages/index.css';
import FormValidator from './components/FormValidator';
import {setParams} from './components/setParams'

import { getForm} from './components/utils.js'

import Api from './components/Api.js';
import Section from './components/Section.js';
import PopupWithForm from './components/PopupWithForm';
import UserInfo from './components/UserInfo';
import Card from "./components/Card.js"
import PopupWithImage from './components/PopupWithImage.js'

const profileUpdateButton = document.querySelector('.profile__update-profile');
const popupProfile = document.querySelector('.profile-popup');

//card
const photoCardsList = document.querySelector('.photo-cards__list');

// new form
const popupAddCard = document.querySelector('.popup_type_add-card');
const buttonAddForm = document.querySelector('.profile__button');

const popupAddSubmit = popupAddCard.querySelector('.popup__submit');
// avatar
const buttonProfile = popupProfile.querySelector('.popup__submit');
const profileTitle = document.querySelector('.profile__title');
const profileSubTitle = document.querySelector('.profile__sub-title');
const profileAvatar = document.querySelector('.profile__avatar');

const api = new Api({
  baseUrl: 'https://nomoreparties.co/v1/plus-cohort-9',
  headers: {
            authorization: '269d00fb-9633-4d7c-a362-c3582f6daca7',
            'Content-Type': 'application/json'
          }
});



const profileFormValid = new FormValidator(setParams.setValidateForm(), getForm('.profile-popup'));

profileFormValid.enableValidationForm();

const cardFormValid = new FormValidator(setParams.setValidateForm(), getForm('.popup_type_add-card'));

cardFormValid.enableValidationForm();

const avatarFormValid = new FormValidator(setParams.setValidateForm(), getForm('.popup_type_add-avatar'));




avatarFormValid.enableValidationForm();


const popupAvatar = document.querySelector('.popup_type_add-avatar');
const popupLinkAvatar = popupAvatar.querySelector('.popup__link-new-avatar');
const buttonAvatar = popupAvatar.querySelector('.popup__submit')


const popupAvatarClass = new PopupWithForm(
  '.popup_type_add-avatar',
  (inputs) => {
    avatarFormValid.toggleButtonState();
    buttonAvatar.textContent = 'Сохранение...'
    api.reloadAvatar(inputs.descriptions).then(res => {

      restoreInputs(res.name, res.about, res.avatar, res._id);
      popupAvatarClass.close()
    }).catch(res => {
      api.showError(res);
      profileAvatar.style.backgroundImage = '';
      profileAvatar.style.color = 'red';
      buttonAvatar.style.backgroundColor = 'red';
      popupAvatarClass.open()
      return res;
    }).then((res) =>{
      if (res) {
        buttonAvatar.textContent = res;
        return;
      }

      buttonAvatar.textContent = 'Сохранить'
    }
    );;
    popupLinkAvatar.value = '';
  }
  );

profileAvatar.addEventListener('click', () => {

  avatarFormValid.toggleButtonState();
  popupAvatarClass.open();
});



popupAvatarClass.setEventListeners();

const profilePopupTitle = document.querySelector('.profile-popup-title');
const profilePopupSubtitle = document.querySelector('.profile-popup-subtitle');


const restoreInputs = (name, about, avatar, id) => {
  profilePopupTitle.value = userInfo.getUserInfo(name, about, avatar, id).name;
  profilePopupSubtitle.value = userInfo.getUserInfo().about;
  profileAvatar.style.backgroundImage = `url(${userInfo.getUserInfo().avatar})`;
  profileAvatar.id = userInfo.getUserInfo().id
}




  const popupProfileClass = new PopupWithForm(
    '.profile-popup',
    (inputs) => {
      buttonProfile.textContent = 'Сохранение...';
      api.editingProfile(inputs.name,inputs.descriptions)
      .then(res => {
        profileTitle.textContent = res.name;
        profileSubTitle.textContent = res.about;
        restoreInputs(res.name, res.about, res.avatar, res._id);



        popupProfileClass.close();
      }).catch(res => {
        api.showError(res);
        buttonProfile.style.backgroundColor = 'red'
        popupProfileClass.open();
        return res;
      }).then((res) => {
        if (res) {
          buttonProfile.textContent = res;
          return;
        }
        buttonProfile.textContent = 'Сохранить';
      })
      }
    );

profileUpdateButton.addEventListener('click', () => {
  restoreInputs();

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
  }).catch(api.showError)
}).catch(api.showError);




const popupAddCardClass = new PopupWithForm(
  '.popup_type_add-card',
  (inputs) => {
    {
      popupAddSubmit.textContent = 'Сохранение...';
      api.addNewCard(inputs.name, inputs.descriptions)
        .then(item => {
          cardsList.addItem(item);
          popupAddCardClass.close()
        }
        ).catch(res => {
          api.showError(res);
          popupAddSubmit.textContent = res;
          popupAddSubmit.style.backgroundColor = 'red';
          popupAddCardClass.open()
          return res
        }).then((res) => {
          if (res) {
            popupAddSubmit.textContent = res ;
            return;
          }
          popupAddSubmit.textContent = 'Сохранить'
        })
    };

  }
  );


buttonAddForm.addEventListener('click', () => {

  cardFormValid.toggleButtonState();
  popupAddCardClass.open();

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


