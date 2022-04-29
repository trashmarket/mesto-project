export const setParamsProfilePopup = (popup) =>({
  popupProfile: popup,
  profileTitle: document.querySelector('.profile__title'),
  profileSubTitle: document.querySelector('.profile__sub-title'),
  profilePopupTitle: popup.querySelector('.profile-popup-title'),
  profilePopupSubtitle: popup.querySelector('.profile-popup-subtitle'),
  profilePopupInputs: [...popup.querySelectorAll('.popup__input')],
  buttonSelector: '.popup__submit',
  inactiveButton: 'popup__submit_inactive',
  selectorErrorInput: 'popup__input_type_error'
})