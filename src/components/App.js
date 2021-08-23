import '../index.css';
import { Header } from './Header';
import { Main } from './Main';
import { Footer } from './Footer';
import { PopupEditProfile } from './PopupEditProfile';
import { PopupEditAvatar } from './PopupEditAvatar';
import { PopupAddPlace } from './PopupAddPlace';
import { PopupConfirm } from './PopupConfirm'
import ImagePopup from './ImagePopup';
import Api from '../utils/Api.js';
import React, { useEffect, useState } from 'react';

export function App() {

  const [userInfo, setUserInfo] = useState([])
  const [cards, setCards] = useState([])
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false)
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false)
  const [selectedCard, setSelectedCard] = useState({})

  useEffect(() => {

      Api.getUSerInfoFromServer()
          .then((userInfo) => {
              console.log(userInfo);
              setUserInfo(userInfo)
          })
  }, [])

  useEffect(() => {
      Api.getCardsFromServer()
          .then((cards) => {
              console.log(cards);
              setCards(cards)
          })
  }, [])

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
          userInfo={userInfo}
          cards={cards}
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
