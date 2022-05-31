export default class Card {
  constructor(paramCard, templateCards, api, handleCardClick) {
    this._link = paramCard.link;
    this._title = paramCard.title;
    this._ownerId = paramCard.ownerId;
    this._likes = paramCard.likes;
    this._idCard = paramCard.idCard;
    this._selectorActiveLike = 'photo-cards__button_active';
    this._myId = paramCard.myId;

    this.templateCards = document.querySelector(templateCards).content;
    this._card = this.templateCards.cloneNode(true);
    this._cardImg = this._card.querySelector('.photo-cards__img');
    this._cardTitle = this._card.querySelector('.photo-cards__title');
    this._likeButton = this._card.querySelector('.photo-cards__button');
    this._trashButton = this._card.querySelector('.photo-cards__trash-button');
    this._item = this._card.querySelector('.photo-cards__item') ? this._card.querySelector('.photo-cards__item') : this._card ;
    this._outputLikes = this._card.querySelector('.photo-cards__count')

    this._api = api;
    this._handleCardClick = handleCardClick // функция-колбек показа попап картинки
  }

  _creatCard() {
    this._card = userTemplate.querySelector(this.templateSelectorCards).cloneNode(true);
  }

  _removeCard() {
    this._api.deleteCard(this._idCard)
      .then(() => this._item.remove())
      .catch(this.showError)

  }

  _addClassOrRemove(addClass) {
    if (addClass) {
      this._likeButton.classList.add(null);
    } else {
      this._likeButton.classList.remove(this._selectorActiveLike);
    }
  }


  _listenHeartButton() {
    if (!this._likeButton.classList.contains(this._selectorActiveLike)) {
      this._api.putLike(this._idCard).then(card => {
        this._likeButton.classList.add(this._selectorActiveLike);
        this._outputLikes.textContent = card.likes.length ? card.likes.length : '';
      }).catch(this.showError);
    } else {
      this._api.deleteLike(this._idCard).then(card => {
        this._likeButton.classList.remove(this._selectorActiveLike);
        this._outputLikes.textContent = card.likes.length ? card.likes.length : '';
      }).catch(this.showError);
    }
  }


  _listenImg() {
    this._handleCardClick(this._link, this._title)
  }

  _setEventListeners() {
    this._trashButton.addEventListener('click', () => {
      this._removeCard();
    });

    this._likeButton.addEventListener('click', () => {
      this._listenHeartButton();
    });

    this._cardImg.addEventListener('click', (event) => this._listenImg());
  }

  create() {


    this._setEventListeners();

    if (!this._ownerId.includes(this._myId)) this._trashButton.remove();

    const booleMylike = this._likes.some(person => person._id.includes(this._myId));
    (!booleMylike) ? this._addClassOrRemove(true) : this._addClassOrRemove(false);

    this._outputLikes.textContent = (this._likes.length) ? this._likes.length : '';
    this._cardImg.alt = this._title;
    this._cardImg.src = this._link;
    this._cardTitle.textContent = this._title;

    return this._card;
  }

}
