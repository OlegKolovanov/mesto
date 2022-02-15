export default class UserInfo {
  constructor(userName, userHobby, avatar) {
    this._name = document.querySelector(userName);
    this._hobby = document.querySelector(userHobby);
    this._avatar = document.querySelector(avatar)
  }

  getUserInfo() {
    this._profileValues = {}
    this._profileValues.name = this._name.textContent
    this._profileValues.hobby = this._hobby.textContent
    this._profileValues.avatar = this._avatar.src
    return this._profileValues;
  }

  setUserInfo(data) {
    this._name.textContent = data.name;
    this._hobby.textContent = data.about;
    this._avatar.src = data.avatar
  }
}