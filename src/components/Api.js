

export default class Api {
  constructor({ address, token, cohort }) {
    this._address = address
    this._token = token
    this._cohort = cohort
    console.log(address)
  }

  getCard() {
    return fetch(`${this._address}/v1/${this._cohort}/cards`, {
      headers: {
        authorization: this._token
      }
    })
      .then(response => {
        if (response.ok) {
          return response.json()
        }
        return Promise.reject(`Ошибка ${response.status}`)
      })
  }

  editInfoUser(data) {
    return fetch(`${this._address}/v1/${this._cohort}/users/me`, {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: data.name,
        about: data.hobby
      })
    })
      .then(response => {
        if (response.ok) {
          return response.json()
        }
        return Promise.reject(`Ошибка ${response.status}`)
      })
  }

  addCardUser(data) {
    return fetch(`${this._address}/v1/${this._cohort}/cards`, {
      method: 'POST',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: data.title,
        link: data.link
      })
    })
      .then(response => {
        if (response.ok) {
          return response.json()
        }
        return Promise.reject(`Ошибка ${response.status}`)
      })
  }

  getId() {
    return fetch(`${this._address}/v1/${this._cohort}/users/me`, {
      headers: {
        authorization: this._token
      }
    })
      .then(response => {
        if (response.ok) {
          return response.json()
        }
        return Promise.reject(`Ошибка ${response.status}`)
      })
  }

  likeCard(id) {
    return fetch(`${this._address}/v1/${this._cohort}/cards/${id}/likes`, {
      method: 'PUT',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        if (response.ok) {
          return response.json()
        }
        return Promise.reject(`Ошибка ${response.status}`)
      })
  }

  removeLikeCard(id) {
    return fetch(`${this._address}/v1/${this._cohort}/cards/${id}/likes`, {
      method: 'DELETE',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        if (response.ok) {
          return response.json()
        }
        return Promise.reject(`Ошибка ${response.status}`)
      })
  }

  removeCard(id) {
    return fetch(`${this._address}/v1/${this._cohort}/cards/${id}`, {
      method: 'DELETE',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        if (response.ok) {
          return response.json()
        }
        return Promise.reject(`Ошибка ${response.status}`)
      })
  }

  editAvatar(data) {
    return fetch(`${this._address}/v1/${this._cohort}/users/me/avatar`, {
      method: 'PATCH',
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        avatar: data.avatar
      })
    })
      .then(response => {
        if (response.ok) {
          return response.json()
        }
        return Promise.reject(`Ошибка ${response.status}`)
      })
  }
}