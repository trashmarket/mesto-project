import {openPopup, closePopup} from './modal.js';
import {controlInputAvatarPopup, getForm} from './utils.js';
import FormValidator from './validate.js';
import {setValidateForm} from './set-params-validate-form';
// import {reloadAvatar, showError} from './api.js';

const avatarFormValid = new FormValidator(setValidateForm(), getForm('.popup_type_add-avatar'));
console.log(avatarFormValid);
const popupAvatar = document.querySelector('.popup_type_add-avatar');
const inputs = [...popupAvatar.querySelectorAll('.popup__input')];
const popupLinkAvatar = popupAvatar.querySelector('.popup__link-new-avatar');
const buttonAvatar = popupAvatar.querySelector('.popup__submit')

const chengeAvatar = (profileAvatar) => {
  buttonAvatar.textContent = 'Сохранение...'
  reloadAvatar(popupLinkAvatar.value).then(res => {
    profileAvatar.style.backgroundImage = `url(${res.avatar})`;
    closePopup(popupAvatar);
  }).catch(showError).finally(() => buttonAvatar.textContent = 'Сохранить');
}

const enablePopupAatar = ({inactiveButton, selectorErrorInput}) => {
  restorInput();
  avatarFormValid.toggleButtonState(inputs, buttonAvatar);
  controlInputAvatarPopup(inputs, popupAvatar, selectorErrorInput);
  openPopup(popupAvatar);
}

const restorInput = () => {
  popupLinkAvatar.value = '';
}

export {enablePopupAatar, popupAvatar, chengeAvatar}