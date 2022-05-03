import {openPopup, closePopup} from './modal.js';
import {myId} from './popupProfile';
import {deleteCard, showError, putLike, deleteLike} from './api.js'
const popupImage = document.querySelector('.popup_type_show-image');
const subTitleImageCard = popupImage.querySelector('.popup__subtitle');
const popupContentImageCard = popupImage.querySelector('.popup__image');
export const createCard =
 ({ 
    link,
    title,
    ownerId,
    likes,
    idCard,
    selectorActiveLike
  },
  {
    card,
    cardImg,
    cardTitle,
    likeButton,
    trashButton,
    item,
    outputLikes
  }) => {
  
  if (ownerId.includes(myId)) {
    trashButton.addEventListener('click', function(event) {
      removeCard(item);
      deleteCard(idCard).catch(showError);
    });
  } else {
    trashButton.remove();
  }

  const booleMylike = likes.some(person => person._id.includes(myId));

  (!booleMylike) ? addClassOrRemove(likeButton, null, selectorActiveLike) : addClassOrRemove(likeButton, selectorActiveLike, null)

  outputLikes.textContent = (likes.length) ? likes.length : '';

  likeButton.addEventListener('click', () => {
    listenHeartButton(likeButton, likes, idCard, selectorActiveLike, outputLikes)
  });

  cardImg.addEventListener('click', (event) => listenImg(link, title, subTitleImageCard, popupContentImageCard, popupImage));

  cardImg.alt = title;
  cardImg.src = link;
  cardTitle.textContent = title;


  return card;
};

const removeCard = (card) => {
  card.remove();
}

const addClassOrRemove = (element , addClass, removeClass) => {
  if (addClass) {
    element.classList.add(addClass);
  } else {
    element.classList.remove(removeClass);
  }
}

const listenHeartButton = (likeButton, likes, idCard, selectorActiveLike, outputLikes) => {
  // const booleLike = likes.some(person => person._id.includes(myId))
  // console.log(booleLike);
  // if(!booleLike) {
  //   putLike(idCard).then(card => {

  //   }).catch(showError)
  // } else {
  //   deleteLike(idCard).then(card => {

  //   }).catch(showError);
  // }
  if (!likeButton.classList.contains(selectorActiveLike)) {
    putLike(idCard).then(card => {
      likeButton.classList.add(selectorActiveLike);
      outputLikes.textContent = card.likes.length;
    }).catch(showError);
  } else {
    deleteLike(idCard).then(card => {
      likeButton.classList.remove(selectorActiveLike);
      outputLikes.textContent = card.likes.length;
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