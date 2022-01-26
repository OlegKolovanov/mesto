import '../pages/index.css';

import Card from "../components/card.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js"
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
console.log('Hello')
import{
 openEditPopupBtn,
 usernameInput,
 hobbyInput,
 userName,
 hobby,
 openAddPopupBtn,
 addPopup,
 popupEdit,
 formProfileSubmit,
 closeEditPopupBtn,
 closeAddPopupBtn,
 nameInput,
 linkInput,
 formAddSubmit,
 picPopup,
 closePicPopupBtn,
 elements,
 elementTemplate,
 popups,
 namePicPopup,
 imgPicPopup,
 initialCards,
 configValidation
 } from "../untils/constanst.js"

const editCard = new PopupWithForm(addPopup, ()=>{
  addCard();
  editCard.close()
})
const picCard = new PopupWithImage(picPopup)
const dataUser = new UserInfo('.profile__username', '.profile__hobby')

const popupInfo = new PopupWithForm(popupEdit, (inputValues) =>{
  dataUser.setUserInfo(inputValues['name'], inputValues['hobby']);
  popupInfo.close();
  console.log(inputValues)
})

openEditPopupBtn.addEventListener('click', function(){
  const user = dataUser.getUserInfo()
  usernameInput.value = user.name;
  hobbyInput.value = user.hobby;
  popupInfo.open()
});

openAddPopupBtn.addEventListener('click', function(){
  nameInput.value = '';
  linkInput.value = '';
  const saveBtn = addPopup.querySelector('.form__save')
  saveBtn.classList.add('form__save_disabled');
  saveBtn.setAttribute("disabled", "disabled")
  editCard.open()
});

//  formAddSubmit.addEventListener('submit', addCard);

const cardList = new Section({data:initialCards,
renderer: (item)=>{
  const card = new Card(item, elementTemplate, openPicPopup)
  const cardElement = card.getView();
  cardList.addItem(cardElement)
  console.log(card.getView())
}}, 
elements);

cardList.renderItems()

function createCard (data) {
  const card = new Card(data, elementTemplate, openPicPopup);
  const cardEL = card.getView();
  return cardEL;
}

function addCard(){
  const data = {
    title: nameInput.value,
    link: linkInput.value,
    alt: nameInput.value
  }
  elements.prepend(createCard(data))
  console.log(data)
}

function openPicPopup(link, name){
  picCard.open({link, name})
}

const editFormValidator = new FormValidator(formEdit, configValidation);
const addFormValidator = new FormValidator(formAdd, configValidation);

editFormValidator.enableValidation();
addFormValidator.enableValidation();
picCard.setEventListeners()
popupInfo.setEventListeners()
editCard.setEventListeners()