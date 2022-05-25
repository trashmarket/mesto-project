import { clickLayout } from '../components/click-layout.js';
import { clickPopupCloseButton } from '../components/click-popup-close-button.js';

export default class Popup {
  constructor (selector) {
    this.selector = selector;
  }


  _handleEscClose (event) {
    if (event.key === 'Escape') {
      this.close();
    }
  }

  open() {
    document.querySelector(this.selector).classList.add('popup_active');
    document.addEventListener('keydown', this._handleEscClose.bind(this));
  }

  close() {
    document.querySelector(this.selector).classList.remove('popup_active');
    document.removeEventListener('keydown', this._handleEscClose)
  }


  setEventListeners() {
    document.querySelector(this.selector).addEventListener('click', clickLayout);
    document.querySelector(this.selector).querySelector('.popup__close').addEventListener('click', (event) => {
    clickPopupCloseButton(event);
  })
  }

}
