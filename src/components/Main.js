import React, { useEffect, useState } from 'react';
import Api from '../utils/Api.js';
import { Card } from './Card.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

export function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {

    const currentUser = React.useContext(CurrentUserContext);

    const [cards, setCards] = useState([])

    useEffect(() => {
        Api.getCardsFromServer()
            .then((cards) => {
                setCards(cards)
            })
    }, [])

    return (
        <main>
            <section className="profile">
                <div className="profile__info">
                    <img className="profile__avatar" alt={currentUser.name} style={{ backgroundImage: `url(${currentUser.avatar})` }} onClick={onEditAvatar} />
                    <div className="profile__table">
                        <div className="profile__name">{currentUser.name}</div>
                        <button className="profile__edit" onClick={onEditProfile} type="button"></button>
                        <div className="profile__job">{currentUser.about}</div>
                    </div>
                </div>
                <button className="profile__add" onClick={onAddPlace} type="button"></button>
            </section>
            <section className="cards">
                <ul className="cards__list">
                    {cards.map((card) => {
                        return (
                            <Card
                                onCardClick={onCardClick}
                                key={card._id}
                                card={card}
                            />
                        )
                    })}
                </ul>
            </section>
        </main>
    )
}
