import {openPopup, closePopup} from './modal.js'

const enableProfilePopup = ({popupProfile, profileTitle, profileSubTitle, profilePopupTitle, profilePopupSubtitle}) => {

restoreInputs(profilePopupTitle, profilePopupSubtitle, profileTitle, profileSubTitle);

openPopup(popupProfile);

popupProfile.addEventListener('submit', (event) => {
  event.preventDefault();
  changeProfile(profileTitle, profileSubTitle, profilePopupTitle, profilePopupSubtitle, popupProfile);
 });
}

const restoreInputs = (titleProfilePopup, subtitleProfilePopup, profileTitle, profileSubTitle) => {
  titleProfilePopup.value = profileTitle.textContent.trim();
  subtitleProfilePopup.value = profileSubTitle.textContent.trim();
}

const changeProfile = function (profileTitle, profileSubTitle, titleProfilePopup, subtitleProfilePopup, popupProfile) {
  profileTitle.textContent = titleProfilePopup.value;
  profileSubTitle.textContent = subtitleProfilePopup.value;
  closePopup(popupProfile);
}

export {enableProfilePopup};