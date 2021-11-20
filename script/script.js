//open popup
let overlayPopup = document.querySelector('.popup');
let openPopup = document.querySelector('.profile__edit');
let popup = document.querySelector('.form');
let usernameInput = document.querySelector('.form__input_profile_username');
let hobbyInput = document.querySelector('.form__input_profile_hobby');
let userName = document.querySelector('.profile__username');
let hobby = document.querySelector('.profile__hobby');

let closePopup = document.querySelector('.popup__close');
function OpennedPopup() {
  overlayPopup.classList.add('popup_active');
  hobbyInput.value = hobby.textContent;
  usernameInput.value = userName.textContent;
  //close popup
}

function ClosedPopup() {
  overlayPopup.classList.remove('popup_active');
}
//save popup
function formSubmitHandler (evt) {
  evt.preventDefault();
  userName.textContent = usernameInput.value;
  hobby.textContent = hobbyInput.value;
  ClosedPopup()
}
popup.addEventListener('submit', formSubmitHandler)
openPopup.addEventListener('click', OpennedPopup)
closePopup.addEventListener('click', ClosedPopup)

//я так и не понял зачем удалять некоторые переменные (savepopup и т.д.), они же нужны для логики.