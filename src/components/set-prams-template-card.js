export const setParamsTemplateCards = (template) => ({
  card: template,
  cardImg: template.querySelector('.photo-cards__img'),
  cardTitle: template.querySelector('.photo-cards__title'),
  likeButton: template.querySelector('.photo-cards__button'),
  trashButton: template.querySelector('.photo-cards__trash-button'),
  item: template.querySelector('.photo-cards__item')
})