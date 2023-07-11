import React from 'react';
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card(props) {

  const currentUser = React.useContext(CurrentUserContext);

  // Определяем, являемся ли мы владельцем текущей карточки
  const isOwn = props.card.owner._id === currentUser._id;
  const cardDeleteButtonClassName = (`element__button-delete ${isOwn ? '' : 'element__delete-button_hidden'}`);

  // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
  const isLiked = props.card.likes.some(i => i._id === currentUser._id);
  const cardLikeButtonClassName = `element__button-like ${isLiked ? 'element__button-like_active' : ''}`;

  function handleClick() {
    props.onCardClick(props.card);
  };

  function handleLikeClick() {
    props.onCardLike(props.card)
  };

  function handleDeleteClick() {
    props.onCardDelete(props.card);
  };


  return (

    <article className="element">
      <img className="element__photo" src={props.link} alt={props.name} onClick={handleClick} />
      <button className={cardDeleteButtonClassName} onClick={handleDeleteClick} type="button" aria-label="Корзина"></button>
      <div className="element__caption">
        <h2 className="element__captiontext">{props.name}</h2>
        <div className="element__like">
          <button className={cardLikeButtonClassName} onClick={handleLikeClick} type="button" aria-label="Лайк"></button>
          <p className="element__like-count">{props.likes}</p>
        </div>
      </div>
    </article>

  )
}

export default Card;