import {openPopup, closePopup} from './modal.js';
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

const enableProfilePopup = ({inactiveButton, selectorErrorInput}, checkInputValidity) => {
restoreInputs();
profileFormValid.toggleButtonState(profilePopupInputs, buttonProfile);
controlInputsAfterclickProfile(profilePopupInputs, popupProfile, selectorErrorInput, checkInputValidity);
}

const restoreInputs = () => {
  profilePopupTitle.value = profileTitle.textContent.trim();
  profilePopupSubtitle.value = profileSubTitle.textContent.trim();
}




const changeProfile = (api, valueName, valueAbout) => {
  buttonProfile.textContent = 'Сохранение...';
  api.editingProfile(valueName, valueAbout)
  .then(res => {
    profileTitle.textContent = res.name;
    profileSubTitle.textContent = res.about;
  }).catch(api.showError).finally(() => buttonProfile.textContent = 'Сохранить')

}




export {enableProfilePopup, changeProfile};
