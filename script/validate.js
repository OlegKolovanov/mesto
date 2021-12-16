const showError = (form, input, errorMessageText, errorMessageClass, inputErrorClass) => {
  const errorMessage = form.querySelector(`#${input.id}-error`);
  errorMessage.textContent = errorMessageText;
  errorMessage.classList.add(errorMessageClass);
  input.classList.add(inputErrorClass);
}


const hideError = (form, input, errorMessageClass, inputErrorClass) => {
  const errorMessage = form.querySelector(`#${input.id}-error`);
  errorMessage.textContent = '';
  errorMessage.classList.remove(errorMessageClass);
  input.classList.remove(inputErrorClass);
}

const checkInputValid = (form, input, {inputErrorClass, errorClass}) => {
  if (!input.validity.valid){
    showError(form, input, input.validationMessage, inputErrorClass, errorClass)
  }else{
    hideError(form, input, inputErrorClass, errorClass)
  }
}

const setInputListeners = (form, { inputSelector, submitButtonSelector, inactiveButtonClass, ...rest }) => {
  const inputs = form.querySelectorAll(inputSelector);
  const submitButton = form.querySelector(submitButtonSelector);

  inputs.forEach((input) => {
      input.addEventListener('input', () => {
          checkInputValid(form, input, rest);
          toggleButtonError(inputs, submitButton,inactiveButtonClass);
      });
  });
}

const toggleButtonError = (inputs, button, inactiveButtonClass) => {
  console.log(hasInvalidInput(inputs))
  if (hasInvalidInput(inputs)) {
      button.classList.add(inactiveButtonClass);
      button.disabled = true;
  } else {
      button.classList.remove(inactiveButtonClass);
      button.disabled = false;
  }
}

const enableValidation = ({formSelector,  ...rest}) => {
    const forms = document.querySelectorAll(formSelector);
    console.log(forms)
    forms.forEach((form) =>{
      form.addEventListener('submit', (event) =>{
        event.preventDefault(inputs, inactiveButtonClass)
      })
      setInputListeners(form, rest);
    })
}


const hasInvalidInput = (inputs) => {
  return Array.from(inputs).some((el) => !el.validity.valid);
}

enableValidation({
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__save',
  inactiveButtonClass: 'form__save_disabled',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__error_visible'
}); 