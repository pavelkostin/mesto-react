import React from 'react';

import { Card } from './Card.js';

export function Main(props) {



    return (
        <main>
            <section className="profile">
                <div className="profile__info">
                    <img className="profile__avatar" alt={props.userInfo.name} style={{ backgroundImage: `url(${props.userInfo.avatar})` }} onClick={props.onEditAvatar} />
                    <div className="profile__table">
                        <div className="profile__name">{props.userInfo.name}</div>
                        <button className="profile__edit" onClick={props.onEditProfile} type="button"></button>
                        <div className="profile__job">{props.userInfo.about}</div>
                    </div>
                </div>
                <button className="profile__add" onClick={props.onAddPlace} type="button"></button>
            </section>
            <section className="cards">
                <ul className="cards__list">
                    {props.cards.map((card) => {
                        return (
                            <Card
                            
                            onCardClick={props.onCardClick} 
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
