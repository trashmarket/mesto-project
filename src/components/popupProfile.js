import {openPopup, closePopup} from './modal.js';
import {controlInputsAfterclickProfile} from './utils.js';
import {toggleButtonState} from './validate.js';
const popupProfile = document.querySelector('.profile-popup');
const profileTitle = document.querySelector('.profile__title');
const profileSubTitle = document.querySelector('.profile__sub-title');
const profilePopupTitle = popupProfile.querySelector('.profile-popup-title');
const profilePopupSubtitle = popupProfile.querySelector('.profile-popup-subtitle');
const profilePopupInputs = [...popupProfile.querySelectorAll('.popup__input')] 

const enableProfilePopup = ({buttonSelector, inactiveButton, selectorErrorInput}) => {
restoreInputs(profilePopupTitle, profilePopupSubtitle, profileTitle, profileSubTitle);
const button = popupProfile.querySelector(buttonSelector);

toggleButtonState(profilePopupInputs, button, inactiveButton);
controlInputsAfterclickProfile(profilePopupInputs, popupProfile, selectorErrorInput);
openPopup(popupProfile);
}

const restoreInputs = (titleProfilePopup, subtitleProfilePopup, profileTitle, profileSubTitle) => {
  titleProfilePopup.value = profileTitle.textContent.trim();
  subtitleProfilePopup.value = profileSubTitle.textContent.trim();
}

const changeProfile = function () {
  profileTitle.textContent = profilePopupTitle.value;
  profileSubTitle.textContent = profilePopupSubtitle.value;
  closePopup(popupProfile);
}

export {enableProfilePopup, changeProfile};