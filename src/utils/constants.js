export const openEditPopupBtn = document.querySelector('.profile__edit');
export const usernameInput = document.querySelector('.form__input_profile_username');
export const hobbyInput = document.querySelector('.form__input_profile_hobby');
export const userName = document.querySelector('.profile__username');
export const hobby = document.querySelector('.profile__hobby');
export const openAddPopupBtn = document.querySelector('.profile__add-button');
export const addPopup = document.querySelector('.popup-location')
export const popupEdit = document.querySelector('.popup-edit');
export const formProfileSubmit= popupEdit.querySelector('.form');
export const closeEditPopupBtn = popupEdit.querySelector('.popup__close');
export const closeAddPopupBtn = addPopup.querySelector('.popup__close');
export const nameInput = document.querySelector('.form__input_photo_name');
export const linkInput = document.querySelector('.form__input_photo_link');
export const formAddSubmit = addPopup.querySelector('.form');
export const picPopup = document.querySelector('.popup-picture');
export const closePicPopupBtn = picPopup.querySelector('.popup__close');
export const elements = document.querySelector('.elements');
export const elementTemplate = document.querySelector('.element-template').content;
export const popups = document.querySelectorAll('.popup');
export const namePicPopup = document.querySelector('.image-container__title')
export const imgPicPopup = document.querySelector('.image-container__pic')
export const addPopupSelector = '.popup-location'
export const editPopupSelector = '.popup-edit'
export const picPopupSelector = '.popup-picture'


export const initialCards = [
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
export const configValidation = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__save',
  inactiveButtonClass: 'form__save_disabled',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__error_visible'
}; 

