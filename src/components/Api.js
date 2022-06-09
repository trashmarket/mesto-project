import { axios } from "./axiosBluebird";
export default class Api {
  constructor (option) {
    this._option = option;
  }

  _checkRes(res) {
    if (res.ok) return res.json();
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  reloadAvatar(link) {
   return fetch(`${this._option.baseUrl}/users/me/avatar`,{
     method: 'PATCH',
     headers: this._option.headers,
     body: JSON.stringify({
       avatar: link
     })
   }).then(this._checkRes)
  }

  showError(rej) {
    console.log(rej)
  }

  deleteLike(cardId) {
   return fetch(`${this._option.baseUrl}/cards/likes/${cardId}`,{
     method: 'DELETE',
     headers: this._option.headers
   }).then(this._checkRes)
  }

  putLike(cardId) {
   return fetch(`${this._option.baseUrl}/cards/likes/${cardId}`,{
     method: 'PUT',
     headers: this._option.headers
   }).then(this._checkRes)
  }

  deleteCard(id) {
   return fetch(`${this._option.baseUrl}/cards/${id}`,{
     method: 'DELETE',
     headers: this._option.headers
   }).then(this._checkRes)
  }

  addNewCard(name, link) {
   return fetch(`${this._option.baseUrl}/cards`,{
     method: 'POST',
     headers: this._option.headers,
     body: JSON.stringify({
       name: name,
       link: link
     })
   })
   .then(this._checkRes)
  }

  editingProfile(name, about) {
   return fetch(`${this._option.baseUrl}/users/me`, {
     method: 'PATCH',
     headers: this._option.headers,
     body: JSON.stringify({
       name: name,
       about: about
     })
   })
   .then(this._checkRes)
  }

  getUser() {
   return fetch(`${this._option.baseUrl}/users/me`, {
     headers: this._option.headers
   })
    .then(this._checkRes)
  }

  getCards() {
   return fetch(`${this._option.baseUrl}/cards`, {
     headers: this._option.headers
   })
   .then(this._checkRes)
  }
}