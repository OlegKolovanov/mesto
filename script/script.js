let Popup = document.querySelector('.popup');
let OverlayPopup = document.querySelector('.popup-overlay');
let ClosePopup = document.querySelector('.popup__close');
let OpenPopup = document.querySelector('.profile__edit');
let SavePopup = document.querySelector('.popup__save');

function OpennedPopup() {
  Popup.classList.add('popup_active');
  OverlayPopup.classList.add('popup-overlay_active');
}

OpenPopup.addEventListener('click', OpennedPopup);

function ClosedPopup() {
  Popup.classList.remove('popup_active');
  OverlayPopup.classList.remove('popup-overlay_active');
}

ClosePopup.addEventListener('click', ClosedPopup);

let UsernameInput = document.querySelector('.popup__username');
let HobbyInput = document.querySelector('.popup__hobby');
let UserName = document.querySelector('.profile__username');
let Hobby = document.querySelector('.profile__hobby');
HobbyInput.value = Hobby.textContent;

UsernameInput.value = UserName.textContent;
function formSubmitHandler (evt) {
  evt.preventDefault();
  

  UserName.textContent = UsernameInput.value;
  Hobby.textContent = HobbyInput.value;

  Popup.classList.remove('popup_active');
  OverlayPopup.classList.remove('popup-overlay_active');
}

Popup.addEventListener('submit', formSubmitHandler)
SavePopup.addEventListener('click', ClosedPopup)