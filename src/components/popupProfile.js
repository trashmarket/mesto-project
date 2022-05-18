import {openPopup, closePopup} from './modal.js';
import {controlInputsAfterclickProfile} from './utils.js';
import {toggleButtonState} from './validate.js';
// import {getUser, showError, editingProfile} from './api.js';

const popupProfile = document.querySelector('.profile-popup');
const profileTitle = document.querySelector('.profile__title');
export const profileAvatar = document.querySelector('.profile__avatar');
const profileSubTitle = document.querySelector('.profile__sub-title');
const profilePopupTitle = popupProfile.querySelector('.profile-popup-title');
const profilePopupSubtitle = popupProfile.querySelector('.profile-popup-subtitle');
const profilePopupInputs = [...popupProfile.querySelectorAll('.popup__input')] 
const buttonProfile = popupProfile.querySelector('.popup__submit');



export const getUserId = (getUser) => {
 return getUser().then(
     (res) => {
      profileTitle.textContent = res.name;
      profileSubTitle.textContent = res.about;
      profileAvatar.style.backgroundImage = `url(${res.avatar})`;
      return res._id;  
    }
  );  
}

const enableProfilePopup = ({inactiveButton, selectorErrorInput}) => {
restoreInputs();
toggleButtonState(profilePopupInputs, buttonProfile, inactiveButton);
controlInputsAfterclickProfile(profilePopupInputs, popupProfile, selectorErrorInput);
openPopup(popupProfile);
}

const restoreInputs = () => {
  profilePopupTitle.value = profileTitle.textContent.trim();
  profilePopupSubtitle.value = profileSubTitle.textContent.trim();
}

const changeProfile = () => {
  buttonProfile.textContent = 'Сохранение...';
  editingProfile(profilePopupTitle.value, profilePopupSubtitle.value)
  .then(res => {
    profileTitle.textContent = res.name;
    profileSubTitle.textContent = res.about;
    closePopup(popupProfile);
  }).catch(showError).finally(() => buttonProfile.textContent = 'Сохранить')

}

export {enableProfilePopup, changeProfile};