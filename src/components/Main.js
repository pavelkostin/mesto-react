import React, { useEffect, useState } from 'react';
import Api from '../utils/Api.js';
import { Card } from './Card.js';

export function Main({onEditAvatar, onEditProfile, onAddPlace, onCardClick}) {

    const [userInfo, setUserInfo] = useState({name: '', about: '', avatar: ''})
    const [cards, setCards] = useState([])

    useEffect(() => {
        Promise.all([Api.getUSerInfoFromServer(), Api.getCardsFromServer()])
            .then(([userInfo, cards]) => {
                setUserInfo({
                    name: userInfo.name,
                    about: userInfo.about,
                    avatar: userInfo.avatar
                })
                setCards(cards)
            })
    }, [])

    return (
        <main>
            <section className="profile">
                <div className="profile__info">
                    <img className="profile__avatar" alt={userInfo.name} style={{ backgroundImage: `url(${userInfo.avatar})` }} onClick={onEditAvatar} />
                    <div className="profile__table">
                        <div className="profile__name">{userInfo.name}</div>
                        <button className="profile__edit" onClick={onEditProfile} type="button"></button>
                        <div className="profile__job">{userInfo.about}</div>
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
