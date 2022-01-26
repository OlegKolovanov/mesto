export default class UserInfo {
  constructor(userName, userHobby){
    this._name = document.querySelector(userName);
    this._hobby = document.querySelector(userHobby);
    
  }

  getUserInfo(){
    return{
      name: this._name.textContent,
      hobby: this._hobby.textContent
    }
 
  }

  setUserInfo(name, hobby){
    this._name.textContent = name;
    this._hobby.textContent = hobby;
  }
}