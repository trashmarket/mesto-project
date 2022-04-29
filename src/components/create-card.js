import {openPopup, closePopup} from './modal.js'

export const createCard = ({ link, title, cardTemplate, popupImage, }) => {
  const subTitleImageCard = popupImage.querySelector('.popup__subtitle');
  const popupContentImageCard = popupImage.querySelector('.popup__image');
  const popupImageButtonCard = popupImage.querySelector('.popup__close');

  const card = cardTemplate.cloneNode(true);
  
  const cardImg = card.querySelector('.photo-cards__img');
  const cardTitle = card.querySelector('.photo-cards__title');
  const likeButton = card.querySelector('.photo-cards__button');
  const trashButton = card.querySelector('.photo-cards__trash-button');
  const item = card.querySelector('.photo-cards__item')

  popupImageButtonCard.addEventListener('click', function(event){
    closePopup(popupImage);
  })

  trashButton.addEventListener('click', function(event) {
    removeCard(item);
  });
  likeButton.addEventListener('click', listenHeartButton);
  cardImg.addEventListener('click', (event) => listenImg(link, title, subTitleImageCard, popupContentImageCard, popupImage));

  cardImg.alt = title;
  cardImg.src = link;
  cardTitle.textContent = title;

  return card;
};

const removeCard = (card) => {
  card.remove();
}

const listenHeartButton = (event) => {
  const like = event.target;

  like.classList.toggle('photo-cards__button_active');
}

const makerPopupImg = (title, link , subTitleImage, popupContentImage) => {
  subTitleImage.textContent = title;
  popupContentImage.src = link;
  popupContentImage.alt = title;
}

const listenImg = (linkImg, titleimg, subTitleImage, popupContentImage, popupImage) => {
  const title = titleimg;
  const link = linkImg;
  makerPopupImg(title, link, subTitleImage, popupContentImage);
  openPopup(popupImage);
}