//open popup
const openEditPopup = document.querySelector('.profile__edit');
const formProfileSubmit= document.querySelector('.form');
const usernameInput = document.querySelector('.form__input_profile_username');
const hobbyInput = document.querySelector('.form__input_profile_hobby');
const userName = document.querySelector('.profile__username');
const hobby = document.querySelector('.profile__hobby');
const openAddPopup = document.querySelector('.profile__add-button');
const addPopup = document.querySelector('.popup-location')
const popupEdit = document.querySelector('.popup-edit');
const closeEditPopup = popupEdit.querySelector('.popup__close');
const closeAddPopup = addPopup.querySelector('.popup__close');
const nameInput = document.querySelector('.form__input_photo_name');
const linkInput = document.querySelector('.form__input_photo_link');
const formAddSubmit = addPopup.querySelector('.form');
const picPopup = document.querySelector('.popup-picture');
const closePicPopup = picPopup.querySelector('.popup__close');
const elements = document.querySelector('.elements');
const elementTemplate = document.querySelector('.element-template').content;

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
//open popup
//function opennedEditPopup() {
 // popupEdit.classList.add('popup_active');
//  hobbyInput.value = hobby.textContent;
 // usernameInput.value = userName.textContent;
//}

//function opennedAddpopup() {
 // addPopup.classList.add('popup_active');
  
//}

//function openPicPopup(evt){
//  picPopup.classList.add('popup_active');
//  const namePicPopup = picPopup.querySelector('.image-container__title');
//const imgPicPopup = picPopup.querySelector('.image-container__pic');
 // imgPicPopup.src = evt.target.src;
 // const targetElement = evt.target.closest('.element');
//  namePicPopup.textContent = targetElement.querySelector('.element__title').textContent
//}

function openPopup(popup){
  popup.classList.add('popup_active');
}

//close popup
function closePopup(popup){
  popup.classList.remove('popup_active');
}

//save popup
function handleProfileSubmit (evt) {
  evt.preventDefault();
  userName.textContent = usernameInput.value;
  hobby.textContent = hobbyInput.value;
  closePopup(popupEdit);
}

function handleAddSubmit(evt) {
  evt.preventDefault();
  const inputNamePhoto = nameInput.value;
  const inputLinkPhoto = linkInput.value;
  const listCard = getItem({name: inputNamePhoto, link: inputLinkPhoto});
  elements.prepend(listCard);
  nameInput.value = '';
  linkInput.value = '';
  closePopup(addPopup)
}

//Функция рендер: вставляет темплейты
function render () {
  const cards = initialCards.map((item) => {
    return getItem(item)
  });
  elements.append(...cards);
}
 //Функция ГетАйтем: дублирует темплейты, задаёт параметры для карточек(название, фото)
function getItem(item) {
  const typeItem = elementTemplate.querySelector('.element').cloneNode(true);


  const photoItem = typeItem.querySelector('.element__photo');
  photoItem.src = item.link;
  photoItem.alt = item.name;

  const titleItem = typeItem.querySelector('.element__title');
  titleItem.textContent = item.name;


  const likeButton = typeItem.querySelector('.element__like-button')
  likeButton.addEventListener('click', handleLike)
  


  const trashButton = typeItem.querySelector('.element__trash')
  trashButton.addEventListener('click', handlePicRemove)
 

  const imageElement = typeItem.querySelector('.element__photo');
  imageElement.addEventListener('click', function(evt){
    openPopup(picPopup);
    const namePicPopup = picPopup.querySelector('.image-container__title');
    const imgPicPopup = picPopup.querySelector('.image-container__pic');
    imgPicPopup.src = evt.target.src;
    const targetElement = evt.target.closest('.element');
    namePicPopup.textContent = targetElement.querySelector('.element__title').textContent
  });

  return typeItem;
}

//Удаление фотографии
function handlePicRemove(event) {
  const targetElement = event.target;
  const listItem = targetElement.closest('.element');
  listItem.remove();
}
//функция лайка
function handleLike(event) {
  event.target.classList.toggle('element__like-button_active');
}
//Слушатели
formProfileSubmit.addEventListener('submit', handleProfileSubmit);

openEditPopup.addEventListener('click', function(){
  hobbyInput.value = hobby.textContent;
  usernameInput.value = userName.textContent;
  openPopup(popupEdit)
});
closeEditPopup.addEventListener('click', function(){
  closePopup(popupEdit)
});
openAddPopup.addEventListener('click', function(){
  openPopup(addPopup)
});
closeAddPopup.addEventListener('click', function(){
  closePopup(addPopup)
});
closePicPopup.addEventListener('click', function(){
  closePopup(picPopup);
});
formAddSubmit.addEventListener('submit', handleAddSubmit);

render ()