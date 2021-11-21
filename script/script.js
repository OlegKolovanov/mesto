//open popup
let overlayPopup = document.querySelector('.popup');
let openPopup = document.querySelector('.profile__edit');
let formSubmit= document.querySelector('.form');
let usernameInput = document.querySelector('.form__input_profile_username');
let hobbyInput = document.querySelector('.form__input_profile_hobby');
let userName = document.querySelector('.profile__username');
let hobby = document.querySelector('.profile__hobby');
let closePopup = document.querySelector('.popup__close');
function opennedPopup() {
  overlayPopup.classList.add('popup_active');
  hobbyInput.value = hobby.textContent;
  usernameInput.value = userName.textContent;
}
//close popup
function closedPopup() {
  overlayPopup.classList.remove('popup_active');
}

//save popup
function formSubmitHandler (evt) {
  evt.preventDefault();
  userName.textContent = usernameInput.value;
  hobby.textContent = hobbyInput.value;
  closedPopup()
}

formSubmit.addEventListener('submit', formSubmitHandler)
openPopup.addEventListener('click', opennedPopup)
closePopup.addEventListener('click', closedPopup)