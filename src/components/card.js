export default class Card {

  constructor({ data, userId, addLikeCard, openDeletePopup }, cardSelector, openPicPopup,) {
    this._cardSelector = cardSelector;
    this._title = data.name;
    this._link = data.link;
    this._openPicPopup = openPicPopup;
    this._data = data;
    this._idOwner = data.owner.id
    this._id = data._id
    this._userId = userId;
    this._addLikeCard = addLikeCard;
    this._openDeletePopup = openDeletePopup;


  }

  deleteCard() {
    this._element.remove()
    this._element = null;
  }

  getUserId() {
    return this._id
  }

  _getTemplate() {
    const cardElement = this._cardSelector.querySelector('.element').cloneNode(true);

    this._picImage = cardElement.querySelector('.element__photo');
    this._picTitle = cardElement.querySelector('.element__title');
    this._picLike = cardElement.querySelector('.element__like-button');
    this._picTrash = cardElement.querySelector('.element__trash');
    this._picScoreLike = cardElement.querySelector('.element__like-score')



    return cardElement;

  }

  getView() {
    this._element = this._getTemplate();
    this._setEventListener()
    this._picImage.src = this._link;
    this._picImage.alt = this._title;
    this._picTitle.textContent = this._title;

    // this._data.likes.forEach(elem => {
    //   if (elem._id === this._userId) {
    //     this._placeButtonLike.classList.add("place__button-like_active");
    //   }
    // });
    if (this._idOwner != this._userId) {
      this._picTrash.remove();
    }


    return this._element

  }

  _setEventListener() {
    this._picImage.addEventListener('click', (evt) => {
      evt.preventDefault();
      this._openPicPopup(this._link, this._title)
    });
    this._picTrash.addEventListener('click', (evt) => {
      evt.preventDefault();
      this._openDeletePopup()
    })
    this._picLike.addEventListener('click', this._addLikeCard)
  }

  _handlePicLike(evt) {
    evt.target.classList.toggle('element__like-button_active')
  }

  // _handlePicRemove(evt){
  //   evt.target.closest('.element').remove();
  // }

  like(length) {
    this._picLike.classList.toggle('element__like-button_active')
    this._picScoreLike.textContent = length
  }

}