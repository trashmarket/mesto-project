import './pages/index.css';
import {enableValidationForm} from './components/validate.js';
import {enableProfilePopup, changeProfile} from './components/popupProfile.js';
import {cardsArr} from './components/cards-arr.js';
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
import {getCards, showError} from './components/api.js';

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

enableValidationForm(setValidateForm());

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
  // console.log(res);
  res.forEach(item => {
    photoCardsList.append(
     createCard(setParamCard(item.link, item.name),
     setParamsTemplateCards(cloneCardTemplate(cardTemplate)))
     );
  })
})).catch(showError);

popupAddCard.addEventListener('submit',(event) => {
  event.preventDefault();

  handleCardFormSubmit(setParamsPopupaddCards(popupAddCard, searchElementOfCurrentTarget(event, '.popup__submit'), photoCardsList), cloneCardTemplate(cardTemplate));
});

buttonAddForm.addEventListener('click',() => openPopupAddCard(popupAddCard, popupAddCardInputs));
