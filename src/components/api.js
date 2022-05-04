const config = {
  baseurl: 'https://nomoreparties.co/v1/plus-cohort-9',
  headers: {
    authorization: '269d00fb-9633-4d7c-a362-c3582f6daca7',
    'Content-Type': 'application/json'
  }
}

const checkRes = (res) => {
  if (res.ok) return res.json();
   return Promise.reject(`Ошибка: ${res.status}`);
}

export const reloadAvatar = (link) => {
  return fetch(`${config.baseurl}/users/me/avatar`,{
    headers: config.headers,
    body: {
      avatar: link
    }
  }).then(checkRes)
}

export const showError = (rej) => {
  console.log(rej)
}

export const deleteLike = (cardId) => {
  return fetch(`${config.baseurl}/cards/likes/${cardId}`,{
    method: 'DELETE',
    headers: config.headers
  }).then(checkRes)
}

export const putLike = (cardId) => {
  return fetch(`${config.baseurl}/cards/likes/${cardId}`,{
    method: 'PUT',
    headers: config.headers
  }).then(checkRes)
}

export const deleteCard = (id) => {
  return fetch(`${config.baseurl}/cards/${id}`,{
    method: 'DELETE',
    headers: config.headers
  }).then(checkRes)
}

export const addNewCard = (name, link) => {
  return fetch(`${config.baseurl}/cards`,{
    method: 'POST',
    headers: config.headers,
    body: JSON.stringify({
      name: name,
      link: link
    })
  })
  .then(checkRes)
}

export const editingProfile = (name, about) => {
  return fetch(`${config.baseurl}/users/me`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      name: name,
      about: about
    })
  })
  .then(checkRes)
}

export const getUser = () => {
  return fetch(`${config.baseurl}/users/me`, {
    headers: config.headers
  })
    .then(checkRes)
}

export const getCards = () => {
  return fetch(`${config.baseurl}/cards`, {
    headers: config.headers
  })
  .then(checkRes)
}
