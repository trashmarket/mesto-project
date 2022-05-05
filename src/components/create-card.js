import {deleteCard, showError, putLike, deleteLike} from './api.js';
const popupImage = document.querySelector('.popup_type_show-image');
const subTitleImageCard = popupImage.querySelector('.popup__subtitle');
const popupContentImageCard = popupImage.querySelector('.popup__image');
export const createCard =
 ({ 
    link,
    title,
    ownerId,
    likes,
    selectorActiveLike,
    myId
  },
  {
    card,
    cardImg,
    cardTitle,
    likeButton,
    trashButton,
    outputLikes
  }) => {
  
  if (!ownerId.includes(myId)) trashButton.remove();

  const booleMylike = likes.some(person => person._id.includes(myId));
  (!booleMylike) ? addClassOrRemove(likeButton, null, selectorActiveLike) : addClassOrRemove(likeButton, selectorActiveLike, null)

  outputLikes.textContent = (likes.length) ? likes.length : '';

  cardImg.addEventListener('click', (event) => listenImg(link, title, subTitleImageCard, popupContentImageCard, popupImage));

  cardImg.alt = title;
  cardImg.src = link;
  cardTitle.textContent = title;

  return card;
};

export const removeCard = (item, idCard) => {
  item.remove();
  deleteCard(idCard).catch(showError);
} 

const addClassOrRemove = (element , addClass, removeClass) => {
  if (addClass) {
    element.classList.add(addClass);
  } else {
    element.classList.remove(removeClass);
  }
}


export const listenHeartButton = (likeButton, idCard, selectorActiveLike, outputLikes) => {
  if (!likeButton.classList.contains(selectorActiveLike)) {
    putLike(idCard).then(card => {
      likeButton.classList.add(selectorActiveLike);
      outputLikes.textContent = card.likes.length ? card.likes.length : '';
    }).catch(showError);
  } else {
    deleteLike(idCard).then(card => {
      likeButton.classList.remove(selectorActiveLike);
      outputLikes.textContent = card.likes.length ? card.likes.length : '';
    }).catch(showError);
  }
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