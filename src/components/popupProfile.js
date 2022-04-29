import {openPopup, closePopup} from './modal.js';
import {controlInputsAfterclickProfile} from './utils.js';
import {toggleButtonState} from './validate.js'
const enableProfilePopup = ({popupProfile, profileTitle, profileSubTitle, profilePopupTitle, profilePopupSubtitle, buttonSelector, inactiveButton, profilePopupInputs, selectorErrorInput}) => {
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

const changeProfile = function ({popupProfile, profileTitle, profileSubTitle, profilePopupTitle, profilePopupSubtitle}) {
  profileTitle.textContent = profilePopupTitle.value;
  profileSubTitle.textContent = profilePopupSubtitle.value;
  closePopup(popupProfile);
}

export {enableProfilePopup, changeProfile};