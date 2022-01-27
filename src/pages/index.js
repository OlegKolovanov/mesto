import '../pages/index.css';

import Card from "../components/Card.js";
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
 openAddPopupBtn,
 addPopup,
 nameInput,
 linkInput,
 elements,
 elementTemplate,
 initialCards,
 configValidation,
 addPopupSelector,
 picPopupSelector,
 editPopupSelector
 } from "../utils/constants.js"

const editCard = new PopupWithForm(addPopupSelector, (inputValues)=>{
  addCard(inputValues);
  editCard.close()
  nameInput.value = '';
  linkInput.value = '';
  console.log(inputValues)
})
const picCard = new PopupWithImage(picPopupSelector)
const dataUser = new UserInfo('.profile__username', '.profile__hobby')

const popupInfo = new PopupWithForm(editPopupSelector, (inputValues) =>{
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
  addFormValidator.toggleButtonError()
  editCard.open()
});

//  formAddSubmit.addEventListener('submit', addCard);

const cardList = new Section({data:initialCards,
renderer: (item)=>{
  cardList.addItem(createCard(item))
}}, 
elements);

cardList.renderItems()

function createCard (data) {
  const card = new Card(data, elementTemplate, openPicPopup);
  const cardEL = card.getView();
  return cardEL;
}

function addCard(item){
  const data = {
    name: item.title,
    link: item.link,
    alt: item.title
    
  }
  cardList.addItem(createCard(data))
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