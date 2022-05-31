export default class Popup {
  constructor (selector) {
    this.selector = selector;
    this._popup = document.querySelector(this.selector);
  }

  _handleEscClose (event) {
    if (event.key === 'Escape') {
      this.close();
    }
    event.target.classList.remove('popup_active');
  }


  open() {
    this._popup.classList.add('popup_active');
    document.addEventListener('keydown', this._handleEscClose.bind(this));

  }

  close() {
    this._popup.classList.remove('popup_active');
    document.removeEventListener('keydown', this._handleEscClose)
  }


  setEventListeners() {
    this._popup.addEventListener('click', this._handleEscClose);
    this._popup.querySelector('.popup__close').addEventListener('click', (event) => {
      if (event.target === event.currentTarget) {
        this.close()
      }
  })
  }

}
