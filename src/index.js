import './pages/index.css';
import {enableValidationForm, pressEscape} from './components/validate.js';
import {openPopup, closePopup} from './components/modal.js';
import {enableProfilePopup} from './components/popupProfile.js'
const popups = document.querySelectorAll('.popup');
const popupsContainers = document.querySelectorAll('.popup__container');
const popupProfile = document.querySelector('.profile-popup');
const profileUpdateButton = document.querySelector('.profile__update-profile');
const popupUpdateCloseButton = popupProfile.querySelector('.popup__close');
const profileTitle = document.querySelector('.profile__title');
const profileSubTitle = document.querySelector('.profile__sub-title');
const titleProfilePopup = popupProfile.querySelector('.profile-popup-title');
const subtitleProfilePopup = popupProfile.querySelector('.profile-popup-subtitle');

enableValidationForm({
  form: '.popup__form',
  error: '-error',
  inputSelector: '.popup__input',
  inputTypeError: '.popup__input_type_error',
  buttonSelector: '.popup__submit',
  inactiveButton: 'popup__submit_inactive'
})

document.addEventListener('keydown', (event) => {
  pressEscape(event.key);
})

popupsContainers.forEach(container => container.addEventListener('click', (event) => event.stopPropagation()));

popups.forEach(popup => popup.addEventListener('click', () => closePopup(popup)));

const cleaneInputs = function (inputs) {
  inputs.forEach(item => item.value = '');
}

const changeProfile = function (profileTitle, profileSubTitle) {
  profileTitle.textContent = titleProfilePopup.value;
  profileSubTitle.textContent = subtitleProfilePopup.value;
  closePopup(popupProfile);
}

profileUpdateButton.addEventListener('click', function (event) {
  restoreInputs();
  openPopup(popupProfile);
});

function restoreInputs() {
  titleProfilePopup.value = profileTitle.textContent.trim();
  subtitleProfilePopup.value = profileSubTitle.textContent.trim();
}

popupUpdateCloseButton.addEventListener('click', () => closePopup(popupProfile));

popupProfile.addEventListener('submit', (event) => {
  event.preventDefault();
  changeProfile(profileTitle, profileSubTitle);
});

//card

const cardsArr = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const cardTemplate = document.querySelector('#card').content;
const photeCardsList = document.querySelector('.photo-cards__list');

const appendNewCard = function(link, title, type) {
  const card = cardTemplate.cloneNode(true);
  const cardImg = card.querySelector('.photo-cards__img');
  const cardTitle = card.querySelector('.photo-cards__title');
  const likeButton = card.querySelector('.photo-cards__button');
  const trashButton = card.querySelector('.photo-cards__trash-button');
  const item = card.querySelector('.photo-cards__item')

  trashButton.addEventListener('click', function(event) {
    removeCard(item);
  });
  likeButton.addEventListener('click', listenHeartButton);
  cardImg.addEventListener('click', (event) => listenImg(link, title));

  cardImg.alt = title;
  cardImg.src = link;
  cardTitle.textContent = title;
  if (type === 'arr'){
    photeCardsList.append(card); 
  } else {
    photeCardsList.prepend(card);
  }
}

cardsArr.forEach(item => {
  const title = item.name;
  const link = item.link;

  appendNewCard(link, title, 'arr');
})

// new form

const popupAddCard = document.querySelector('.popup_type_add-card');
const buttonAddForm = document.querySelector('.profile__button');
const buttonClosePopupAddCard = popupAddCard.querySelector('.popup__close');
const popupAddCardInputs = popupAddCard.querySelectorAll('.popup__input');
const popupAddCardInputText = popupAddCard.querySelector('.popup__name-new-card');
const popupAddCardInputLink = popupAddCard.querySelector('.popup__link-new-card');
const openPopupAddCard = function (event) {
  openPopup(popupAddCard)
  cleaneInputs(popupAddCardInputs);
}

buttonAddForm.addEventListener('click', openPopupAddCard);

buttonClosePopupAddCard.addEventListener('click', function(event) {
  closePopup(popupAddCard);
})

const handleCardFormSubmit = function(event) {
  event.preventDefault();
  const title = popupAddCardInputText.value;
  const link = popupAddCardInputLink.value;
  if (title === '' || link === '') return; 
  appendNewCard(link, title);
  closePopup(popupAddCard);
  cleaneInputs(popupAddCardInputs);
}

popupAddCard.addEventListener('submit', handleCardFormSubmit);

// like && trash can

const generalContainer = document.querySelector('.photo-cards__list');
const popupImage = document.querySelector('.popup-image');
const popupImageButton = popupImage.querySelector('.popup__close');
const subTitleImage = popupImage.querySelector('.popup__subtitle'); 
const popupContentImage = popupImage.querySelector('.popup__image')

popupImageButton.addEventListener('click', function(event){
  closePopup(popupImage);
})

function makerPopupImg(title, link) {
  subTitleImage.textContent = title;
  popupContentImage.src = link;
  popupContentImage.alt = title;
}

function listenHeartButton(event) {
  const like = event.target;

  like.classList.toggle('photo-cards__button_active');
}

function removeCard(card) {
  card.remove();
}

function listenImg(linkImg, titleimg) {
  const title = titleimg;
  const link = linkImg;
  makerPopupImg(title, link);
  openPopup(popupImage);
}




