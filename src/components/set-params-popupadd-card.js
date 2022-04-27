export const setParamsPopupaddCards = (popupAddcard, button) => ({
  popupCard: popupAddcard,
  popupButton: button,
  popupAddCardInputs: popupAddcard.querySelectorAll('.popup__input'),
  popupAddCardInputText: popupAddcard.querySelector('.popup__name-new-card'),
  popupAddCardInputLink: popupAddcard.querySelector('.popup__link-new-card'),
  selectorActive: 'popup__submit_inactive'
})