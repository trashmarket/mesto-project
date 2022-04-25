import {openPopup, closePopup} from './modal.js'

const enableProfilePopup = ({popupProfile, profileUpdateButton, profileTitle, profileSubTitle}) => {
const popupUpdateCloseButton = popupProfile.querySelector('.popup__close');
const titleProfilePopup = popupProfile.querySelector('.profile-popup-title');
const subtitleProfilePopup = popupProfile.querySelector('.profile-popup-subtitle');

profileUpdateButton.addEventListener('click', function (event) {
  restoreInputs(titleProfilePopup, subtitleProfilePopup, profileTitle, profileSubTitle);
  openPopup(popupProfile);

popupUpdateCloseButton.addEventListener('click', () => closePopup(popupProfile));

popupProfile.addEventListener('submit', (event) => {
  event.preventDefault();
  changeProfile(profileTitle, profileSubTitle, titleProfilePopup, subtitleProfilePopup, popupProfile);
 });
})
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