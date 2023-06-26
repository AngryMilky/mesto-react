import React from 'react';
import Card from "./Card";


function Main(props) {

  return (
    <main>
      <section className="profile">
        <img className="profile__avatar" alt="Аватар профиля" src={`${props.userAvatar})`} />
        <button type="button" className="profile__avatar-edit-button" onClick={props.onEditAvatar}></button>
        <div className="profile__info">
          <div className="profile__name-and-button">
            <h1 className="profile__name">{props.userName}</h1>
            <button className="profile__button-edit" type="button" aria-label="Изменить" onClick={props.onEditProfile}></button>
          </div>
          <p className="profile__job">{props.userDescription}</p>
        </div>
        <button className="profile__button-add" type="button" aria-label="Добавить" onClick={props.onAddPlace}></button>
      </section>

      <section className="elements">
        {props.cards.map((card) => (
          <Card
            card={card}
            onCardClick={props.onCardClick}
          />
        ))}
      </section>
    </main>
  )
}

export default Main;