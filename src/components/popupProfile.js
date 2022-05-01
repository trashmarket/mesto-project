import {openPopup, closePopup} from './modal.js';
import {controlInputsAfterclickProfile} from './utils.js';
import {toggleButtonState} from './validate.js';
import {getUser, showError} from './api.js';
const popupProfile = document.querySelector('.profile-popup');
const profileTitle = document.querySelector('.profile__title');
const profileAvatar = document.querySelector('.profile__avatar');
const profileSubTitle = document.querySelector('.profile__sub-title');
const profilePopupTitle = popupProfile.querySelector('.profile-popup-title');
const profilePopupSubtitle = popupProfile.querySelector('.profile-popup-subtitle');
const profilePopupInputs = [...popupProfile.querySelectorAll('.popup__input')] 

getUser().then(
  (res) => {
    profileTitle.textContent = res.name;
    profileSubTitle.textContent = res.about;
    profileAvatar.style.backgroundImage = `url(${res.avatar})`;    
  }
).catch(showError);

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