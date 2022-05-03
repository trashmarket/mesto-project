import {openPopup, closePopup} from './modal.js';
import {myId} from './popupProfile';
import {deleteCard, showError, putLike, deleteLike} from './api.js';
import {setParamCard} from './set-param-card.js';
import {setParamsTemplateCards} from './set-prams-template-card.js';
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
    if (trashButton){
      trashButton.remove();
    }
  }
  
  const booleMylike = likes.some(person => person._id.includes(myId));
  (!booleMylike) ? addClassOrRemove(likeButton, null, selectorActiveLike) : addClassOrRemove(likeButton, selectorActiveLike, null)

  outputLikes.textContent = (likes.length) ? likes.length : '';

  const handleLike = () => {
    listenHeartButton(likes, idCard, card, item)
  }

  likeButton.removeEventListener('click', handleLike);
  likeButton.addEventListener('click', handleLike);

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

const listenHeartButton = (likes, idCard, cardTemplate, item) => {
  const booleLike = likes.some(person => person._id.includes(myId))
  if(!booleLike) {
    putLike(idCard).then(card => {
      createCard(
      setParamCard(
        card.link,
        card.name,
        card.owner._id,
        card.likes,
        card._id
      ),
      setParamsTemplateCards(item)
      )
    }).catch(showError)
  } else {
    deleteLike(idCard).then(card => {
      createCard(
        setParamCard(
          card.link,
          card.name,
          card.owner._id,
          card.likes,
          card._id
        ),
        setParamsTemplateCards(item)
        )
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