const popup = document.querySelector('.popup');
const profileButtonPopup = document.querySelector('.profile__update-profile');
const popupClose = popup.querySelector('.popup__close');
const popupInputs = popup.querySelectorAll('.popup__input');
const profileTitle = document.querySelector('.profile__title');
const profileSubTitle = document.querySelector('.profile__sub-title');
const title = popupInputs[0];
const subtitle = popupInputs[1];
const elementStringPopup = popup.className.split(' ')[0];

const toggle = function (popup, selector) {
  popup.classList.toggle(selector);
}

const showOrHide = function (event, elementString, popup) {
  if (elementString === "popup"){
    if (event.target.closest('.' + elementString)) {
      toggle(popup, 'popup_active');
      title.value = profileTitle.textContent.trim();
      subtitle.value = profileSubTitle.textContent.trim();
    } else {
      toggle(popup, 'popup_active');
    }
  }
  if (elementString === 'popup_add-card') {
    if (event.target.closest('.' + elementString)) {
      const inputs = popup.querySelectorAll('.popup__input');
      toggle(popup, 'popup_active');
      inputs.forEach(input => input.value = '');
    } else {
      toggle(popup, 'popup_active');
    }
  }
}

const formSubmitHandler = function (event) {
  event.preventDefault();

  profileTitle.textContent = title.value;
  profileSubTitle.textContent = subtitle.value;
  popup.classList.remove('popup_active');
}

profileButtonPopup.addEventListener('click', function (event) {
  showOrHide(event, elementStringPopup, popup)
});

popupClose.addEventListener('click', function (event) {
  showOrHide(event, elementStringPopup, popup)
});

popup.addEventListener('submit', formSubmitHandler);

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

cardsArr.forEach(item => {
  const card = cardTemplate.cloneNode(true);
  const title = item.name;
  const link = item.link;
  const cardImg = card.querySelector('.photo-cards__img');
  const cardTitle = card.querySelector('.photo-cards__title');
  
  cardImg.src = link;
  cardTitle.textContent = title;

  photeCardsList.append(card);
})

// new form

const popupAddCard = document.querySelector('.popup_add-card');
const buttonAddForm = document.querySelector('.profile__button');
const elementStringPopupAddCard = popupAddCard.className.split(' ')[1];
const buttonClosePopupAddCard = popupAddCard.querySelector('.popup__close');

buttonAddForm.addEventListener('click', function(event) {
  showOrHide(event, elementStringPopupAddCard, popupAddCard);
});

buttonClosePopupAddCard.addEventListener('click', function(event) {
  showOrHide(event, elementStringPopupAddCard, popupAddCard);
})