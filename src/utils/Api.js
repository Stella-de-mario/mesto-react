class Api {
    constructor( baseUrl ) {
      this._baseUrl = baseUrl;
      this._headers = {
        authorization: "08894665-6e9a-4a2c-9b4e-7ef096cc96fb",
        "Content-Type": "application/json",
      };
    }
  
    _getResponse(res) {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  
    getUserInfo() {
      return fetch(`${this._baseUrl}/users/me`, {
        method: "GET",
        headers: this._headers,
      }).then(this._getResponse);
    }
  
    getCards() {
      return fetch(`${this._baseUrl}/cards`, {
        method: "GET",
        headers: this._headers,
      }).then(this._getResponse);
    }
  
    setNewUserInfo(data) {
      return fetch(`${this._baseUrl}/users/me`, {
        method: "PATCH",
        headers: this._headers,
        body: JSON.stringify({
          name: data.name,
          about: data.about,
        }),
      }).then(this._getResponse);
    }
  
    setNewCardsInfo(card) {
      return fetch(`${this._baseUrl}/cards`, {
        method: "POST",
        headers: this._headers,
        body: JSON.stringify({
          name: card.title,
          link: card.link,
        }),
      }).then(this._getResponse);
    }
  
    deleteCard(cardId) {
      return fetch(`${this._baseUrl}/cards/${cardId}`, {
        method: "DELETE",
        headers: this._headers,
      }).then(this._getResponse);
    }
  
    addLikeCard(cardId) {
      return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
        method: "PUT",
        headers: this._headers,
      }).then(this._getResponse);
    }
  
    deleteLikeCard(cardId) {
      return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
        method: "DELETE",
        headers: this._headers,
      }).then(this._getResponse);
    }
  
    setUserAvatar(userAvatar) {
      return fetch(`${this._baseUrl}/users/me/avatar`, {
        method: "PATCH",
        headers: this._headers,
        body: JSON.stringify({
          avatar: userAvatar.avatar,
        }),
      }).then(this._getResponse);
    }
}

export const api = new Api(
  "https://mesto.nomoreparties.co/v1/cohort-43",
  "08894665-6e9a-4a2c-9b4e-7ef096cc96fb"
);
