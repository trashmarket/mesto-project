export const setParamsTemplateCards = (template) => ({
  card: template,
  cardImg: template.querySelector('.photo-cards__img'),
  cardTitle: template.querySelector('.photo-cards__title'),
  likeButton: template.querySelector('.photo-cards__button'),
  trashButton: template.querySelector('.photo-cards__trash-button'),
  item: template.querySelector('.photo-cards__item') ? template.querySelector('.photo-cards__item') : template,
  outputLikes: template.querySelector('.photo-cards__count')
})

// - удалить. больше не нужен
