import {closePopup} from './modal.js';

export const clickLayout = (event) => {
  if (event.target === event.currentTarget) {
    closePopup(event.currentTarget)
  }
}