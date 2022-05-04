import './pages/index.css';
import {enableValidationForm} from './components/validate.js';
import {enableProfilePopup, changeProfile, getUserId, profileAvatar} from './components/popupProfile.js'; 
import {createCard} from './components/create-card.js';
import {setParamCard} from './components/set-param-card.js';
import {openPopupAddCard, handleCardFormSubmit} from './components/popup-add-card.js';
import {clickLayout} from './components/click-layout.js';
import {clickPopupCloseButton} from './components/click-popup-close-button.js';
import {setParamsProfilePopup} from './components/set-params-profile-popup.js';
import {setParamsPopupaddCards} from './components/set-params-popupadd-card';
import {setValidateForm} from './components/set-params-validate-form';
import {setParamsTemplateCards} from './components/set-prams-template-card';
import {cloneCardTemplate, searchElementOfCurrentTarget} from './components/utils.js'
import {getCards, showError, addNewCard} from './components/api.js';
import {removeCard, listenHeartButton} from './components/create-card.js';
import {enablePopupAatar, popupAvatar, chengeAvatar} from './components/popup-avatar.js';
const popups = document.querySelectorAll('.popup');
const profileUpdateButton = document.querySelector('.profile__update-profile');
const popupProfile = document.querySelector('.profile-popup');
//card
const photoCardsList = document.querySelector('.photo-cards__list');
const cardTemplate = document.querySelector('#card').content
// new form
const popupAddCard = document.querySelector('.popup_type_add-card');
const buttonAddForm = document.querySelector('.profile__button');
const popupAddCardInputs = popupAddCard.querySelectorAll('.popup__input');
const popupAddCardInputText = document.querySelector('.popup__name-new-card');
const popupAddCardInputLink = document.querySelector('.popup__link-new-card');
const popupAddSubmit = popupAddCard.querySelector('.popup__submit')
// avatar

let myId = null;

getUserId().then(res => myId = res);

enableValidationForm(setValidateForm());

profileAvatar.addEventListener('click', () => {
  enablePopupAatar(setParamsProfilePopup());
})

popupAvatar.addEventListener('submit', (event) => {
  event.preventDefault();
  chengeAvatar(profileAvatar);
})

profileUpdateButton.addEventListener('click', () => {
enableProfilePopup(setParamsProfilePopup(popupProfile))
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

getCards().then((res => {
  res.forEach(item => {
    const template = cloneCardTemplate(cardTemplate);
    const trashButton = template.querySelector('.photo-cards__trash-button');
    const itemCard = template.querySelector('.photo-cards__item');
    const likeButton = template.querySelector('.photo-cards__button');
    const outputLikes = template.querySelector('.photo-cards__count');
    photoCardsList.append(
     createCard(setParamCard(
       item.link,
       item.name,
       item.owner._id,
       item.likes,
       item._id,
       myId
     ),
     setParamsTemplateCards(template))
     );
    trashButton.addEventListener('click', () => {
      removeCard(itemCard, item._id);
    });

    likeButton.addEventListener('click', () => {
      listenHeartButton(likeButton, item._id, 'photo-cards__button_active', outputLikes);
    });
  })
})).catch(showError);

popupAddCard.addEventListener('submit',(event) => {
  event.preventDefault();
  const title = popupAddCardInputText.value;
  const link = popupAddCardInputLink.value;
  handleCardFormSubmit(setParamsPopupaddCards(popupAddCard, searchElementOfCurrentTarget(event, '.popup__submit'), photoCardsList), cloneCardTemplate(cardTemplate));
  popupAddSubmit.textContent = 'Сохранение...'
  addNewCard(title, link)
  .then(item => {
    const template = cloneCardTemplate(cardTemplate);
    const trashButton = template.querySelector('.photo-cards__trash-button');
    const likeButton = template.querySelector('.photo-cards__button');
    const itemCard = template.querySelector('.photo-cards__item');
    const outputLikes = template.querySelector('.photo-cards__count');
    photoCardsList.prepend(
    createCard(setParamCard(
      item.link,
      item.name,
      item.owner._id,
      item.likes,
      item._id,
      myId
    ), setParamsTemplateCards(template)));

    trashButton.addEventListener('click', () => {
      removeCard(itemCard, item._id);
    });

    likeButton.addEventListener('click', () => {
      listenHeartButton(likeButton, item._id, 'photo-cards__button_active', outputLikes);
    });
  }).catch(showError).finally(() => popupAddSubmit.textContent = 'Сохраненить')
});

buttonAddForm.addEventListener('click',() => openPopupAddCard(popupAddCard, popupAddCardInputs));
