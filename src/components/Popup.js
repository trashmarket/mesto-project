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
    console.log('hello');
    document.querySelector(this.selector).classList.remove('popup_active');
    document.removeEventListener('keydown', this._handleEscClose)
  }
}