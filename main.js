(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e){var n=e.address,r=e.token,o=e.cohort;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._address=n,this._token=r,this._cohort=o,console.log(n)}var n,r;return n=t,(r=[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("Ошибка ".concat(e.status))}},{key:"getCard",value:function(){return fetch("".concat(this._address,"/v1/").concat(this._cohort,"/cards"),{headers:{authorization:this._token}}).then(this._checkResponse)}},{key:"editInfoUser",value:function(e){return fetch("".concat(this._address,"/v1/").concat(this._cohort,"/users/me"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:e.name,about:e.hobby})}).then(this._checkResponse)}},{key:"addCardUser",value:function(e){return fetch("".concat(this._address,"/v1/").concat(this._cohort,"/cards"),{method:"POST",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:e.title,link:e.link})}).then(this._checkResponse)}},{key:"getId",value:function(){return fetch("".concat(this._address,"/v1/").concat(this._cohort,"/users/me"),{headers:{authorization:this._token}}).then(this._checkResponse)}},{key:"likeCard",value:function(e){return fetch("".concat(this._address,"/v1/").concat(this._cohort,"/cards/").concat(e,"/likes"),{method:"PUT",headers:{authorization:this._token,"Content-Type":"application/json"}}).then(this._checkResponse)}},{key:"removeLikeCard",value:function(e){return fetch("".concat(this._address,"/v1/").concat(this._cohort,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:{authorization:this._token,"Content-Type":"application/json"}}).then(this._checkResponse)}},{key:"removeCard",value:function(e){return fetch("".concat(this._address,"/v1/").concat(this._cohort,"/cards/").concat(e),{method:"DELETE",headers:{authorization:this._token,"Content-Type":"application/json"}}).then(this._checkResponse)}},{key:"editAvatar",value:function(e){return fetch("".concat(this._address,"/v1/").concat(this._cohort,"/users/me/avatar"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({avatar:e.avatar})}).then(this._checkResponse)}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n,r){var o=t.data,i=t.userId,c=t.addLikeCard,a=t.openDeletePopup;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._cardSelector=n,this._title=o.name,this._link=o.link,this._openPicPopup=r,this._data=o,this._idOwner=o.owner._id,this._id=o._id,this._userId=i,this._addLikeCard=c,this._openDeletePopup=a,this._scoreLike=o.likes.length}var t,r;return t=e,(r=[{key:"deleteCard",value:function(){this._element.remove(),this._element=null}},{key:"getUserId",value:function(){return this._id}},{key:"_getTemplate",value:function(){var e=this._cardSelector.querySelector(".element").cloneNode(!0);return this._picImage=e.querySelector(".element__photo"),this._picTitle=e.querySelector(".element__title"),this._picLike=e.querySelector(".element__like-button"),this._picTrash=e.querySelector(".element__trash"),this._picScoreLike=e.querySelector(".element__like-score"),e}},{key:"getView",value:function(){var e=this;return this._element=this._getTemplate(),this._setEventListener(),this._picImage.src=this._link,this._picImage.alt=this._title,this._picTitle.textContent=this._title,this._data.likes.forEach((function(t){t._id===e._userId&&e._picLike.classList.add("element__like-button_active")})),this._idOwner!=this._userId&&this._picTrash.remove(),this._picScoreLike.textContent=this._scoreLike,this._element}},{key:"_setEventListener",value:function(){var e=this;this._picImage.addEventListener("click",(function(t){t.preventDefault(),e._openPicPopup(e._link,e._title)})),this._picTrash.addEventListener("click",this._openDeletePopup),this._picLike.addEventListener("click",this._addLikeCard)}},{key:"_handlePicLike",value:function(e){e.target.classList.toggle("element__like-button_active")}},{key:"like",value:function(e){this._picLike.classList.toggle("element__like-button_active"),this._picScoreLike.textContent=e}}])&&n(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._form=t,this._inputsList=Array.from(this._form.querySelectorAll(n.inputSelector)),this._submitButtom=t.querySelector(n.submitButtonSelector),this._inactiveButtonClass=n.inactiveButtonClass,this._inputErrorClass=n.inputErrorClass,this._errorClass=n.errorClass}var t,n;return t=e,(n=[{key:"_showError",value:function(e){var t=this._form.querySelector("#".concat(e.id,"-error"));t.textContent=e.validationMessage,t.classList.add(this._errorClass),e.classList.add(this._inputErrorClass)}},{key:"_hideError",value:function(e){var t=this._form.querySelector("#".concat(e.id,"-error"));t.textContent="",t.classList.remove(this._errorClass),e.classList.remove(this._inputErrorClass)}},{key:"_checkInputValid",value:function(e){e.validity.valid?this._hideError(e):this._showError(e,e.validationMessage)}},{key:"_setEventListeners",value:function(){var e=this;this._inputsList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValid(t),e.toggleButtonError()}))}))}},{key:"toggleButtonError",value:function(){this._hasInvalidInput(this._inputsList)?(this._submitButtom.classList.add(this._inactiveButtonClass),this._submitButtom.disabled=!0):(this._submitButtom.classList.remove(this._inactiveButtonClass),this._submitButtom.disabled=!1)}},{key:"enableValidation",value:function(){this._form.addEventListener("submit",(function(e){e.preventDefault()})),this._setEventListeners()}},{key:"_hasInvalidInput",value:function(){return this._inputsList.some((function(e){return!e.validity.valid}))}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var a=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._closeButton=this._popup.querySelector(".popup__close"),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_active"),document.addEventListener("keyup",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"!==e.key&&"Esc"!==e.key||this.close()}},{key:"_handleOverlayClick",value:function(e){e.target===e.currentTarget&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("click",(function(t){e._handleOverlayClick(t)})),this._closeButton.addEventListener("click",(function(){e.close()}))}},{key:"close",value:function(){this._popup.classList.remove("popup_active"),document.removeEventListener("keyup",this._handleEscClose)}}])&&c(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(){return l="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=f(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},l.apply(this,arguments)}function f(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=y(e)););return e}function p(e,t){return p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},p(e,t)}function h(e,t){if(t&&("object"===u(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function y(e){return y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},y(e)}var d=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&p(e,t)}(c,e);var t,n,r,o,i=(r=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=y(r);if(o){var n=y(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return h(this,e)});function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=i.call(this,e))._image=t._popup.querySelector(".image-container__pic"),t._title=t._popup.querySelector(".image-container__title"),t}return t=c,(n=[{key:"open",value:function(e){var t=e.link,n=e.name;this._image.src=t,this._image.alt=n,this._title.textContent=n,l(y(c.prototype),"open",this).call(this),console.log(n)}}])&&s(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),c}(a);function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var v=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._container=n,this._renderer=r}var t,n;return t=e,(n=[{key:"addItem",value:function(e){this._container.prepend(e)}},{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}}])&&_(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function k(){return k="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=g(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},k.apply(this,arguments)}function g(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=E(e)););return e}function w(e,t){return w=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},w(e,t)}function S(e,t){if(t&&("object"===m(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function E(e){return E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},E(e)}var O=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&w(e,t)}(c,e);var t,n,r,o,i=(r=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=E(r);if(o){var n=E(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return S(this,e)});function c(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(n=i.call(this,e))._form=n._popup.querySelector(".form"),n._inputsList=Array.from(n._form.querySelectorAll(".form__input")),n._submitHandler=t,n._formButton=n._popup.querySelector(".form__save"),n}return t=c,(n=[{key:"_getInputValues",value:function(){var e={};return this._inputsList.forEach((function(t){e[t.name]=t.value,console.log(t.name)})),e}},{key:"setEventListeners",value:function(){var e=this;k(E(c.prototype),"setEventListeners",this).call(this),this._popup.addEventListener("submit",(function(t){t.preventDefault(),e._submitHandler(e._getInputValues())}))}},{key:"close",value:function(){k(E(c.prototype),"close",this).call(this),this._form.reset()}},{key:"renderLoading",value:function(e){this._formButton.textContent=e?"Сохранение...":"Сохранение"}}])&&b(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),c}(a);function L(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var C=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=document.querySelector(t),this._hobby=document.querySelector(n),this._avatar=document.querySelector(r)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return this._profileValues={},this._profileValues.name=this._name.textContent,this._profileValues.hobby=this._hobby.textContent,this._profileValues.avatar=this._avatar.src,this._profileValues}},{key:"setUserInfo",value:function(e){this._name.textContent=e.name,this._hobby.textContent=e.about,this._avatar.src=e.avatar}}])&&L(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function j(e){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},j(e)}function P(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function q(){return q="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=I(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},q.apply(this,arguments)}function I(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=B(e)););return e}function R(e,t){return R=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},R(e,t)}function T(e,t){if(t&&("object"===j(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function B(e){return B=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},B(e)}var x=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&R(e,t)}(c,e);var t,n,r,o,i=(r=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=B(r);if(o){var n=B(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return T(this,e)});function c(e,t){var n,r=t.handleRemove;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(n=i.call(this,e))._btnDelete=n._popup.querySelector(".form__save"),n._handleRemove=r,n._cardInfo={},n}return t=c,(n=[{key:"open",value:function(e){return console.log(e),q(B(c.prototype),"open",this).call(this),this._cardInfo=e}},{key:"setEventListeners",value:function(){var e=this;q(B(c.prototype),"setEventListeners",this).call(this),this._btnDelete.addEventListener("click",(function(t){t.preventDefault(),e._handleRemove(e._cardInfo)}))}}])&&P(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),c}(a),D=document.querySelector(".profile__edit"),A=document.querySelector(".form__input_profile_username"),V=document.querySelector(".form__input_profile_hobby"),U=(document.querySelector(".profile__username"),document.querySelector(".profile__hobby"),document.querySelector(".profile__add-button")),z=document.querySelector(".popup-location"),H=document.querySelector(".popup-edit"),N=(document.querySelector(".popup-avatar"),H.querySelector(".form"),H.querySelector(".popup__close"),z.querySelector(".popup__close"),document.querySelector(".form__input_photo_name")),J=document.querySelector(".form__input_photo_link"),M=(z.querySelector(".form"),document.querySelector(".popup-picture").querySelector(".popup__close"),document.querySelector(".elements")),$=document.querySelector(".element-template").content,F=(document.querySelectorAll(".popup"),document.querySelector(".image-container__title"),document.querySelector(".image-container__pic"),document.querySelector(".profile__overlay")),G=document.querySelector(".form__input_avatar_link"),K=(document.querySelector(".profile__avatar"),{formSelector:".form",inputSelector:".form__input",submitButtonSelector:".form__save",inactiveButtonClass:"form__save_disabled",inputErrorClass:"form__input_type_error",errorClass:"form__error_visible"});function Q(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var W={},X=new t({address:"https://mesto.nomoreparties.co",token:"f00f9377-ce10-4463-ad61-62c242422163",cohort:"cohort-35"}),Y=[X.getCard(),X.getId()];Promise.all(Y).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],c=!0,a=!1;try{for(n=n.call(e);!(c=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);c=!0);}catch(e){a=!0,o=e}finally{try{c||null==n.return||n.return()}finally{if(a)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return Q(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Q(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];console.log(i),console.log(o),ee.setUserInfo(i),W.id=i._id,oe.renderItems(o)})).catch((function(e){return console.log(e)}));var Z=new d(".popup-picture"),ee=new C(".profile__username",".profile__hobby",".profile__avatar");console.log(ee);var te=new O(".popup-edit",(function(e){te.renderLoading(!0),X.editInfoUser(e).then((function(e){ee.setUserInfo(e)})).then((function(){return te.close()})).catch((function(e){return console.log(e)})).finally(te.renderLoading(!1))})),ne=new O(".popup-avatar",(function(e){ne.renderLoading(!0),X.editAvatar(e).then((function(e){ee.setUserInfo(e)})).then((function(){ne.close(),G.value=""})).catch((function(e){return console.log(e)})).finally(ne.renderLoading(!1))})),re=new x(".popup-delete",{handleRemove:function(e){!function(e){console.log(e),X.removeCard(e._id).then((function(t){e.deleteCard(),console.log(e)})).then((function(){return re.close()})).catch((function(e){return console.log(e)}))}(e)}}),oe=new v({renderer:function(e){var t=ae(e).getView();oe.addItem(t)}},M),ie=new O(".popup-location",(function(e){ie.renderLoading(!0),X.addCardUser(e).then((function(e){console.log(e);var t=ae(e).getView();oe.addItem(t)})).then((function(){ie.close(),N.value="",J.value=""})).catch((function(e){return console.log(e)})).finally(ie.renderLoading(!1)),console.log(e)}));function ce(e,t){Z.open({link:e,name:t})}function ae(e){var t=new r({data:e,userId:W.id,addLikeCard:function(e){e.target.classList.contains("element__like-button_active")?function(e){X.removeLikeCard(e.getUserId()).then((function(t){e.like(t.likes.length)})).catch((function(e){return console.log(e)}))}(t):function(e){console.log(e),X.likeCard(e.getUserId()).then((function(t){e.like(t.likes.length)})).catch((function(e){return console.log(e)}))}(t)},openDeletePopup:function(){re.open(t)}},$,ce);return t}var ue=new i(formEdit,K),se=new i(formAdd,K),le=new i(formAvatar,K);le.enableValidation(),ue.enableValidation(),se.enableValidation(),Z.setEventListeners(),te.setEventListeners(),ie.setEventListeners(),ne.setEventListeners(),re.setEventListeners(),D.addEventListener("click",(function(){var e=ee.getUserInfo();A.value=e.name,V.value=e.hobby,te.open()})),U.addEventListener("click",(function(){se.toggleButtonError(),ie.open()})),F.addEventListener("click",(function(){le.toggleButtonError(),ne.open()}))})();