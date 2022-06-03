import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor (selector, formSubmit) {
    super(selector);
    this.formSubmit = formSubmit;
    this._inputList = this._popup.querySelectorAll('.popup__input')
    this._form = this._popup.querySelector('.popup__form')
  }

  close() {
    super.close()
    this._form.reset()
  }

  _getInputValues() {
    this._formValues = {};
    this._inputList.forEach(input => this._formValues[input.name] = input.value);
    return this._formValues;
  }

  setEventListeners() {
    super.setEventListeners();

    this._popup.addEventListener('submit', (event) => {
      event.preventDefault();
      this.formSubmit(this._getInputValues());
    });
  }
}

