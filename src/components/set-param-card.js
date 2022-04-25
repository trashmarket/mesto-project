export const setParamCard = (type, link, title) => ({
  link: link,
  title: title,
  type: type,
  cardTemplate: document.querySelector('#card').content,
  photeCardsList: document.querySelector('.photo-cards__list'),
  popupImage: document.querySelector('.popup_type_show-image')
});