import React from 'react';

function Card({ card, onCardClick }) {

  function handleClick() {
    onCardClick(card);
  }

  
  return (

    <article className="element">
      <img className="element__photo" src={card.link} alt={card.name} onClick={handleClick} />
      <button className="element__button-delete" type="button" aria-label="Корзина"></button>
      <div className="element__caption">
        <h2 className="element__captiontext">{card.name}</h2>
        <div className="element__like">
          <button className="element__button-like" type="button" aria-label="Лайк"></button>
          <p className="element__like-count">{card.likes}</p>
        </div>
      </div>
    </article>

  )
}

export default Card;