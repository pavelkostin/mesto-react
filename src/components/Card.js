import React from 'react'

export function Card({ card, onCardClick }) {

    function handleClick() {
        onCardClick(card);
    }


    return (
        <>
            <li
                className="cards__item">
                <img className="cards__photo" onClick={handleClick} src={card.link} alt={card.name} />
                <p className="cards__place">{card.name}</p>
                <button className="cards__delete"></button>
                <button className="cards__like"></button>
                <p className="cards__quantity-likes">{card.likes.length}</p>
            </li>

        </>
    )
}