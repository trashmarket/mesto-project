export const setParams = {
  setParamCard: (link, title, ownerId, likes, idCard, myId) => ({
    link,
    title,
    ownerId,
    likes,
    idCard,
    myId,
    selectorActiveLike: 'photo-cards__button_active'
  }),
  setParamsPopupaddCards: (popupAddcard, button, photoCardsList) => ({
    popupCard: popupAddcard,
    popupButton: button,
    selectorActive: 'popup__submit_inactive',
    photoCardsList: photoCardsList
  }),
  setParamsProfilePopup: () =>({
    inactiveButton: 'popup__submit_inactive',
    selectorErrorInput: 'popup__input_type_error'
  }),
  setValidateForm: () =>({
    form: '.popup__form',
    error: '-error',
    inputSelector: '.popup__input',
    inputTypeError: 'popup__input_type_error',
    buttonSelector: '.popup__submit',
    inactiveButton: 'popup__submit_inactive',
    popupErrorActive: 'popup__input_type_error_active'
  }),
  setParamsTemplateCards: (template) => ({
    card: template,
    cardImg: template.querySelector('.photo-cards__img'),
    cardTitle: template.querySelector('.photo-cards__title'),
    likeButton: template.querySelector('.photo-cards__button'),
    trashButton: template.querySelector('.photo-cards__trash-button'),
    item: template.querySelector('.photo-cards__item') ? template.querySelector('.photo-cards__item') : template,
    outputLikes: template.querySelector('.photo-cards__count')  
  })
}