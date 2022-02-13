import Popup from "./Popup.js"

export default class PopupDelete extends Popup {
  constructor(popupSelector, { handleRemove }) {
    super(popupSelector);
    this._btnDelete = this._popup.querySelector('.form__save')
    this._handleRemove = handleRemove
    this._cardInfo = {}

  }

  open(card) {
    super.open()
    return this._cardInfo = card
  }

  setEventListeners() {
    super.setEventListeners()
    this._btnDelete.addEventListener('click', () => {
      this._handleRemove(this._cardInfo)
    })
  }
}