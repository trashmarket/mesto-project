/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pages_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/index.css */ \"./pages/index.css\");\n\nvar popupProfile = document.querySelector('.profile-popup');\nvar profileButtonPopup = document.querySelector('.profile__update-profile');\nvar popupCloseButton = popupProfile.querySelector('.popup__close');\nvar profileTitle = document.querySelector('.profile__title');\nvar profileSubTitle = document.querySelector('.profile__sub-title');\nvar titleProfilePopup = popupProfile.querySelector('.profile-popup-title');\nvar subtitleProfilePopup = popupProfile.querySelector('.profile-popup-subtitle');\n\nvar openPopup = function openPopup(popup) {\n  popup.classList.add('popup_active');\n};\n\nvar closePopup = function closePopup(popup) {\n  popup.classList.remove('popup_active');\n};\n\nvar closePopupProfile = function closePopupProfile(event) {\n  closePopup(popupProfile);\n};\n\nvar cleaneInputs = function cleaneInputs(inputs) {\n  inputs.forEach(function (item) {\n    return item.value = '';\n  });\n};\n\nvar changeProfile = function changeProfile(event) {\n  event.preventDefault();\n  profileTitle.textContent = titleProfilePopup.value;\n  profileSubTitle.textContent = subtitleProfilePopup.value;\n  closePopup(popupProfile);\n};\n\nprofileButtonPopup.addEventListener('click', function (event) {\n  restoreInputs();\n  openPopup(popupProfile);\n});\n\nfunction restoreInputs() {\n  titleProfilePopup.value = profileTitle.textContent.trim();\n  subtitleProfilePopup.value = profileSubTitle.textContent.trim();\n}\n\npopupCloseButton.addEventListener('click', closePopupProfile);\npopupProfile.addEventListener('submit', changeProfile); //card\n\nvar cardsArr = [{\n  name: 'Архыз',\n  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'\n}, {\n  name: 'Челябинская область',\n  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'\n}, {\n  name: 'Иваново',\n  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'\n}, {\n  name: 'Камчатка',\n  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'\n}, {\n  name: 'Холмогорский район',\n  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'\n}, {\n  name: 'Байкал',\n  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'\n}];\nvar cardTemplate = document.querySelector('#card').content;\nvar photeCardsList = document.querySelector('.photo-cards__list');\n\nvar appendNewCard = function appendNewCard(link, title, type) {\n  var card = cardTemplate.cloneNode(true);\n  var cardImg = card.querySelector('.photo-cards__img');\n  var cardTitle = card.querySelector('.photo-cards__title');\n  var likeButton = card.querySelector('.photo-cards__button');\n  var trashButton = card.querySelector('.photo-cards__trash-button');\n  var item = card.querySelector('.photo-cards__item');\n  trashButton.addEventListener('click', function (event) {\n    removeCard(item);\n  });\n  likeButton.addEventListener('click', listenHeartButton);\n  cardImg.addEventListener('click', function (event) {\n    return listenImg(link, title);\n  });\n  cardImg.alt = title;\n  cardImg.src = link;\n  cardTitle.textContent = title;\n\n  if (type === 'arr') {\n    photeCardsList.append(card);\n  } else {\n    photeCardsList.prepend(card);\n  }\n};\n\ncardsArr.forEach(function (item) {\n  var title = item.name;\n  var link = item.link;\n  appendNewCard(link, title, 'arr');\n}); // new form\n\nvar popupAddCard = document.querySelector('.popup_type_add-card');\nvar buttonAddForm = document.querySelector('.profile__button');\nvar buttonClosePopupAddCard = popupAddCard.querySelector('.popup__close');\nvar popupAddCardInputs = popupAddCard.querySelectorAll('.popup__input');\nvar popupAddCardInputText = popupAddCard.querySelector('.popup__name-new-card');\nvar popupAddCardInputLink = popupAddCard.querySelector('.popup__link-new-card');\n\nvar openPopupAddCard = function openPopupAddCard(event) {\n  openPopup(popupAddCard);\n  cleaneInputs(popupAddCardInputs);\n};\n\nbuttonAddForm.addEventListener('click', openPopupAddCard);\nbuttonClosePopupAddCard.addEventListener('click', function (event) {\n  closePopup(popupAddCard);\n});\n\nvar handleCardFormSubmit = function handleCardFormSubmit(event) {\n  event.preventDefault();\n  var title = popupAddCardInputText.value;\n  var link = popupAddCardInputLink.value;\n  if (title === '' || link === '') return;\n  appendNewCard(link, title);\n  closePopup(popupAddCard);\n  cleaneInputs(popupAddCardInputs);\n};\n\npopupAddCard.addEventListener('submit', handleCardFormSubmit); // like && trash can\n\nvar generalContainer = document.querySelector('.photo-cards__list');\nvar popupImage = document.querySelector('.popup-image');\nvar popupImageButton = popupImage.querySelector('.popup__close');\nvar subTitleImage = popupImage.querySelector('.popup__subtitle');\nvar popupContentImage = popupImage.querySelector('.popup__image');\npopupImageButton.addEventListener('click', function (event) {\n  closePopup(popupImage);\n});\n\nfunction makerPopupImg(title, link) {\n  subTitleImage.textContent = title;\n  popupContentImage.src = link;\n  popupContentImage.alt = title;\n}\n\nfunction listenHeartButton(event) {\n  var like = event.target;\n  like.classList.toggle('photo-cards__button_active');\n}\n\nfunction removeCard(card) {\n  card.remove();\n}\n\nfunction listenImg(linkImg, titleimg) {\n  var title = titleimg;\n  var link = linkImg;\n  makerPopupImg(title, link);\n  openPopup(popupImage);\n}\n\n//# sourceURL=webpack://mesto-project/./index.js?");

/***/ }),

/***/ "./pages/index.css":
/*!*************************!*\
  !*** ./pages/index.css ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://mesto-project/./pages/index.css?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;