export default class FormValidator {

  constructor(form, configValidation){
    this._form = form;
    this._inputsList = Array.from(this._form.querySelectorAll(configValidation.inputSelector));
    this._submitButtom = form.querySelector(configValidation.submitButtom);
    this._inactiveButtonClass = configValidation.inactiveButtonClass;
    this._inputErrorClass = configValidation.inputErrorClass;
    this._errorClass = configValidation.errorClass;
    
  }

  _showError(input) {
    const errorMessage = this._form.querySelector(`#${input.id}-error`);
    errorMessage.textContent = input.validationMessage;
    errorMessage.classList.add(this._errorClass);
    input.classList.add(this._inputErrorClass);
  }

  _hideError(input){
    const errorMessage = this._form.querySelector(`#${input.id}-error`);
    errorMessage.textContent = '';
    errorMessage.classList.remove(this._errorClass);
    input.classList.remove(this._inputErrorClass);
  }

  _checkInputValid(input){
    if (input.validity.valid){
      this._hideError(input)
    }else{
      this._showError(input, input.validationMessage)
    }
  }

  _setEventListeners(){
    this._inputsList.forEach((input)=>{
      input.addEventListener('input', () =>{
        this._checkInputValid(input);
        this._toggleButtonError();
      })
    })
  }

  _toggleButtonError(){
    if(this._hasInvalidInput(this._inputsList)){
      this._submitButtom.classList.add(this._inactiveButtonClass);
      this._submitButtom.disabled = true;
    }else{
      this._submitButtom.classList.remove(this._inactiveButtonClass);
      this._submitButtom.disabled = false;
    }
  }

  enableValidation(){
    this._form.addEventListener('sibmit', (evt)=>{
      evt.preventDefault();
    })
    this._setEventListeners();
  }

  _hasInvalidInput(){
    return this._inputsList.some((input)=>{
      return !input.validity.valid;
    });
  };
}