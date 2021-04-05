class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  // GET https://around.nomoreparties.co/v1/groupId/cards
  getCardList() {
    return fetch(this._baseUrl + '/cards', {
      headers: this._headers,
    }).then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject('Error! ' + res.statusText);
      }
    });
  }

  // GET https://around.nomoreparties.co/v1/groupId/users/me
  getUserInfo() {
    return fetch(this._baseUrl + '/users/me', {
      headers: this._headers,
    }).then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject('Error! ' + res.statusText);
      }
    });
  }

  // PATCH https://around.nomoreparties.co/v1/groupId/users/me
  setUserInfo(data) {
    return fetch(this._baseUrl + '/users/me', {
      headers: this._headers,
      method: 'PATCH',
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject('Error! ' + res.statusText);
      }
    });
  }

  // PATCH https://around.nomoreparties.co/v1/groupId/users/me/avatar
  setUserAvatar(data) {
    return fetch(this._baseUrl + '/users/me/avatar', {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject('Error! ' + res.statusText);
      }
    });
  }

  // POST https://around.nomoreparties.co/v1/groupId/cards
  addCard(data) {
    return fetch(this._baseUrl + '/cards', {
      headers: this._headers,
      method: 'POST',
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject('Error! ' + res.statusText);
      }
    });
  }

  // DELETE https://around.nomoreparties.co/v1/groupId/cards/cardId
  removeCard(cardId) {
    return fetch(this._baseUrl + '/cards/' + cardId, {
      method: 'DELETE',
      headers: this._headers,
    }).then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject('Error! ' + res.statusText);
      }
    });
  }

  updateLikes(cardId, liked) {
    let method = 'DELETE';
    if (liked) method = 'PUT';

    return fetch(this._baseUrl + '/cards/likes/' + cardId, {
      method: method,
      headers: this._headers,
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject('Error! ' + res.statusText);
    });
  }
}

export default new Api({
  baseUrl: 'https://around.nomoreparties.co/v1/group-6',
  headers: {
    authorization: '7de1d63b-0ba0-4390-89a7-2fe6bdf9eada',
    'Content-Type': 'application/json',
  },
});
