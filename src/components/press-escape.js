import {closePopup} from './modal';

export const pressEscape = (event) => {
  if (event.key === 'Escape') {
    const popup = document.querySelector('.popup_active');

    // popup.classList.remove('popup_active');
    closePopup(popup);
  }
}
