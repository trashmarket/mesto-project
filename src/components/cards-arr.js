export const cardsArr = [
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




// Skip to content
// Search or jump to…
// Pull requests
// Issues
// Marketplace
// Explore

// @santip-a
// artcherenkov
// /
// mesto
// Public
// Code
// Issues
// Pull requests
// Actions
// Projects
// Wiki
// Security
// Insights
// mesto/src/pages/index.js /
// @artcherenkov
// artcherenkov refactor: refactor cards list and user info initialization
// Latest commit 7b1469b on 8 May 2021
//  History
//  1 contributor
// 234 lines (219 sloc)  6.85 KB

// import Api from "../components/Api";
// import Adapter from "../components/Adapter";
// import Card from "../components/Card.js";
// import FormValidator from "../components/FormValidator.js";
// import Section from "../components/Section.js";
// import PopupWithImage from "../components/PopupWithImage.js";
// import PopupWithForm from "../components/PopupWithForm.js";
// import UserInfo from "../components/UserInfo.js";
// import {
//   VALIDATION_CONFIG,
//   addPlaceButtonElement,
//   addPlaceFormElement,
//   addPlacePopupSelector,
//   cardTemplateSelector,
//   editProfileButtonElement,
//   editProfileFormElement,
//   editProfileInputsList,
//   editProfilePopupSelector,
//   imagePopupSelector,
//   placesListSelector,
//   profileInfoSelector,
//   profileNameSelector,
//   submitDeletionSelector,
//   changeAvatarPopupSelector,
//   changeAvatarButtonElement,
//   changeAvatarFormElement,
//   profileAvatarSelector,
// } from "../utils/constants.js";

// import "./index.css";
// import PopupWithSubmit from "../components/PopupWithSubmit";

// // Инициализация API
// const api = new Api({
//   baseUrl: "https://mesto.nomoreparties.co/v1/cohort-23",
//   headers: {
//     authorization: "5a89c943-0743-4e83-b516-7727da7c758b",
//     "Content-Type": "application/json",
//   },
// });

// // Инициализация валидаторов
// const editProfileValidator = new FormValidator(
//   VALIDATION_CONFIG,
//   editProfileFormElement
// );
// const addPlaceValidator = new FormValidator(
//   VALIDATION_CONFIG,
//   addPlaceFormElement
// );
// const changeAvatarValidator = new FormValidator(
//   VALIDATION_CONFIG,
//   changeAvatarFormElement
// );
// editProfileValidator.enableValidation();
// addPlaceValidator.enableValidation();
// changeAvatarValidator.enableValidation();

// // Инициализация попапа с изображением
// const imagePopup = new PopupWithImage(imagePopupSelector);
// imagePopup.setEventListeners();

// // Инициализация попапа с подтверждением удаления
// const submitPopup = new PopupWithSubmit(submitDeletionSelector);
// submitPopup.setEventListeners();

// // Инициализация попапа редактирования профиля
// const onEditProfileFormSubmit = (formData) => {
//   editProfilePopup.setLoading(true);
//   api
//     .editUserInfo(Adapter.adaptUserInfoToServer(formData))
//     .then((info) => {
//       userInfo.setUserInfo(Adapter.adaptUserInfoToClient(info));
//       editProfilePopup.close();
//     })
//     .catch((err) => console.log(err))
//     .finally(() => editProfilePopup.setLoading(false));
// };
// const onEditProfileFormReset = () => {
//   editProfileValidator.resetValidationErrors();
// };
// const editProfilePopup = new PopupWithForm(
//   editProfilePopupSelector,
//   onEditProfileFormSubmit,
//   onEditProfileFormReset
// );
// editProfilePopup.setEventListeners();

// // Инициализация попапа добавления места
// const onAddPlaceFormSubmit = (formData) => {
//   addPlacePopup.setLoading(true);
//   api
//     .postCard(Adapter.adaptCardToServer(formData))
//     .then((card) => {
//       const cardElement = createCard(Adapter.adaptCardToClient(card));
//       cardsList.addItem(cardElement, "prepend");
//       addPlacePopup.close();
//     })
//     .catch((err) => console.log(err))
//     .finally(() => addPlacePopup.setLoading(false));
// };
// const onAddPlaceFormReset = () => {
//   addPlaceValidator.resetValidationErrors();
// };
// const addPlacePopup = new PopupWithForm(
//   addPlacePopupSelector,
//   onAddPlaceFormSubmit,
//   onAddPlaceFormReset
// );
// addPlacePopup.setEventListeners();

// // Инициализация попапа изменения аватара
// const onChangeAvatarSubmit = (formData) => {
//   changeAvatarPopup.setLoading(true);
//   api
//     .changeAvatar(formData.avatarUrl)
//     .then((res) => {
//       userInfo.setUserInfo(Adapter.adaptUserInfoToClient(res));
//       changeAvatarPopup.close();
//     })
//     .catch((err) => console.log(err))
//     .finally(() => changeAvatarPopup.setLoading(false));
// };
// const onChangeAvatarReset = () => {
//   changeAvatarValidator.resetValidationErrors();
// };
// const changeAvatarPopup = new PopupWithForm(
//   changeAvatarPopupSelector,
//   onChangeAvatarSubmit,
//   onChangeAvatarReset
// );
// changeAvatarPopup.setEventListeners();

// // Инициализация списка карточек и информации о пользователе
// let cardsList;
// let userInfo;
// const onCardClick = (data) => () => imagePopup.open(data);
// const onLikeClick = (data) => {
//   return function (isLiked) {
//     if (!isLiked) {
//       api
//         .setLike(data._id)
//         .then((data) => this.setLike(data.likes))
//         .catch((err) => console.log(err));
//     } else {
//       api
//         .deleteLike(data._id)
//         .then((data) => this.deleteLike(data.likes))
//         .catch((err) => console.log(err));
//     }
//   };
// };
// const onDeleteClick = (data) => {
//   return function () {
//     submitPopup.open();
//     submitPopup.setSubmitAction(() => {
//       return api
//         .deleteCard(data._id)
//         .then(() => this.removeCard())
//         .catch((err) => console.log(err));
//     });
//   };
// };
// const createCard = (data) => {
//   const card = new Card(
//     {
//       data,
//       isLiked: data.likes.some(
//         (like) => like._id === userInfo.getUserInfo().id
//       ),
//       isMine: data.owner._id === userInfo.getUserInfo().id,
//       handleCardClick: onCardClick(data),
//       handleLikeClick: onLikeClick(data),
//       handleDeleteClick: onDeleteClick(data),
//     },
//     cardTemplateSelector
//   );
//   return card.createCard();
// };
// const cardRenderer = (item) => {
//   const cardElement = createCard(item);
//   cardsList.addItem(cardElement, "append");
// };

// const initCardsList = (cards) => {
//   const adaptedCards = cards.map((card) => Adapter.adaptCardToClient(card));
//   cardsList = new Section(
//     {
//       items: adaptedCards,
//       renderer: cardRenderer,
//     },
//     placesListSelector
//   );

//   return cardsList;
// };
// const initUserInfo = (user) => {
//   userInfo = new UserInfo({
//     data: Adapter.adaptUserInfoToClient(user),
//     nameSelector: profileNameSelector,
//     infoSelector: profileInfoSelector,
//     avatarSelector: profileAvatarSelector,
//   });

//   return userInfo;
// };

// Promise.all([api.getInitialCards(), api.getUserInfo()])
//   .then(([cards, user]) => {
//     userInfo = initUserInfo(user);
//     cardsList = initCardsList(cards);
//     cardsList.renderItems();
//   })
//   .catch((err) => console.log(err));

// // Объявление обработчиков кнопок открытия попапов
// const onEditProfileButtonClick = () => {
//   const dataToFill = userInfo.getUserInfo();
//   editProfilePopup.open();
//   editProfileInputsList.forEach(
//     (input) => (input.value = dataToFill[input.name])
//   );
// };
// const onAddPlaceButtonClick = () => {
//   addPlacePopup.open();
// };
// const onChangeAvatarClick = () => {
//   changeAvatarPopup.open();
// };

// // Навешивание обработчиков кнопкам
// editProfileButtonElement.addEventListener("click", onEditProfileButtonClick);
// addPlaceButtonElement.addEventListener("click", onAddPlaceButtonClick);
// changeAvatarButtonElement.addEventListener("click", onChangeAvatarClick);
