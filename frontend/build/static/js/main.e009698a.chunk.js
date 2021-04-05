(this["webpackJsonparound-react"]=this["webpackJsonparound-react"]||[]).push([[0],{17:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),o=n(18),s=n.n(o),r=n(8),i=(n(17),n(22)),l=n(2),u=n(3),d=Object(a.createContext)(),j=n(19),b=n(20),m=new(function(){function e(t){var n=t.baseUrl,a=t.headers;Object(j.a)(this,e),this._baseUrl=n,this._headers=a}return Object(b.a)(e,[{key:"getCardList",value:function(){return fetch(this._baseUrl+"/cards",{headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Error! "+e.statusText)}))}},{key:"getUserInfo",value:function(){return fetch(this._baseUrl+"/users/me",{headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Error! "+e.statusText)}))}},{key:"setUserInfo",value:function(e){return fetch(this._baseUrl+"/users/me",{headers:this._headers,method:"PATCH",body:JSON.stringify(e)}).then((function(e){return e.ok?e.json():Promise.reject("Error! "+e.statusText)}))}},{key:"setUserAvatar",value:function(e){return fetch(this._baseUrl+"/users/me/avatar",{method:"PATCH",headers:this._headers,body:JSON.stringify(e)}).then((function(e){return e.ok?e.json():Promise.reject("Error! "+e.statusText)}))}},{key:"addCard",value:function(e){return fetch(this._baseUrl+"/cards",{headers:this._headers,method:"POST",body:JSON.stringify(e)}).then((function(e){return e.ok?e.json():Promise.reject("Error! "+e.statusText)}))}},{key:"removeCard",value:function(e){return fetch(this._baseUrl+"/cards/"+e,{method:"DELETE",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Error! "+e.statusText)}))}},{key:"updateLikes",value:function(e,t){var n="DELETE";return t&&(n="PUT"),fetch(this._baseUrl+"/cards/likes/"+e,{method:n,headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Error! "+e.statusText)}))}}]),e}())({baseUrl:"https://around.nomoreparties.co/v1/group-6",headers:{authorization:"7de1d63b-0ba0-4390-89a7-2fe6bdf9eada","Content-Type":"application/json"}}),h="https://register.nomoreparties.co",f=n.p+"static/media/avatar_type_dark.46e6bf6d.jpg",p=n.p+"static/media/header__logo.4e8e0a1d.svg",O=n(0);function _(e){var t=e.loggedIn,n=e.onLogout,a=e.email;return Object(O.jsxs)("header",{className:"header",children:[Object(O.jsx)("img",{className:"header__logo",src:p,alt:"Around US logo"}),Object(O.jsxs)("ul",{className:"header__menu",children:[Object(O.jsx)("li",{children:t?Object(O.jsx)("p",{className:"header__email",children:a}):""}),Object(O.jsx)("li",{children:t?Object(O.jsx)("button",{className:"header__button",onClick:n,children:"Log out"}):""})]})]})}function g(e){var t=e.card,n=e.onCardClick,c=e.onCardLike,o=e.onCardDelete,s=Object(a.useContext)(d),r=t.owner._id===s._id,i=t.likes.some((function(e){return e._id===s._id}));return Object(O.jsxs)("li",{className:"card",children:[r&&Object(O.jsx)("button",{className:"card__delete-button","aria-label":"Delete button",type:"reset",onClick:function(){o(t)}}),Object(O.jsx)("img",{className:"card__image",alt:t.name,src:t.link,onClick:function(){n(t)}}),Object(O.jsxs)("div",{className:"card__group",children:[Object(O.jsx)("h2",{className:"card__text",children:t.name}),Object(O.jsxs)("div",{className:"card__like-container",children:[Object(O.jsx)("button",{className:"card__like-button ".concat(i?"card__like-button_active":null),"aria-label":"Like button",type:"button",onClick:function(){c(t)}}),Object(O.jsx)("p",{className:"card__like-button-count",children:t.likes.length})]})]})]})}function x(e){var t=e.cards,n=e.onEditAvatar,c=e.onEditProfile,o=e.onAddPlace,s=e.onCardClick,r=e.onLikeClick,i=e.onDeleteClick,l=Object(a.useContext)(d);return Object(O.jsxs)("main",{children:[Object(O.jsxs)("section",{className:"profile",children:[Object(O.jsx)("button",{className:"profile__avatar-edit",onClick:n,children:Object(O.jsx)("img",{className:"profile__avatar",src:l.avatar,alt:"profile avatar"})}),Object(O.jsxs)("div",{className:"profile__info",children:[Object(O.jsx)("h1",{className:"profile__text",children:l.name}),Object(O.jsx)("button",{className:"profile__edit-button",onClick:c,"aria-label":"Edit Avatar",type:"button"}),Object(O.jsx)("p",{className:"profile__paragraph",children:l.about})]}),Object(O.jsx)("button",{className:"profile__add-button",onClick:o,"aria-label":"Add button",type:"button"})]}),Object(O.jsx)("section",{className:"elements",children:Object(O.jsx)("ul",{className:"elements__list",children:t.map((function(e){return Object(O.jsx)(g,{card:e,onCardClick:s,onCardLike:r,onCardDelete:i},e._id)}))})})]})}function v(){return Object(O.jsx)("footer",{className:"footer",children:Object(O.jsx)("p",{className:"footer__text",children:"\xa9 2020 Around The U.S."})})}function C(e){var t=e.selectedCard,n=e.onClose;return Object(O.jsx)("div",{className:"modal modal_type_image ".concat(t?"modal_is-open":null),children:Object(O.jsxs)("figure",{className:"modal__figure",children:[Object(O.jsx)("button",{className:"form__close-button form__close-button_type-image",onClick:n,"aria-label":"Close button",type:"button"}),Object(O.jsx)("img",{className:"modal__image",src:t?t.link:null,alt:t?t.name:null}),Object(O.jsx)("figcaption",{className:"modal__image-title",children:t?t.name:null})]})})}function y(e){return Object(O.jsx)("div",{className:"modal modal_type_".concat(e.modalName," ").concat(e.isOpen&&"modal_is-open"),children:Object(O.jsxs)("form",{action:"#",className:"form form_".concat(e.formType),onSubmit:e.onSubmit,children:[Object(O.jsx)("h3",{className:"form__title",children:e.formTitle}),e.children,Object(O.jsx)("button",{className:"form__button form__button_type_save",type:"submit",children:e.submitText}),Object(O.jsx)("button",{className:"form__close-button",onClick:e.onClose,"aria-label":"Close button",type:"reset"})]})})}function S(e){return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("input",{type:e.type,placeholder:e.placeholder,className:"form__input form__input_".concat(e.inputType),name:e.name,description:e.description,minLength:e.min,maxLength:e.max,onChange:e.handleChange,value:e.value,autoComplete:"off",required:!0})})}function N(e){var t=Object(a.useContext)(d),n=Object(a.useState)(""),c=Object(l.a)(n,2),o=c[0],s=c[1],r=Object(a.useState)(""),i=Object(l.a)(r,2),u=i[0],j=i[1];return Object(a.useEffect)((function(){s(t.name),j(t.about)}),[t]),Object(O.jsxs)(y,{modalName:"edit_profile",formType:"type_profile",formTitle:"Edit profile",submitText:e.submitStatus?"Saving...":"Save",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onUpdateUser({name:o,about:u}),e.setSubmitStatus(!0)},children:[Object(O.jsx)(S,{type:"text",name:"profile",placeholder:"Name",inputType:"type_name",min:"2",max:"40",handleChange:function(e){s(e.target.value)},value:o}),Object(O.jsx)(S,{type:"text",name:"about",placeholder:"About me",inputType:"type_about",min:"2",max:"200",handleChange:function(e){j(e.target.value)},value:u})]})}function k(e){var t=Object(a.useState)(""),n=Object(l.a)(t,2),c=n[0],o=n[1];return Object(a.useEffect)((function(){o("")}),[e.isOpen]),Object(O.jsx)(y,{modalName:"type_avatar",formType:"type_avatar",formTitle:"Edit Profile Picture",submitText:e.submitStatus?"Saving...":"Save",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onUpdateAvatar({avatar:c}),e.setSubmitStatus(!0)},children:Object(O.jsx)(S,{type:"url",name:"avatar",placeholder:"Image Link",inputType:"type_avatar",id:"avatar-url-error",handleChange:function(e){o(e.target.value)},value:c})})}var T=function(e){var t=Object(a.useState)(""),n=Object(l.a)(t,2),c=n[0],o=n[1],s=Object(a.useState)(""),r=Object(l.a)(s,2),i=r[0],u=r[1];return Object(a.useEffect)((function(){o(""),u("")}),[e.isOpen]),Object(O.jsxs)(y,{modalName:"type_add-card",formType:"type_profile",formTitle:"New Place",submitText:e.submitStatus?"Creating...":"Create",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onAddPlace({name:c,link:i}),e.setSubmitStatus(!0),o(""),u("")},children:[Object(O.jsx)(S,{type:"text",placeholder:"Title",inputType:"card-title",name:"title",id:"card-title-error",handleChange:function(e){o(e.target.value)},value:c}),Object(O.jsx)(S,{type:"url",placeholder:"Image Link",inputType:"card-url",name:"url",id:"card-url-error",handleChange:function(e){u(e.target.value)},value:i})]})};var E=function(e){return Object(O.jsx)(y,{modalName:"type_delete-card",formType:"type_profile",formTitle:"Are you sure?",submitText:e.submitStatus?"Deleting...":"Yes",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onDeleteCard(e.deleteCard),e.setSubmitStatus(!0)},card:e.deleteCard})},L=function(e){var t=e.handleRegister,n=Object(a.useState)(""),c=Object(l.a)(n,2),o=c[0],s=c[1],i=Object(a.useState)(""),u=Object(l.a)(i,2),d=u[0],j=u[1];return Object(O.jsx)("div",{className:"page",children:Object(O.jsxs)("div",{className:"page__container",children:[Object(O.jsxs)("header",{className:"header",children:[Object(O.jsx)("img",{className:"header__logo",src:p,alt:"Around US logo"}),Object(O.jsx)("ul",{className:"header__menu",children:Object(O.jsx)("li",{children:Object(O.jsx)(r.c,{to:"/signin",className:"header__link",children:"Log in"})})})]}),Object(O.jsxs)("form",{className:"form__autorization",onSubmit:function(e){e.preventDefault(),t(o,d)},children:[Object(O.jsx)("h2",{className:"form__title form__title-autorization",children:"Sign up"}),Object(O.jsx)(S,{name:"email",inputType:"autorization",placeholder:"Email",type:"email",handleChange:function(e){s(e.target.value)},value:o}),Object(O.jsx)(S,{name:"password",inputType:"autorization",placeholder:"Password",type:"password",handleChange:function(e){j(e.target.value)},value:d}),Object(O.jsx)("button",{className:"form__button form__button_autorization",type:"submit",children:"Sign up"}),Object(O.jsx)(r.b,{to:"signin",className:"form__text",children:"Already a member? Log in here!"})]})]})})},P=function(e){var t=e.handleLogin,n=Object(a.useState)(""),c=Object(l.a)(n,2),o=c[0],s=c[1],i=Object(a.useState)(""),u=Object(l.a)(i,2),d=u[0],j=u[1];return Object(O.jsx)("div",{className:"page",children:Object(O.jsxs)("div",{className:"page__container",children:[Object(O.jsxs)("header",{className:"header",children:[Object(O.jsx)("img",{className:"header__logo",src:p,alt:"Around US logo"}),Object(O.jsx)("ul",{className:"header__menu",children:Object(O.jsx)("li",{children:Object(O.jsx)(r.c,{to:"/signup",className:"header__link",children:"Sign up"})})})]}),Object(O.jsxs)("form",{className:"form__autorization",onSubmit:function(e){e.preventDefault(),t(o,d)},children:[Object(O.jsx)("h2",{className:"form__title form__title-autorization",children:"Log in"}),Object(O.jsx)(S,{name:"email",inputType:"autorization",placeholder:"Email",type:"email",handleChange:function(e){s(e.target.value)},value:o}),Object(O.jsx)(S,{name:"password",inputType:"autorization",placeholder:"Password",type:"password",handleChange:function(e){j(e.target.value)},value:d}),Object(O.jsx)("button",{className:"form__button form__button_autorization",type:"submit",children:"Log in"}),Object(O.jsx)(r.b,{to:"signup",className:"form__text",children:"Not a member yet? Sign up here!"})]})]})})},U=n(23),A=function(e){e.component;var t=Object(U.a)(e,["component"]);return Object(O.jsx)(u.b,{exact:!0,path:t.path,children:t.loggedIn?t.children:Object(O.jsx)(u.a,{to:"/signin"})})},w=n.p+"static/media/success.1b6082f8.svg",D=n.p+"static/media/error.df8eddf6.svg",I=function(e){return Object(O.jsx)("div",{className:"modal modal_type_".concat(e.modalName," ").concat(e.isOpen&&"modal_is-open"),children:Object(O.jsxs)("form",{className:"form form__success",children:[Object(O.jsx)("img",{className:"form__image",src:e.registered?w:D,alt:"icon"}),Object(O.jsx)("p",{className:"form__text-tooltip",children:e.registered?"Success! You have now been registered.":"Oops, something went wrong! Please try again."}),Object(O.jsx)("button",{className:"form__close-button",onClick:e.onClose,"aria-label":"Close button",type:"reset"})]})})};function z(){var e=Object(u.g)(),t=Object(a.useState)(!1),n=Object(l.a)(t,2),c=n[0],o=n[1],s=Object(a.useState)(""),r=Object(l.a)(s,2),j=r[0],b=r[1],p=Object(a.useState)(!1),g=Object(l.a)(p,2),y=g[0],S=g[1],U=Object(a.useState)(!1),w=Object(l.a)(U,2),D=w[0],z=w[1],J=Object(a.useState)(!1),F=Object(l.a)(J,2),B=F[0],H=F[1],R=Object(a.useState)(!1),Y=Object(l.a)(R,2),q=Y[0],G=Y[1],M=Object(a.useState)(!1),K=Object(l.a)(M,2),Q=K[0],V=K[1],W=Object(a.useState)(!1),X=Object(l.a)(W,2),Z=X[0],$=X[1],ee=Object(a.useState)(null),te=Object(l.a)(ee,2),ne=te[0],ae=te[1],ce=Object(a.useState)(!1),oe=Object(l.a)(ce,2),se=oe[0],re=oe[1],ie=Object(a.useState)(null),le=Object(l.a)(ie,2),ue=le[0],de=le[1],je=Object(a.useState)({name:"",about:"",avatar:f}),be=Object(l.a)(je,2),me=be[0],he=be[1],fe=Object(a.useState)([]),pe=Object(l.a)(fe,2),Oe=pe[0],_e=pe[1];function ge(){H(!1),G(!1),V(!1),$(!1),ae(null),re(!1),Ce(!1)}function xe(e){"Escape"===e.key&&ge()}function ve(e){e.target.classList.contains("modal")&&ge()}function Ce(e){e?document.addEventListener("keyup",xe):document.removeEventListener("keyup",xe),e?document.addEventListener("click",ve):document.removeEventListener("click",ve)}function ye(e){m.removeCard(e._id).then((function(){var t=Oe.filter((function(t){return t._id!==e._id}));_e(t),ge()})).catch((function(e){return console.log(e)}))}function Se(){S(!0)}return Object(a.useEffect)((function(){Promise.all([m.getUserInfo(),m.getCardList({})]).then((function(e){var t=Object(l.a)(e,2),n=t[0],a=t[1];he(n),_e(a)})).catch((function(e){return console.log(e)}))}),[]),Object(a.useEffect)((function(){var t=localStorage.getItem("jwt");t&&function(e){return fetch("".concat(h,"/users/me"),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}).then((function(e){return e.json()})).then((function(e){return e}))}(t).then((function(t){t&&(b(t.data.email),o(!0),e.push("/"))}))}),[e]),Object(O.jsx)(d.Provider,{value:me,children:Object(O.jsxs)("div",{className:"page",children:[Object(O.jsxs)("div",{className:"page__container",children:[Object(O.jsxs)(u.d,{children:[Object(O.jsx)(u.b,{path:"/signup",children:Object(O.jsx)(L,{handleTooltip:Se,handleRegister:function(t,n){(function(e,t){return fetch("".concat(h,"/signup"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})}).then((function(e){return e.json()})).then((function(e){return e})).catch((function(e){return console.log(e)}))})(t,n).then((function(n){if(n.data)return b(t),z(!0),Se(),void e.push("/signin");z(!1),Se()})).catch((function(e){return console.log(e)}))}})}),Object(O.jsx)(u.b,{path:"/signin",children:Object(O.jsx)(P,{handleLogin:function t(n,a){(function(e,t){return fetch("".concat(h,"/signin"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})}).then((function(e){return e.json()})).then((function(e){if(e)return localStorage.setItem("jwt",e.token),e})).catch((function(e){return console.log(e)}))})(n,a).then((function(a){a.token&&(t(),b(n),e.push("/"))})).catch((function(e){return console.log(e)})),o(!0),b(n)},loggedIn:c})}),Object(O.jsxs)(A,{path:"/",loggedIn:c,children:[Object(O.jsx)(_,{loggedIn:c,onLogout:function(){localStorage.removeItem("jwt"),o(!1),b("")},email:j}),Object(O.jsx)(x,{onEditAvatar:function(){H(!0),Ce(!0)},onEditProfile:function(){G(!0),Ce(!0)},onAddPlace:function(){V(!0),Ce(!0)},onDeleteClick:function(e){de(e),$(!0),Ce(!0)},onCardClick:function(e){ae(e),Ce(!0)},cards:Oe,onDeleteCard:ye,onLikeClick:function(e){var t=e.likes.some((function(e){return e._id===me._id}));m.updateLikes(e._id,!t).then((function(t){var n=Oe.map((function(n){return n._id===e._id?t:n}));_e(n)})).catch((function(e){return console.log(e)}))}})]}),Object(O.jsx)(u.b,{path:"/",children:c?Object(O.jsx)(u.a,{to:"/"}):Object(O.jsx)(u.a,{to:"/signin"})})]}),Object(O.jsx)(v,{footerText:"\xa9 2020 Around The U.S."})]}),Object(O.jsx)(N,{isOpen:q,onClose:ge,onUpdateUser:function(e){m.setUserInfo(e).then((function(e){he(e),ge()})).catch((function(e){return console.log(e)}))},submitStatus:se,setSubmitStatus:re}),Object(O.jsx)(k,{isOpen:B,onClose:ge,onUpdateAvatar:function(e){m.setUserAvatar(e).then((function(e){he(e),ge()})).catch((function(e){return console.log(e)}))},submitStatus:se,setSubmitStatus:re}),Object(O.jsx)(T,{isOpen:Q,onClose:ge,onAddPlace:function(e){m.addCard({name:e.name,link:e.link}).then((function(e){_e([e].concat(Object(i.a)(Oe))),ge()})).catch((function(e){return console.log(e)}))},submitStatus:se,setSubmitStatus:re}),Object(O.jsx)(E,{isOpen:Z,onClose:ge,onDeleteCard:ye,submitStatus:se,setSubmitStatus:re,deleteCard:ue}),Object(O.jsx)(C,{onClose:ge,selectedCard:ne}),Object(O.jsx)(I,{isOpen:y,onClose:function(){S(!1)},registered:D})]})})}var J=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,38)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),o(e),s(e)}))};s.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(r.a,{children:Object(O.jsx)(z,{})})}),document.getElementById("root")),J()}},[[37,1,2]]]);
//# sourceMappingURL=main.e009698a.chunk.js.map