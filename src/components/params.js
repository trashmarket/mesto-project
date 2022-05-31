import FormValidator from './FormValidator.js';
import {controlInputAvatarPopup, getForm} from './utils.js';
import {controlInputsAfterclickAddCard} from './utils.js';

const popupProfile = document.querySelector('.profile-popup');
export const profileAvatar = document.querySelector('.profile__avatar');
const profilePopupTitle = popupProfile.querySelector('.profile-popup-title');
const profilePopupSubtitle = popupProfile.querySelector('.profile-popup-subtitle');
const profilePopupInputs = [...popupProfile.querySelectorAll('.popup__input')]
const buttonProfile = popupProfile.querySelector('.popup__submit');

export const popupAvatar = document.querySelector('.popup_type_add-avatar');
const inputs = [...popupAvatar.querySelectorAll('.popup__input')];
const buttonAvatar = popupAvatar.querySelector('.popup__submit')

export const setValidateForm = () => ({
  form: '.popup__form',
  error: '-error',
  inputSelector: '.popup__input',
  inputTypeError: 'popup__input_type_error',
  buttonSelector: '.popup__submit',
  inactiveButton: 'popup__submit_inactive',
  popupErrorActive: 'popup__input_type_error_active'
})

const profileFormValid = new FormValidator(setValidateForm(), getForm('.profile-popup'));
const avatarFormValid = new FormValidator(setValidateForm(), getForm('.popup_type_add-avatar'));



export const enableProfilePopup = (userInfo) => {
  restoreInputs(userInfo );
  profileFormValid.toggleButtonState(profilePopupInputs, buttonProfile);
  }

const restoreInputs = (userInfo ) => {
  profilePopupTitle.value = userInfo._name;
  profilePopupSubtitle.value = userInfo._about;
}

export const enablePopupAatar = ({selectorErrorInput}) => {
  avatarFormValid.toggleButtonState(inputs, buttonAvatar);
  controlInputAvatarPopup(inputs, popupAvatar, selectorErrorInput);
}


export const openPopupAddCard = (popupAddCard, popupAddCardInputs) => {
  controlInputsAfterclickAddCard(popupAddCardInputs, popupAddCard);
}


