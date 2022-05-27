
import {controlInputsAfterclickProfile, getForm} from './utils.js';
import FormValidator from './validate.js';
import {setValidateForm} from './set-params-validate-form';
// import {getUser, showError, editingProfile} from './api.js';

const profileFormValid = new FormValidator(setValidateForm(), getForm('.profile-popup'));

const popupProfile = document.querySelector('.profile-popup');
const profileTitle = document.querySelector('.profile__title');
export const profileAvatar = document.querySelector('.profile__avatar');
const profileSubTitle = document.querySelector('.profile__sub-title');
const profilePopupTitle = popupProfile.querySelector('.profile-popup-title');
const profilePopupSubtitle = popupProfile.querySelector('.profile-popup-subtitle');
const profilePopupInputs = [...popupProfile.querySelectorAll('.popup__input')]
const buttonProfile = popupProfile.querySelector('.popup__submit');

const enableProfilePopup = ({inactiveButton, selectorErrorInput}, checkInputValidity) => {
restoreInputs();
profileFormValid.toggleButtonState(profilePopupInputs, buttonProfile);
controlInputsAfterclickProfile(profilePopupInputs, popupProfile, selectorErrorInput, checkInputValidity);
}

const restoreInputs = () => {
  profilePopupTitle.value = profileTitle.textContent.trim();
  profilePopupSubtitle.value = profileSubTitle.textContent.trim();
}

export {enableProfilePopup};
