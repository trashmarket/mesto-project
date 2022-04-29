import {openPopup, closePopup} from './modal.js'
const popupImage = document.querySelector('.popup_type_show-image');
const subTitleImageCard = popupImage.querySelector('.popup__subtitle');
const popupContentImageCard = popupImage.querySelector('.popup__image');
export const createCard =
 ({ 
    link,
    title,
  },
  {
    card,
    cardImg,
    cardTitle,
    likeButton,
    trashButton,
    item
  }) => {
  
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