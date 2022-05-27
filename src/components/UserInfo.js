export default class UserInfo {
  constructor({name, info}) {
    this.name = name;
    this.info = info;
    this.profileTitle = document.querySelector('.profile__title');
    this.profileSubTitle = document.querySelector('.profile__sub-title');
    this.profileAvatar = document.querySelector('.profile__avatar');
  }

  getUserInfo (api) {
   return api().then(
      (res) => {
       this.profileTitle.textContent = res.name;
       this.profileSubTitle.textContent = res.about;
       this.profileAvatar.style.backgroundImage = `url(${res.avatar})`;
       return res._id;
     }
   );
  }

  setUserInfo (api) {
    return api(this.name, this.info);
  }
}