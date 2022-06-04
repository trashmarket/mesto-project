export default class UserInfo {
  constructor({id, name, about, avatar}) {
    this._id = id;
    this._name = name;
    this._about = about;
    this._avatar = avatar;
    
  }

  getUserInfo () {
    return {
      id: this._id,
      name: this._name.textContent,
      about: this._about.textContent,
      avatar: this._avatarImage
    }
  }


  setUserInfo (id, name, about, avatar) {
    this._id = id;
    this._name.textContent = name;
    this._about.textContent = about;
    this._avatar.style.backgroundImage = `url(${avatar})`;
    this._avatarImage = avatar;
  }
}

