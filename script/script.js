import Card from "./card.js";
import FormValidator from "./FormValidator.js";

//open popup
const openEditPopupBtn = document.querySelector('.profile__edit');
const usernameInput = document.querySelector('.form__input_profile_username');
const hobbyInput = document.querySelector('.form__input_profile_hobby');
const userName = document.querySelector('.profile__username');
const hobby = document.querySelector('.profile__hobby');
const openAddPopupBtn = document.querySelector('.profile__add-button');
const addPopup = document.querySelector('.popup-location')
const popupEdit = document.querySelector('.popup-edit');
const formProfileSubmit= popupEdit.querySelector('.form');
const closeEditPopupBtn = popupEdit.querySelector('.popup__close');
const closeAddPopupBtn = addPopup.querySelector('.popup__close');
const nameInput = document.querySelector('.form__input_photo_name');
const linkInput = document.querySelector('.form__input_photo_link');
const formAddSubmit = addPopup.querySelector('.form');
const picPopup = document.querySelector('.popup-picture');
const closePicPopupBtn = picPopup.querySelector('.popup__close');
const elements = document.querySelector('.elements');
const elementTemplate = document.querySelector('.element-template').content;
const popups = document.querySelectorAll('.popup');
const namePicPopup = document.querySelector('.image-container__title')
const imgPicPopup = document.querySelector('.image-container__pic')


const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
]; 

function openPopup(popup){
  popup.classList.add('popup_active');
  document.addEventListener('keyup', closePopupEscape)
}

//close popup
function closePopup(popup){
  popup.classList.remove('popup_active');
  document.removeEventListener('keyup', closePopupEscape)
}

//save popup
function handleProfileSubmit (evt) {
  evt.preventDefault();
  
    hobby.textContent = hobbyInput.value;
    userName.textContent = usernameInput.value
  

  closePopup(popupEdit);
}


//Слушатели
formProfileSubmit.addEventListener('submit', handleProfileSubmit);

openEditPopupBtn.addEventListener('click', function(){
  hobbyInput.value = hobby.textContent;
  usernameInput.value = userName.textContent;
  openPopup(popupEdit)
});
closeEditPopupBtn.addEventListener('click', function(){
  closePopup(popupEdit)
});
openAddPopupBtn.addEventListener('click', function(){
  nameInput.value = '';
  linkInput.value = '';
  const saveBtn = addPopup.querySelector('.form__save')
  saveBtn.classList.add('form__save_disabled');
  saveBtn.setAttribute("disabled", "disabled")
  openPopup(addPopup)
});
closeAddPopupBtn.addEventListener('click', function(){
  closePopup(addPopup)
});
closePicPopupBtn.addEventListener('click', function(){
  closePopup(picPopup);
});
 formAddSubmit.addEventListener('submit', addCard);

function closePopupEscape(evt){
  if (evt.key === "Escape" || evt.key === "Esc") {
    
    const popupOpen = document.querySelector('.popup_active');

    closePopup(popupOpen);
  }
}


Array.from(popups).forEach(popup => {
  popup.addEventListener('mousedown', (e) => {
      console.log()
      if (e.target === popup)
      closePopup(popup);
  });
})

function createCard (data) {
  const card = new Card(data, elementTemplate, openPicPopup);
  const cardEL = card.getView();
  return cardEL;
}
initialCards.forEach((item)=>{
  const data = {
    link: item.link,
    alt: item.name,
    title: item.name
  }
  elements.append(createCard(data))
})

function addCard(evt){
  evt.preventDefault();
  const data = {
    link: linkInput.value,
    title: nameInput.value,
    alt: nameInput.value
  }
  elements.prepend(createCard(data))
  closePopup(addPopup)
}

function openPicPopup(link, title){
  imgPicPopup.src = link;
  namePicPopup.textContent = title;
  imgPicPopup.alt = title;
  openPopup(picPopup)
}

const configValidation = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__save',
  inactiveButtonClass: 'form__save_disabled',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__error_visible'
}; 

const editFormValidator = new FormValidator(formEdit, configValidation);
const addFormValidator = new FormValidator(formAdd, configValidation);

editFormValidator.enableValidation();
addFormValidator.enableValidation();


