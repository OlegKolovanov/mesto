//open popup
let overlayPopup = document.querySelector('.popup');
let openEditPopup = document.querySelector('.profile__edit');
let formSubmit= document.querySelector('.form');
let usernameInput = document.querySelector('.form__input_profile_username');
let hobbyInput = document.querySelector('.form__input_profile_hobby');
let userName = document.querySelector('.profile__username');
let hobby = document.querySelector('.profile__hobby');
let openAddPopup = document.querySelector('.profile__add-button');
const addPopup = document.querySelector('.popup-location')
let popupEdit = document.querySelector('.popup-edit');
const closeEditPopup = popupEdit.querySelector('.popup__close');
const closeAddPopup = addPopup.querySelector('.popup__close');
const nameInput = document.querySelector('.form__input_photo_name');
const linkInput = document.querySelector('.form__input_photo_link');
const saveAddPopup = addPopup.querySelector('.form__save');
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
function opennedEditPopup() {
  popupEdit.classList.add('popup_active');
  hobbyInput.value = hobby.textContent;
  usernameInput.value = userName.textContent;
}

function opennedAddpopup() {
  addPopup.classList.add('popup_active');
  
}

function openPicPopup(evt){
  picPopup.classList.add('popup_active');
  const namePicPopup = picPopup.querySelector('.image-container__title');
  const imgPicPopup = picPopup.querySelector('.image-container__pic');
  imgPicPopup.src = evt.target.src;
  const targetElement = evt.target.closest('.element');
  namePicPopup.textContent = targetElement.querySelector('.element__title').textContent
}

//close popup
function closedEditPopup() {
   popupEdit.classList.remove('popup_active');
}

function closedAddPopup() {
  addPopup.classList.remove('popup_active');
}

function closedPicPopup() {
  picPopup.classList.remove('popup_active');
}

//save popup
function formSubmitHandler (evt) {
  evt.preventDefault();
  userName.textContent = usernameInput.value;
  hobby.textContent = hobbyInput.value;
  closedEditPopup()
}

function handleAdd() {
  const inputNamePhoto = nameInput.value;
  const inputLinkPhoto = linkInput.value;
  const listCard = getItem({name: inputNamePhoto, link: inputLinkPhoto});
  elements.prepend(listCard);

  nameInput.value = '';
  linkInput.value = '';
  closedAddPopup()
}
//Функция рендер: вставляет темплейты
function render () {
  const card = initialCards.map((item) => {
    return getItem(item)
  });
  elements.append(...card);
}
 //Функция ГетАйтем: дублирует темплейты, задаёт параметры для карточек( название, фото)
function getItem(item) {
  const typeItem = elementTemplate.querySelector('.element').cloneNode(true);


  const photoItem = typeItem.querySelector('.element__photo');
  photoItem.src = item.link;


  const titleItem = typeItem.querySelector('.element__title');
  titleItem.textContent = item.name;


  const likeButton = typeItem.querySelector('.element__like-button')
  likeButton.addEventListener('click', handleLike)
  


  const trashButton = typeItem.querySelector('.element__trash')
  trashButton.addEventListener('click', handleDelete)
 

  const imageElement = typeItem.querySelector('.element__photo');
  imageElement.addEventListener('click', openPicPopup);

  return typeItem;
}

function handleDelete(event) {
  const targetElement = event.target;
  const listItem = targetElement.closest('.element');
  listItem.remove();
}

function handleLike(event) {
  const listItem = event.target.closest('.element');
  const like = listItem.querySelector('.element__like-button')
  like.classList.toggle('element__like-button_active');
}

formSubmit.addEventListener('submit', formSubmitHandler);
openEditPopup.addEventListener('click', opennedEditPopup);
closeEditPopup.addEventListener('click', closedEditPopup);
openAddPopup.addEventListener('click', opennedAddpopup);
closeAddPopup.addEventListener('click',closedAddPopup);
closePicPopup.addEventListener('click', closedPicPopup);
saveAddPopup.addEventListener('click', handleAdd);

render ()