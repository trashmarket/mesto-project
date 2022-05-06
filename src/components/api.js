const config = {
  baseUrl: 'https://nomoreparties.co/v1/plus-cohort-9',
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
  return fetch(`${config.baseUrl}/users/me/avatar`,{
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      avatar: link
    })
  }).then(checkRes)
}

export const showError = (rej) => {
  console.log(rej)
}

export const deleteLike = (cardId) => {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`,{
    method: 'DELETE',
    headers: config.headers
  }).then(checkRes)
}

export const putLike = (cardId) => {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`,{
    method: 'PUT',
    headers: config.headers
  }).then(checkRes)
}

export const deleteCard = (id) => {
  return fetch(`${config.baseUrl}/cards/${id}`,{
    method: 'DELETE',
    headers: config.headers
  }).then(checkRes)
}

export const addNewCard = (name, link) => {
  return fetch(`${config.baseUrl}/cards`,{
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
  return fetch(`${config.baseUrl}/users/me`, {
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
  return fetch(`${config.baseUrl}/users/me`, {
    headers: config.headers
  })
    .then(checkRes)
}

export const getCards = () => {
  return fetch(`${config.baseUrl}/cards`, {
    headers: config.headers
  })
  .then(checkRes)
}
