export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);;
    this._closeButton = this._popup.querySelector('.popup__close')
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    this._popup.classList.add('popup_active')
    document.addEventListener('keyup', this._handleEscClose)
  }


  _handleEscClose(evt) {
    if (evt.key === "Escape" || evt.key === "Esc") {
      this.close();
    }
  }

  _handleOverlayClick(evt) {
    if (evt.target === evt.currentTarget) {
      this.close();
    }
  }

  setEventListeners() {
    this._popup.addEventListener('click', (evt) => {
      this._handleOverlayClick(evt);

    });
    this._closeButton.addEventListener('click', () => {
      this.close()

    })
  }
  close() {
    this._popup.classList.remove('popup_active')
    document.removeEventListener('keyup', this._handleEscClose)
  }
}