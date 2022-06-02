import Popup from "./Popup";

export default class PopupWithImage extends Popup {
  constructor (selector) {
    super(selector);
    this.popupImage = this._popup.querySelector('.popup__image');
    this.popupSubTitle = this._popup.querySelector('.popup__subtitle');
  }

  open(srcImage, textImage) {
    super.open();

    this.srcImage = srcImage;
    this.textImage = textImage;

    this.popupImage.src = this.srcImage;
    this.popupSubTitle.textContent = this.textImage;
    this.popupImage.alt = this.textImage;
  }
}

