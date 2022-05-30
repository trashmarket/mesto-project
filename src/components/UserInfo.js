// export default class UserInfo {
//   constructor({name, info}) {
//     this.name = name;
//     this.info = info;
//     this.profileTitle = document.querySelector('.profile__title');
//     this.profileSubTitle = document.querySelector('.profile__sub-title');
//     this.profileAvatar = document.querySelector('.profile__avatar');
//   }

//   getUserInfo (api) {
//    return api().then(
//       (res) => {
//        this.profileTitle.textContent = res.name;
//        this.profileSubTitle.textContent = res.about;
//        this.profileAvatar.style.backgroundImage = `url(${res.avatar})`;
//        return res._id;
//      }
//    );
//   }

//   setUserInfo (api) {
//     return api(this.name, this.info);
//   }
// }

export default class UserInfo {
  constructor({name, about, userId, userAvatar}) {
    this._name = name;
    this._about = about;
    this._userId = userId;
    this._userAvatar = userAvatar;
    this._profileTitle = document.querySelector('.profile__title');
    this._profileSubTitle = document.querySelector('.profile__sub-title');
    this._profileAvatar = document.querySelector('.profile__avatar');

    this.setUserInfo({name, about, userAvatar})
  }

  getUserInfo () {
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
    this._profileAvatar.src = this._avatarUserSet;
  }
}

