
import {controlInputAvatarPopup, getForm} from './utils.js';
import FormValidator from './validate.js';
import {setValidateForm} from './set-params-validate-form';
// import {reloadAvatar, showError} from './api.js';

const avatarFormValid = new FormValidator(setValidateForm(), getForm('.popup_type_add-avatar'));
const popupAvatar = document.querySelector('.popup_type_add-avatar');
const inputs = [...popupAvatar.querySelectorAll('.popup__input')];
const popupLinkAvatar = popupAvatar.querySelector('.popup__link-new-avatar');
const buttonAvatar = popupAvatar.querySelector('.popup__submit')

const enablePopupAatar = ({ selectorErrorInput }) => {
  restorInput();
  avatarFormValid.toggleButtonState(inputs, buttonAvatar);
  controlInputAvatarPopup(inputs, popupAvatar, selectorErrorInput);
}

const restorInput = () => {
  popupLinkAvatar.value = '';
}

export {enablePopupAatar}
