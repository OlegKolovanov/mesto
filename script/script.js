//open popup
let overlayPopup = document.querySelector('.popup-overlay');
let openPopup = document.querySelector('.profile__edit');
let popup = document.querySelector('.popup');
let usernameInput = document.querySelector('.popup__username');
let hobbyInput = document.querySelector('.popup__hobby');
let userName = document.querySelector('.profile__username');
let hobby = document.querySelector('.profile__hobby');
let savePopup = document.querySelector('.popup__save')
let closePopup = document.querySelector('.close-button');
function OpennedPopup() {
  overlayPopup.classList.add('popup-overlay_active');
  hobbyInput.value = hobby.textContent;
  usernameInput.value = userName.textContent;
  //close popup
}

function ClosedPopup() {
  overlayPopup.classList.remove('popup-overlay_active');
}
//save popup
function formSubmitHandler (evt) {
  evt.preventDefault();
  userName.textContent = usernameInput.value;
  hobby.textContent = hobbyInput.value;
  overlayPopup.classList.remove('popup-overlay_active');
}
popup.addEventListener('submit', formSubmitHandler)
openPopup.addEventListener('click', OpennedPopup)
closePopup.addEventListener('click', ClosedPopup)
savePopup.addEventListener('click', ClosedPopup)
//я так и не понял зачем удалять некоторые переменные (savepopup и т.д.), они же нужны для логики.