export default class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

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

  addCard(data) {
    return fetch(this._baseUrl + '/cards', {
      method: 'POST',
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
    return fetch(this._baseUrl + '/cards/' + cardId + '/likes/', {
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
