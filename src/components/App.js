import React, { useEffect, useState } from 'react';
import '../index.css';
import { Header } from './Header';
import { Main } from './Main';
import { Footer } from './Footer';
import { PopupEditProfile } from './PopupEditProfile';
import { PopupEditAvatar } from './PopupEditAvatar';
import { PopupAddPlace } from './PopupAddPlace';
import { PopupConfirm } from './PopupConfirm';
import { ImagePopup } from './ImagePopup';
import Api from '../utils/Api.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

export function App() {

  const [cards, setCards] = useState([])
  const [currentUser, setCurrentUser] = useState({});
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false)
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false)
  const [selectedCard, setSelectedCard] = useState({})

  useEffect(() => {
      Api.getCardsFromServer()
          .then((cards) => {
              setCards(cards)
          })
  }, [])

  useEffect(()=>{
    Api.getUSerInfoFromServer()
      .then((userInfo) =>{
        setCurrentUser(userInfo)
      })
  })


  function handleCardLike(card) {

    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    // Отправляем запрос в API и получаем обновлённые данные карточки
    Api.changeLikeCardStatus(card, !isLiked).then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    });

}

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
    <CurrentUserContext.Provider value={currentUser}>
      <>
        <div className='page'>
          <Header />
          <Main
          
            onEditProfile={handleEditProfileClick}
            onEditAvatar={handleEditAvatarClick}
            onAddPlace={handleAddPlaceClick}
            onCardClick={handleCardClick}
            onCardLike={handleCardLike}
            cards={cards}
          />
          <Footer />
          <PopupEditProfile isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} />
          <PopupAddPlace isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} />
          <PopupEditAvatar isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} />
          <ImagePopup onClose={closeAllPopups} card={selectedCard} />
          <PopupConfirm />
        </div>
      </>
    </CurrentUserContext.Provider>
  )
}
