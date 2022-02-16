const popupProfile = document.querySelector('.profile-popup');
const profileButtonPopup = document.querySelector('.profile__update-profile');
const popupCloseButton = popupProfile.querySelector('.popup__close');
const profileTitle = document.querySelector('.profile__title');
const profileSubTitle = document.querySelector('.profile__sub-title');
const title = popupProfile.querySelector('.profile-popup-title');
const subtitle = popupProfile.querySelector('.profile-popup-subtitle');

const popupOpen = function (popup) {
  popup.classList.add('popup_active')
}

const popupClose = function (popup) {
  popup.classList.remove('popup_active');
}

const popupProfileClose = function (event) {
  popupClose(popupProfile);
  title.value = profileTitle.textContent.trim();
  subtitle.value = profileSubTitle.textContent.trim();
}

const popupInputCleaner = function (inputs) {
  inputs.forEach(item => item.value = '');
}

const showOrHide = function (event, elementString, popup) {

  if (elementString === 'popup_type_add-card') {
    if (event.target.closest('.' + elementString)) {
      const inputs = popup.querySelectorAll('.popup__input');
      toggle(popup, 'popup_active');
      popupInputCleaner(inputs);
    } else {
      toggle(popup, 'popup_active');
    }
  }
  if (elementString === 'popup-image') {
    if (event.target.closest('.popup__close')) {
      toggle(popup, 'popup_active');
    }
  }
}

const changeProfile = function (event) {
  event.preventDefault();

  profileTitle.textContent = title.value;
  profileSubTitle.textContent = subtitle.value;
  popupClose(popupProfile);
}

profileButtonPopup.addEventListener('click', function (event) {
  popupOpen(popupProfile);
});

popupCloseButton.addEventListener('click', popupProfileClose);

popupProfile.addEventListener('submit', changeProfile);

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
const elementStringPopupAddCard = popupAddCard.className.split(' ')[1];
const buttonClosePopupAddCard = popupAddCard.querySelector('.popup__close');
const popupAddCardInputs = popupAddCard.querySelectorAll('.popup__input');
buttonAddForm.addEventListener('click', function(event) {
  showOrHide(event, elementStringPopupAddCard, popupAddCard);
});

buttonClosePopupAddCard.addEventListener('click', function(event) {
  showOrHide(event, elementStringPopupAddCard, popupAddCard);
})

const appendFormCard = function(event) {
  event.preventDefault();
  const title = popupAddCardInputs[0].value;
  const link = popupAddCardInputs[1].value;
  if (title === '' || link === '') {
    toggle(popupAddCard, 'popup_active');
    popupInputCleaner(popupAddCardInputs);
    return;
  } 
  appendNewCard(link, title);
  toggle(popupAddCard, 'popup_active');
  popupInputCleaner(popupAddCardInputs);
}

popupAddCard.addEventListener('submit', appendFormCard);

// like && trash can

const generalContainer = document.querySelector('.photo-cards__list');
const popupImage = document.querySelector('.popup-image');

popupImage.addEventListener('click', function(event){
  showOrHide(event, 'popup-image', this);
})

const makerPopupImg = function (title, link) {
  popupImage.querySelector('.popup__subtitle').textContent = title;
  popupImage.querySelector('.popup__image').src = link;
}

const listenTolist = function (event) {
  if (event.target.closest('.photo-cards__button')) {
    const like = event.target;
    toggle(like, 'photo-cards__button_active');
  }
  if (event.target.closest('.photo-cards__trash-button')) {
    const card = event.target.parentElement;
    card.remove();
  }

  if (event.target.closest('.photo-cards__img')) {
    const card = event.target.parentElement;
    const title = card.querySelector('.photo-cards__title').textContent;
    const linkImg = card.querySelector('.photo-cards__img').src;

    makerPopupImg(title, linkImg);
    toggle(popupImage, 'popup_active');
  }

}

generalContainer.addEventListener('click', listenTolist);



