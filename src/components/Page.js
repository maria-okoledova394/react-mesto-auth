import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';
import api from '../utils/api';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import React, { useEffect, useState } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Page(props) {
   // console.log(props); //TODO прокинуть в Header

    const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
    const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState({});

    const [currentUser, setСurrentUser] = useState({});
    const [cards, setCards] = useState([]);

    useEffect(() => {

        api.getProfileInfo()
        .then (data => {
          setСurrentUser(data);
        })
        .catch(err => {
          console.log(err);
        })
    
      }, []);
    
    useEffect(() => {
        api.getInitialCards()
        .then (data => {
          setCards(data);
        })
        .catch(err => {
          console.log(err);
        })
    
    }, []);
    
      function handleCardLike(card) {
        const isLiked = card.likes.some(i => i._id === currentUser._id);
        
        api.changeLikeCardStatus(card._id, !isLiked)
        .then((newCard) => {
            setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
        })
        .catch(err => {
          console.log(err);
        });
      }
    
      function handleCardDelete(card) {
        api.removeCard(card._id)
        .then(() => {
            setCards((state) => state.filter((c) => c._id !== card._id));
        })
        .catch(err => {
          console.log(err);
        });
      }
    
      function handleEditProfileClick() {
        setEditProfilePopupOpen(true);
      }
    
      function handleAddPlaceClick() {
        setAddPlacePopupOpen(true);
      }
    
      function handleEditAvatarClick() {
        setEditAvatarPopupOpen(true);
      }
    
      function closeAllPopups() {
        setEditProfilePopupOpen(false);
        setAddPlacePopupOpen(false);
        setEditAvatarPopupOpen(false);
        setSelectedCard({});
      }
    
      function handleCardClick(card) {
        setSelectedCard(card);
      }
    
      function handleUpdateUser(data) {
        api.changeProfileInfo(data)
        .then (data => {
          setСurrentUser(data);
        })
        .then (() => {
          closeAllPopups();
        })
        .catch(err => {
          console.log(err);
        })
      }
    
      function handleUpdateAvatar(data) {
        api.updateAvatar(data)
        .then (data => {
          setСurrentUser(data);
        })
        .then (() => {
          closeAllPopups();
        })
        .catch(err => {
          console.log(err);
        })
      }
    
      function handleAddPlaceSubmit(data) {
        api.addCard(data)
        .then (newCard => {
          setCards([newCard, ...cards]);
        })
        .then (() => {
          closeAllPopups();
        })
        .catch(err => {
          console.log(err);
        })
      }

    return (
        <CurrentUserContext.Provider value={currentUser}>
        <>
            <Header onSignOut={props.onSignOut} email={props.email}/>
            <Main onEditProfile={handleEditProfileClick} cards={cards} onCardLike={handleCardLike} onCardDelete={handleCardDelete} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick}/>
            <Footer />
            <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />
            <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} />
            <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlace={handleAddPlaceSubmit} />
            <PopupWithForm name="delete" title="Вы уверены?" />
            <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
        </>
        </CurrentUserContext.Provider>
    );
  }
  
  export default Page;