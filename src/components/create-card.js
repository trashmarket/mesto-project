
import {openPopup} from './modal.js';
import Api from './api.js';
const request = new Api;
const popupImage = document.querySelector('.popup_type_show-image');
const subTitleImageCard = popupImage.querySelector('.popup__subtitle');
const popupContentImageCard = popupImage.querySelector('.popup__image');





export default class СreateCard {
  constructor(paramCard, templateCards) {

    this.link = paramCard.link;
    this.title = paramCard.title;
    this.ownerId = paramCard.ownerId;
    this.likes = paramCard.likes;
    this.idCard = paramCard.idCard;
    this.selectorActiveLike = paramCard.selectorActiveLike;
    this.myId = paramCard.myId;

    this.card = templateCards.card;
    this.cardImg = templateCards.cardImg;
    this.cardTitle = templateCards.cardTitle;
    this.likeButton = templateCards.likeButton;
    this.trashButton = templateCards.trashButton;
    this.item = templateCards.item;
    this.outputLikes = templateCards.outputLikes;



  }




  _removeCard(item, idCard) {
    request.deleteCard(idCard)
    .then(()=>item.remove())


  }

  _addClassOrRemove(element , addClass, removeClass) {
    if (addClass) {
      element.classList.add(addClass);
    } else {
      element.classList.remove(removeClass);
    }
  }


  _listenHeartButton(likeButton, idCard, selectorActiveLike, outputLikes) {
    if (!likeButton.classList.contains(selectorActiveLike)) {
      request.putLike(idCard).then(card => {
        likeButton.classList.add(selectorActiveLike);
        outputLikes.textContent = card.likes.length ? card.likes.length : '';
      });
    } else {
      request.deleteLike(idCard).then(card => {
        likeButton.classList.remove(selectorActiveLike);
        outputLikes.textContent = card.likes.length ? card.likes.length : '';
      });
    }
  }

  _makerPopupImg(title, link , subTitleImage, popupContentImage) {
    subTitleImage.textContent = title;
    popupContentImage.src = link;
    popupContentImage.alt = title;
  }

  _listenImg(linkImg, titleimg, subTitleImage, popupContentImage, popupImage) {
    const title = titleimg;
    const link = linkImg;
    this._makerPopupImg(title, link, subTitleImage, popupContentImage);
    openPopup(popupImage);
  }

  create() {


    if (!this.ownerId.includes(this.myId)) this.trashButton.remove();

    const booleMylike = this.likes.some(person => person._id.includes(this.myId));
    (!booleMylike) ? this._addClassOrRemove(this.likeButton, null, this.selectorActiveLike) : this._addClassOrRemove(this.likeButton, this.selectorActiveLike, null);


    this.outputLikes.textContent = (this.likes.length) ? this.likes.length : '';

    this.trashButton.addEventListener('click', () => {
      this._removeCard(this.item, this.idCard);
    });

    this.likeButton.addEventListener('click', () => {
      this._listenHeartButton(this.likeButton, this.idCard, this.selectorActiveLike, this.outputLikes);
    });

    this.cardImg.addEventListener('click', (event) => this._listenImg(this.link, this.title, subTitleImageCard, popupContentImageCard, popupImage));

    this.cardImg.alt = this.title;
    this.cardImg.src = this.link;
    this.cardTitle.textContent = this.title;

    return this.card;
  }

}
