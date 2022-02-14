const popup = document.querySelector('.popup');
const profileButtonPopup = document.querySelector('.profile__update-profile');
const popupClose = popup.querySelector('.popup__close');
const popupInputs = popup.querySelectorAll('.popup__input');
const profileTitle = document.querySelector('.profile__title');
const profileSubTitle = document.querySelector('.profile__sub-title');
const title = popupInputs[0];
const subtitle = popupInputs[1];

const showOrHide = function (event, popup) {
  let elementString = popup.className.split(' ')[0];

  if (event.target.closest('.' + elementString)) {
    popup.classList.remove('popup_active');
    title.value = profileTitle.textContent.trim();
    subtitle.value = profileSubTitle.textContent.trim();
  } else {
    popup.classList.add('popup_active')
  }
}

const formSubmitHandler = function (event) {
  event.preventDefault();

  profileTitle.textContent = title.value;
  profileSubTitle.textContent = subtitle.value;
  popup.classList.remove('popup_active');
}

profileButtonPopup.addEventListener('click', function (event) {
  showOrHide(event, popup)
});

popupClose.addEventListener('click', function (event) {
  showOrHide(event, popup)
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
