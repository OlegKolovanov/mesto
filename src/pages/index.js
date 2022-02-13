import '../pages/index.css';
import Api from '../components/Api.js';
import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js"
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import PopupDelete from '../components/PopupDelete.js';
import {
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
  editPopupSelector,
  openEditPopupAvatarBtn,
  popupAvatarSelector,
  inputAvatarLink,
  userAvatar,
  deletePopupSelector
} from "../utils/constants.js"

// в этой переменной будет содеражаться id 
const userId = {}

const api = new Api({
  address: 'https://mesto.nomoreparties.co',
  token: 'f00f9377-ce10-4463-ad61-62c242422163',
  cohort: 'cohort-35'
})

const picCard = new PopupWithImage(picPopupSelector)
const dataUser = new UserInfo('.profile__username', '.profile__hobby', '.profile__avatar')
console.log(dataUser)
const popupInfo = new PopupWithForm(editPopupSelector, (inputValues) => {
  popupInfo.renderLoading(true)
  api.editInfoUser(inputValues)
    .then((res) => {
      dataUser.setUserInfo(res)
    })
    .catch(err => console.log(err))
    .finally(popupInfo.renderLoading(false))
  popupInfo.close()

})

const popupAvatar = new PopupWithForm(popupAvatarSelector, (inputValues) => {
  popupAvatar.renderLoading(true)
  api.editAvatar(inputValues)
    .then((res) => {
      dataUser.setUserInfo(res)
    })
    .catch(err => console.log(err))
    .finally(popupAvatar.renderLoading(false))
  inputAvatarLink.value = '';
  popupAvatar.close()

})

const deletePopup = new PopupDelete(deletePopupSelector, {
  handleRemove: (card) => {
    removeCard(card)
  }
})

const cardList = new Section({
  renderer: (item) => {
    cardList.addItem(createCard(item))
  }
},
  elements);

const editCard = new PopupWithForm(addPopupSelector, (inputValues) => {
  editCard.renderLoading(true)
  api.addCardUser(inputValues)
    .then((res) => {
      console.log(res)
      addCard(res)
    })
    .catch(err => console.log(err))
    .finally(editCard.renderLoading(false))
  editCard.close()
  nameInput.value = '';
  linkInput.value = '';
  console.log(inputValues)

})

// function editAvatarUser(item) {
//   userAvatar.src = item.link
// }

api.getCard()
  .then((card) => {
    cardList.renderItems(card)
  })
  .catch(err => console.log(err))


api.getId()
  .then(res => {
    userId.id = res._id
    console.log(res._id)

  })
  .catch(err => console.log(err))

function removeCard(card) {
  api.removeCard(card._id)
    .then((res) => {
      card.deleteCard()
    })
    .catch(err => console.log(err))
}

function addLike(card) {
  console.log(card)
  api.likeCard(card.getUserId())
    .then((res) => {
      card.like(res.likes.length)
    })
    .catch(err => console.log(err))
}

function removeLike(card) {
  api.removeLikeCard(card.getUserId())
    .then((res) => {
      card.like(res.likes.length)
    })
    .catch(err => console.log(err))
}



function openPicPopup(link, name) {
  picCard.open({ link, name })
}

function createCard(data) {
  const card = new Card({
    data: data,
    userId: userId.id,
    addLikeCard: (evt) => {
      if (!evt.target.classList.contains('element__like-button_active')) {
        addLike(card)
      } else {
        removeLike(card)
      }
    },
    openDeletePopup: () => {
      deletePopup.open(card)
    }
  },
    elementTemplate, openPicPopup);

  const cardEL = card.getView();
  return cardEL;
}

function addCard(item) {
  const data = {
    name: item.name,
    link: item.link,
    alt: item.name

  }
  cardList.addItem(createCard(data))
}

const editFormValidator = new FormValidator(formEdit, configValidation);
const addFormValidator = new FormValidator(formAdd, configValidation);
const avatarFormValidator = new FormValidator(formAvatar, configValidation)

avatarFormValidator.enableValidation();
editFormValidator.enableValidation();
addFormValidator.enableValidation();

picCard.setEventListeners()
popupInfo.setEventListeners()
editCard.setEventListeners()
popupAvatar.setEventListeners()
deletePopup.setEventListeners()

openEditPopupBtn.addEventListener('click', function () {
  const user = dataUser.getUserInfo()
  usernameInput.value = user.name;
  hobbyInput.value = user.hobby;
  popupInfo.open()
});

openAddPopupBtn.addEventListener('click', function () {
  addFormValidator.toggleButtonError()
  editCard.open()
});

openEditPopupAvatarBtn.addEventListener('click', function () {
  avatarFormValidator.toggleButtonError();
  popupAvatar.open()
})