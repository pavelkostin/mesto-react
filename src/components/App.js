import React, { useState } from 'react';
import '../index.css';
import { Header } from './Header';
import { Main } from './Main';
import { Footer } from './Footer';
import { PopupEditProfile } from './PopupEditProfile';
import { PopupEditAvatar } from './PopupEditAvatar';
import { PopupAddPlace } from './PopupAddPlace';
import { PopupConfirm } from './PopupConfirm';
import { ImagePopup } from './ImagePopup';

export function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false)
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false)
  const [selectedCard, setSelectedCard] = useState({})

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true)
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true)
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true)
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({});
  }

  return (
    <>
      <div className='page'>
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onEditAvatar={handleEditAvatarClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
        />
        <Footer />
        <PopupEditProfile isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} />
        <PopupAddPlace isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} />
        <PopupEditAvatar isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} />
        <ImagePopup onClose={closeAllPopups} card={selectedCard} />
        <PopupConfirm />
      </div>
    </>
  )
}
