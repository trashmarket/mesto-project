export default class UserInfo {
  constructor({name, about, userId, userAvatar}) {
    this._name = name;
    this._about = about;
    this._userId = userId;
    this._userAvatar = userAvatar;
    this._profileTitle = document.querySelector('.profile__title');
    this._profileSubTitle = document.querySelector('.profile__sub-title');
    this._profileAvatar = document.querySelector('.profile__avatar');
  }

  getUserInfo (name, about, avatar, id) {
    if (name && about && avatar && id) {
      this._name = name;
      this._about = about;
      this._userAvatar = avatar;
      this._userId = id;
    }
  return {
    name: this._name,
    about: this._about,
    id: this._userId,
    avatar: this._userAvatar,
  };
  }


  setUserInfo () {
    this._profileTitle.textContent = this._name
    this._profileSubTitle.textContent = this._about;
    this._profileAvatar.style.backgroundImage =`url(${this._userAvatar})`;
    this._profileAvatar.id = this._userId;
  }
}

