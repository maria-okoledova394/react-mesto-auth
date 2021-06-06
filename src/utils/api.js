class Api{
    constructor(config) {
      this._url = config.url;
      this._headers = config.headers;
    }

    _checkResponse = (res) =>{
      if(res.ok){
        return res.json();    
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  
    getInitialCards() {
      return fetch(`${this._url}cards`, {
          method: "GET",
          headers: this._headers
        }).then(this._checkResponse)
    }

    addCard(data){
      return fetch(`${this._url}cards`, {
        method: "POST",
        headers: this._headers,
        body: JSON.stringify(data)
      })
      .then(this._checkResponse)
    }

    removeCard(_id) {
      return fetch(`${this._url}cards/${_id}`, {
        method: "DELETE",
        headers: this._headers,
      })
      .then(this._checkResponse)
    }

    getProfileInfo() {
      return fetch(`${this._url}users/me`, {
          method: "GET",
          headers: this._headers
        }).then(this._checkResponse)
    }

    changeProfileInfo(data) {
      return fetch(`${this._url}users/me`, {
          method: "PATCH",
          headers: this._headers,
          body: JSON.stringify(data)
        }).then(this._checkResponse)
    }

    updateAvatar(data) {
      return fetch(`${this._url}users/me/avatar`, {
          method: "PATCH",
          headers: this._headers,
          body: JSON.stringify(data)
        }).then(this._checkResponse)
    }

    removeLike(_id) {
      return fetch(`${this._url}cards/likes/${_id}`, {
        method: "DELETE",
        headers: this._headers,
      })
      .then(this._checkResponse)
    }

    likeCard(_id) {
      return fetch(`${this._url}cards/likes/${_id}`, {
        method: "PUT",
        headers: this._headers,
      })
      .then(this._checkResponse)
    }

    changeLikeCardStatus(_id, isLiked) {
      if (isLiked) {
        return this.likeCard(_id);
      }
      else {        
        return this.removeLike(_id);
      }
    }
}

const api = new Api({
  url: "https://mesto.nomoreparties.co/v1/cohort-20/",
  headers: {
    "content-type": "application/json",
    "Authorization": "d9c7d5d0-8d7b-4c75-89cd-3f307d29d79f"
  }
})


export default api;