export const setParamCard = (link, title) => ({
  link: link,
  title: title,
  cardTemplate: document.querySelector('#card').content,
  popupImage: document.querySelector('.popup_type_show-image')
});