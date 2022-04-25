const openPopup = function (popup) {
  popup.classList.add('popup_active');
}

const closePopup = function (popup) {
  popup.classList.remove('popup_active');
}

export {openPopup, closePopup}