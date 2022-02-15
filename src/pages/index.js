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
  nameInput,
  linkInput,
  elements,
  elementTemplate,
  configValidation,
  addPopupSelector,
  picPopupSelector,
  editPopupSelector,
  openEditPopupAvatarBtn,
  popupAvatarSelector,
  inputAvatarLink,
  deletePopupSelector
} from "../utils/constants.js"

// в этой переменной будет содеражаться id 
const userId = {}

const api = new Api({
  address: 'https://mesto.nomoreparties.co',
  token: 'f00f9377-ce10-4463-ad61-62c242422163',
  cohort: 'cohort-35'
})

const initialData = [api.getCard(), api.getId()]

Promise.all(initialData)
  .then(([card, user]) => {
    console.log(user)
    console.log(card)
    dataUser.setUserInfo(user)
    userId.id = user._id
    cardList.renderItems(card)
  })
  .catch(err => console.log(err))

const picCard = new PopupWithImage(picPopupSelector)
const dataUser = new UserInfo('.profile__username', '.profile__hobby', '.profile__avatar')
console.log(dataUser)
const popupInfo = new PopupWithForm(editPopupSelector, (inputValues) => {
  popupInfo.renderLoading(true)
  api.editInfoUser(inputValues)
    .then((res) => {
      dataUser.setUserInfo(res)
    })
    .then(() => popupInfo.close())
    .catch(err => console.log(err))
    .finally(popupInfo.renderLoading(false))


})
const popupAvatar = new PopupWithForm(popupAvatarSelector, (inputValues) => {
  popupAvatar.renderLoading(true)
  api.editAvatar(inputValues)
    .then((res) => {
      dataUser.setUserInfo(res)
    })
    .then(() => {
      popupAvatar.close()
      inputAvatarLink.value = '';
    })
    .catch(err => console.log(err))
    .finally(popupAvatar.renderLoading(false))

})

const deletePopup = new PopupDelete(deletePopupSelector, {
  handleRemove: (card) => {
    removeCard(card)
  }
})

const cardList = new Section({
  renderer: (item) => {
    const cardElement = createCard(item).getView()
    cardList.addItem(cardElement)
  }
},
  elements);

const editCard = new PopupWithForm(addPopupSelector, (inputValues) => {
  editCard.renderLoading(true)
  api.addCardUser(inputValues)
    .then((res) => {
      console.log(res)
      const cardElement = createCard(res).getView()
      cardList.addItem(cardElement)
    })
    .then(() => {
      editCard.close()
      nameInput.value = '';
      linkInput.value = '';
    })
    .catch(err => console.log(err))
    .finally(editCard.renderLoading(false))
  console.log(inputValues)

})

function removeCard(card) {
  console.log(card)
  api.removeCard(card._id)
    .then((res) => {
      card.deleteCard()
      console.log(card)
    })
    .then(() => deletePopup.close())
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
  }, elementTemplate, openPicPopup);

  return card
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