import {openPopup} from './modal.js';
import {controlInputAvatarPopup} from './utils.js';
import {toggleButtonState} from './validate.js';
import {reloadAvatar, showError} from './api.js';

const popupAvatar = document.querySelector('.popup_type_add-avatar');
const input = [...popupAvatar.querySelectorAll('.popup__input')];
const popupLinkAvatar = popupAvatar.querySelector('.popup__link-new-avatar');
const buttonAvatar = popupAvatar.querySelector('.popup__submit')

const chengeAvatar = (profileAvatar) => {
  buttonAvatar.textContent = 'Сохранение...'
  reloadAvatar(popupLinkAvatar.value).then(res => {
    profileAvatar.style.backgroundImage = `url(${res.avatar})`;
  }).catch(showError).finally(() => buttonAvatar.textContent = 'Сохраненить')
}

const enablePopupAatar = ({inactiveButton, selectorErrorInput}) => {
  restorInput();
  toggleButtonState(input, buttonAvatar, inactiveButton);
  controlInputAvatarPopup(input, popupAvatar, selectorErrorInput);
  openPopup(popupAvatar);
}

const restorInput = () => {
  popupLinkAvatar.value = '';
}

export {enablePopupAatar, popupAvatar, chengeAvatar}