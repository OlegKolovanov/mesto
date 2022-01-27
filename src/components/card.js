export default class Card {

  constructor(data, cardSelector, openPicPopup){
    this._cardSelector = cardSelector;
    this._title = data.name;
    this._link = data.link;
    this._openPicPopup = openPicPopup;
  }

  _getTemplate(){
    const cardElement = this._cardSelector.querySelector('.element').cloneNode(true);

    this._picImage = cardElement.querySelector('.element__photo');
    this._picTitle = cardElement.querySelector('.element__title');
    this._picLike = cardElement.querySelector('.element__like-button');
    this._picTrash = cardElement.querySelector('.element__trash');
    
    return cardElement;
  }

  getView(){
    this._element = this._getTemplate();
    this._setEventListener()
    this._picImage.src = this._link;
    this._picImage.alt = this._title;
    this._picTitle.textContent = this._title; 

    return this._element
    
  }

  _setEventListener(){
    this._picImage.addEventListener('click', (evt)=>{
      evt.preventDefault();
      this._openPicPopup(this._link, this._title)
    });
    this._picTrash.addEventListener('click', (evt) =>{
      this._handlePicRemove(evt)
    })
    this._picLike.addEventListener('click', (evt)=>{
      this._handlePicLike(evt)
    })
  }

  _handlePicLike(evt){
    evt.target.classList.toggle('element__like-button_active')
  }

  _handlePicRemove(evt){
    evt.target.closest('.element').remove();
  }

}