
import Popup from "./Popup.js";

export default class PopupWithForm extends Popup{
constructor(popupSelector, submitHandler){
  super(popupSelector)
  this._form = this._popup.querySelector('.form')
  this._inputsList = Array.from(this._form.querySelectorAll('.form__input'))
  this._submitHandler = submitHandler
}

_getInputValues(){
  const inputValues = {};
  this._inputsList.forEach((input) => {
    inputValues[input.name] = input.value;
    console.log(input.name)
  });
  return inputValues

}

setEventListeners(){
  super.setEventListeners()
  this._popup.addEventListener('submit', (evt)=>{
    evt.preventDefault();
    this._submitHandler(this._getInputValues())
  })
}

close(){
  super.close()
  this._form.reset();
}
}