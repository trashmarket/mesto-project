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

  getUserInfo (name, about) {
    if (name !== undefined && about !== undefined) {
      this._name = name;
      this._about = about;
    }
  return {
    name: this._name,
    about: this._about,
    id: this._id,
    avatar: this._avatar,
  };
  }


  setUserInfo ({name, about, userAvatar}) {
    this._nameUserSet = name;
    this._aboutUserSet = about;
    this._avatarUserSet = userAvatar;

    this._profileTitle.textContent = this._nameUserSet;
    this._profileSubTitle.textContent = this._aboutUserSet;
    this._profileAvatar.style.backgroundImage =`url(${this._avatarUserSet})`;
  }
}

