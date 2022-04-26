import {closePopup} from './modal.js';
export const clickPopupCloseButton = (event, popup) => {
  if (event.target === event.currentTarget) {
    closePopup(event.target.closest('.popup'));
  }
}