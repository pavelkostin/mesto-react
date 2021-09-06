import React from 'react'
import { CurrentUserContext } from '../contexts/CurrentUserContext';

export function Card({ card, onCardClick, onCardLike }) {

    const currentUser = React.useContext(CurrentUserContext);

    const isOwn = card.owner._id === currentUser._id;
    const cardDeleteButtonClassName = (
        `${isOwn ? 'cards__delete' : 'cards__delete_hidden'}`
    );

    const isLiked = card.likes.some(i => i._id === currentUser._id);
    const cardLikeButtonClassName = `cards__like ${isLiked ? 'cards__like_active' : ''}`;

    function handleClick() {
        onCardClick(card);
    }

    function handleLikeClick() {
        onCardLike(card)
    }

    return (
        <>
            <li
                className="cards__item">
                <img className="cards__photo" onClick={handleClick} src={card.link} alt={card.name} />
                <p className="cards__place">{card.name}</p>
                <button className={cardDeleteButtonClassName}></button>
                <button className={cardLikeButtonClassName} onClick={handleLikeClick}></button>
                <p className="cards__quantity-likes">{card.likes.length}</p>
            </li>

        </>
    )
}