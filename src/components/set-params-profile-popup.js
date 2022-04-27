export const setParamsProfilePopup = (popup) =>({
  popupProfile: popup,
  profileTitle: document.querySelector('.profile__title'),
  profileSubTitle: document.querySelector('.profile__sub-title'),
  profilePopupTitle: popup.querySelector('.profile-popup-title'),
  profilePopupSubtitle: popup.querySelector('.profile-popup-subtitle'),
  buttonSelector: '.popup__submit',
  inactiveButton: 'popup__submit_inactive'
})