import {openPopup, closePopup} from './modal.js'

export const appendNewCard = ({ link, title, type, cardTemplate, photeCardsList, subTitleImage, popupContentImage, popupImage, popupImageButton }) => {
  const card = cardTemplate.cloneNode(true);
  console.log(card)
  const cardImg = card.querySelector('.photo-cards__img');
  const cardTitle = card.querySelector('.photo-cards__title');
  const likeButton = card.querySelector('.photo-cards__button');
  const trashButton = card.querySelector('.photo-cards__trash-button');
  const item = card.querySelector('.photo-cards__item')

  popupImageButton.addEventListener('click', function(event){
    closePopup(popupImage);
  })

  trashButton.addEventListener('click', function(event) {
    removeCard(item);
  });
  likeButton.addEventListener('click', listenHeartButton);
  cardImg.addEventListener('click', (event) => listenImg(link, title, subTitleImage, popupContentImage, popupImage));

  cardImg.alt = title;
  cardImg.src = link;
  cardTitle.textContent = title;
  if (type === 'arr'){
    photeCardsList.append(card); 
  } else {
    photeCardsList.prepend(card);
  }
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