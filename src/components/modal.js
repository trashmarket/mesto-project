import {pressEscape} from './press-escape.js'

const openPopup = function (popup) {
  popup.classList.add('popup_active');

  document.addEventListener('keydown', pressEscape)
}

const closePopup = function (popup) {
  popup.classList.remove('popup_active');

  document.removeEventListener('keydown', pressEscape)
}

export {openPopup, closePopup}