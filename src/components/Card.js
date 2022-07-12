import React from "react";

function Card({ card, onCardClick } ) {

  function handleClick() {
    onCardClick(card);
  }
 
  return (

    <li className="card">
       <button
          className="card__delete-button"
          type="button"
          aria-label="Удалить"
        ></button>
        <img className="card__image" onClick={handleClick} src={card.link} alt={card.title} />
        <div className="card__caption">
          <h2 className="card__title">{card.title}</h2>
          <div className="card__heart-container">
            <button
              className="card__heart"
              type="button"
              aria-label="Нравится"
            ></button>
            <p className="card__heart-counter">{card.likes.length}</p>
          </div>
        </div>
      </li>
  )
}

export default Card; 