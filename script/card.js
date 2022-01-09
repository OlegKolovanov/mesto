export default class Card {

  constructor(data, cardSelector, openPicPopup){
    this.cardSelector = cardSelector;
    this._title = data.title;
    this._link = data.link;
    this._alt = data.title;
    this._openPicPopup = openPicPopup;
  }

  _getTemplate(){
    const cardElement = this.cardSelector.querySelector('.element').cloneNode(true);

    this._picImage = cardElement.querySelector('.element__photo');
    this._picTitle = cardElement.querySelector('.element__title');
    this._picLike = cardElement.querySelector('.element__like-button');
    this._picTrash = cardElement.querySelector('.element__trash');
    
    return cardElement;
  }

  getView(){
    this._element = this._getTemplate();
    this._setEventLisener()
    this._picImage.src = this._link;
    this._picImage.alt = this._title;
    this._picTitle.textContent = this._title; 

    return this._element
  }

  _setEventLisener(){
    this._picImage.addEventListener('click', (evt)=>{
      evt.preventDefault();
      this._openPicPopup(this._link, this._title)
    });
    this._handlePicRemove();
    this._handlePicLike();
  }

  _handlePicLike(){
    this._picLike.addEventListener('click', ()=>{
      this._picLike.classList.toggle('element__like-button_active')
    })
  }

  _handlePicRemove(){
    this._picTrash.addEventListener('click', (event)=>{
      this._element.remove()
    })
  }

}