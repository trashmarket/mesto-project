import {openPopup, closePopup} from './modal.js'

const enableProfilePopup = ({popupProfile, profileTitle, profileSubTitle, profilePopupTitle, profilePopupSubtitle}) => {
restoreInputs(profilePopupTitle, profilePopupSubtitle, profileTitle, profileSubTitle);
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