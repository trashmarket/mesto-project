import Popup from "./Popup";

export default class PopupWithImage extends Popup {
  constructor (selector, srcImage, textImage) {
    super(selector);
    this.popup = document.querySelector(this.selector);
    this.srcImage = srcImage;
    this.textImage = textImage;
  }

  open() {
    super.open();
    this.popupImage = this.popup.querySelector('.popup__image');
    this.popupSubTitle = this.popup.querySelector('.popup__subtitle');

    this.popupImage.src = this.srcImage;
    this.popupSubTitle.textContent = this.textImage;
    this.popupImage.alt = this.textImage;
  }

  
}
