import Popup from "./Popup.js";
import {cleaneInputs} from './utils.js';



export default class PopupWithForm extends Popup {
  constructor (selector, formSubmit) {
    super(selector);
    this.formSubmit = formSubmit;
    this.popupInputs = document.querySelector(this.selector).querySelectorAll('.popup__input')
  }

  close() {
    super.close()
    cleaneInputs(this.popupInputs);
  }

  _getInputValues(inp) {
    this.inputs = [];
    for (let i = 0; i< inp.length; i++) {
      this.inputs[i] = inp[i].value;
    }
    return this.inputs;
  }


  setEventListeners() {
    super.setEventListeners();
    document.querySelector(this.selector).addEventListener('submit', (event) => {
      event.preventDefault();
      this.formSubmit(this._getInputValues(this.popupInputs));
    });
  }

}
