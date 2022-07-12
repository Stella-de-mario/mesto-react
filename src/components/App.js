import React from "react";
import Header from "./Header.js";
import Main from "./Main.js";
import ImagePopup from "./ImagePopup.js";
import PopupWithForm from "./PopupWithForm.js";
import Footer from "./Footer.js";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({});
  }

  return (
    
    <div className="page">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
        onAddPlace={handleAddPlaceClick}
      />
    

      <PopupWithForm
        name="profile"
        title="Редактировать профиль"
        buttonText="Сохранить"
        onClose={closeAllPopups}
        isOpen={`${isEditProfilePopupOpen ? 'popup_opened' : ''}`}
      >
        <input
          type="text"
          className="popup__input popup__input-name"
          name="name"
          minLength="2"
          maxLength="40"
          id="profile-name"
          required
          placeholder="Имя"
        />
        <span className="popup__error" id="profile-name-error" />

        <input
          type="text"
          className="popup__input popup__input-profession"
          name="profession"
          minLength="2"
          maxLength="200"
          id="profile-profession"
          required
          placeholder="Профессия"
        />
        <span className="popup__error" id="profile-profession-error" />
      </PopupWithForm>

      <PopupWithForm
        name="avatar"
        title="Обновить аватар"
        buttonText="Сохранить"
        onClose={closeAllPopups}
        isOpen={`${isEditAvatarPopupOpen ? 'popup_opened' : ''}`}
      >
        <input
          required
          className="popup__input"
          type="url"
          id="avatar-link"
          name="avatar"
          placeholder="Ссылка на новый аватар"
        />
        <span className="popup__error" id="avatar-link-error" />
      </PopupWithForm>

      <PopupWithForm
        name="card"
        title="Новое место"
        buttonText="Сохранить"
        onClose={closeAllPopups}
        isOpen={`${isAddPlacePopupOpen ? 'popup_opened' : ''}`}
      >
        <input
          type="text"
          className="popup__input popup__input-card"
          name="title"
          id="card-title"
          minLength="2"
          maxLength="30"
          required
          placeholder="Название"
        />
        <span className="popup__error" id="card-name-error" />

        <input
          type="url"
          className="popup__input popup__input-link"
          name="link"
          id="card-link"
          required
          placeholder="Ссылка на картинку"
        />
        <span className="popup__error" id="card-link-error" />
      </PopupWithForm>

      <PopupWithForm
        title="Вы уверены?"
        name="confirmation"
        buttonText="Да"
      ></PopupWithForm>

      <ImagePopup onClose={closeAllPopups} card={selectedCard} />

      <Footer />

    </div>

  );
}

export default App;