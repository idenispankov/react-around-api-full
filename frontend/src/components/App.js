/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { Route, Redirect, Switch, useHistory } from 'react-router-dom';

import { CurrentUserContext } from '../context/CurrentUserContext';
import Api from '../utils/api';
import * as auth from '../utils/auth';
import '../index.css';

import avatar from '../images/avatar_type_dark.jpg';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import EditProfilePopup from '../components/EditProfilePopup';
import EditAvatarPopup from '../components/EditAvatarPopup';
import AddPlacePopup from '../components/AddPlacePopup';
import DeleteCardPopup from './DeleteCardPopup';
import Register from './Register';
import Login from './Login';
import ProtectedRoute from './ProtectedRoute';
import InfoTooltip from './InfoTooltip';

export default function App() {
  const [token, setToken] = useState(localStorage.getItem('jwt'));
  const history = useHistory();

  const api = new Api({
    baseUrl: 'https://cryptic-ridge-14112.herokuapp.com',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
  });

  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [isToolTipOpen, setIsToolTipOpen] = useState(false);
  const [registered, setIsregestered] = useState(false);

  const [isAvatarPopupOpen, setIsAvatarPopupOpen] = useState(false);
  const [isProfilePopupOpen, setIsProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isDeleteCardPopupOpen, setIsDeleteCardPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [submitStatus, setSubmitStatus] = useState(false);
  const [deleteCard, setDeleteCard] = useState(null);

  const [currentUser, setCurrentUser] = useState({
    _id: '',
    email: '',
    name: '',
    about: '',
    avatar: avatar,
  });

  const [cards, setCards] = useState([]);

  function handleEditAvatarClick() {
    setIsAvatarPopupOpen(true);
    setEventListener(true);
  }

  function handleEditProfileClick() {
    setIsProfilePopupOpen(true);
    setEventListener(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
    setEventListener(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
    setEventListener(true);
  }

  function handleDeleteCardClick(card) {
    setDeleteCard(card);
    setIsDeleteCardPopupOpen(true);
    setEventListener(true);
  }

  function closeAllPopups() {
    setIsAvatarPopupOpen(false);
    setIsProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsDeleteCardPopupOpen(false);
    setSelectedCard(null);
    setSubmitStatus(false);
    setEventListener(false);
  }

  function closeOnEsc(e) {
    if (e.key === 'Escape') {
      closeAllPopups();
    }
  }

  function closeOutSide(e) {
    if (e.target.classList.contains('modal')) {
      closeAllPopups();
    }
  }

  function setEventListener(listen) {
    listen
      ? document.addEventListener('keyup', closeOnEsc)
      : document.removeEventListener('keyup', closeOnEsc);
    listen
      ? document.addEventListener('click', closeOutSide)
      : document.removeEventListener('click', closeOutSide);
  }

  function handleUpdateUser(userData) {
    api
      .setUserInfo(userData)
      .then((user) => {
        setCurrentUser(user);
        closeAllPopups();
      })
      .catch((err) => console.log(err));
  }

  function handleUpdateAvatar(avatarData) {
    api
      .setUserAvatar(avatarData)
      .then((user) => {
        setCurrentUser(user);
        closeAllPopups();
      })
      .catch((err) => console.log(err));
  }

  function handleAddPlaceSubmit(cardData) {
    if (token) {
      api
        .addCard(cardData)
        .then((newCard) => {
          setCards([...cards, newCard]);
          closeAllPopups();
        })
        .catch((err) => console.log(err));
    }
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i === currentUser._id);
    api
      .updateLikes(card._id, !isLiked)
      .then((newCard) => {
        const newCards = cards.map((c) => (c._id === card._id ? newCard : c));
        setCards(newCards);
      })
      .catch((err) => console.log(err));
  }

  function handleCardDelete(card) {
    api
      .removeCard(card._id)
      .then(() => {
        const newCards = cards.filter((c) => c._id !== card._id);
        setCards(newCards);
        closeAllPopups();
      })
      .catch((err) => console.log(err));
  }

  // ToolTip
  function handleTooltip() {
    setIsToolTipOpen(true);
  }

  function onClose() {
    setIsToolTipOpen(false);
  }

  // REGISTARTION, LOG IN, LOG OUT with TOKEN CHECK
  function handleRegister(email, password) {
    auth
      .register(email, password)
      .then((res) => {
        if (res.email) {
          setIsregestered(true);
          handleTooltip();
          history.push('/signin');
        } else if (!res.email) {
          setIsregestered(false);
          handleTooltip();
          history.push('/signup');
        }
      })
      .catch((err) => console.log(err));
  }

  function handleLogin(email, password) {
    auth
      .login(email, password)
      .then((data) => {
        if (data.email) {
          setLoggedIn(true);
          setToken(localStorage.getItem('jwt'));
          history.push('/');
        } else if (!data.email) {
          setLoggedIn(false);
          history.push('/signin');
        }
      })
      .catch((err) => console.log(err));
  }

  function handleLogout() {
    localStorage.removeItem('jwt');
    setToken('');
    setLoggedIn(false);
  }

  useEffect(() => {
    if (token) {
      auth
        .checkToken(token)
        .then((res) => {
          if (res) {
            setLoggedIn(true);
            setEmail(res.email);
            setCurrentUser(res);
            history.push('/');
          }
        })
        .catch((err) => console.log(err));
      api
        .getCardList()
        .then((res) => {
          setCards(res);
        })
        .catch((err) => console.log(err));
    }
  }, [token]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='page'>
        <div className='page__container'>
          <Switch>
            <Route path='/signup'>
              <Register
                handleTooltip={handleTooltip}
                handleRegister={handleRegister}
              />
            </Route>
            <Route path='/signin'>
              <Login handleLogin={handleLogin} loggedIn={loggedIn} />
            </Route>
            <ProtectedRoute path='/' loggedIn={loggedIn}>
              <Header
                loggedIn={loggedIn}
                onLogout={handleLogout}
                email={email}
              />

              <Main
                onEditAvatar={handleEditAvatarClick}
                onEditProfile={handleEditProfileClick}
                onAddPlace={handleAddPlaceClick}
                onDeleteClick={handleDeleteCardClick}
                onCardClick={handleCardClick}
                cards={cards}
                onDeleteCard={handleCardDelete}
                onLikeClick={handleCardLike}
              />
            </ProtectedRoute>

            <Route path='/'>
              {loggedIn ? <Redirect to='/' /> : <Redirect to='/signin' />}
            </Route>
          </Switch>
          <Footer footerText='&copy; 2020 Around The U.S.' />
        </div>

        <EditProfilePopup
          isOpen={isProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
          submitStatus={submitStatus}
          setSubmitStatus={setSubmitStatus}
        />
        <EditAvatarPopup
          isOpen={isAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
          submitStatus={submitStatus}
          setSubmitStatus={setSubmitStatus}
        />
        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlace={handleAddPlaceSubmit}
          submitStatus={submitStatus}
          setSubmitStatus={setSubmitStatus}
        />
        <DeleteCardPopup
          isOpen={isDeleteCardPopupOpen}
          onClose={closeAllPopups}
          onDeleteCard={handleCardDelete}
          submitStatus={submitStatus}
          setSubmitStatus={setSubmitStatus}
          deleteCard={deleteCard}
        />

        <ImagePopup onClose={closeAllPopups} selectedCard={selectedCard} />

        <InfoTooltip
          isOpen={isToolTipOpen}
          onClose={onClose}
          registered={registered}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}
