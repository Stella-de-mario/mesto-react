import React, { useState, useEffect } from "react";
import { api } from "../utils/Api.js";
import Card from "./Card.js";

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);
  
  const cardsContainer = cards.map((card) => {
    return (
      <Card
       card={card}
       src={card.link}
       title={card.title}
       onCardClick={onCardClick}
       key={card._id} 
       />
    )
  });
  
  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getCards()])
      .then(([userInfo, cards]) => {
        setUserName(userInfo.name);
        setUserAvatar(userInfo.avatar);
        setUserDescription(userInfo.about);
        setCards(cards);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__info">
          <a 
          className="profile__avatar" 
          onClick={onEditAvatar}
          >
            <img
              href="#"
              src={userAvatar}
              alt="Фотография пользователя"
              name="avatar"
              className="profile__image"
            />
          </a>
          <div className="profile__title">
            <h1 className="profile__name" name="name">
              {userName}
            </h1>

            <button
              type="button"
              onClick={onEditProfile}
              className="profile__edit-button"
              aria-label="Изменить"
            ></button>

            <p className="profile__profession" name="about">
              {userDescription}
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={onAddPlace}
          className="profile__add-button"
          aria-label="Добавить"
        ></button>
      </section>

      <section className="places">
        <ul className="places__list">
          {cardsContainer}
        </ul>
      </section>
    </main>
  );
}

export default Main;
