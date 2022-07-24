import React, { useEffect, useRef } from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const avatarRef = useRef();

  function handleSubmit(evt) {
    evt.preventDefault();
    onUpdateAvatar({ avatar: avatarRef.current.value });
  }

  useEffect(() => {
    if (isOpen) {
      console.log(avatarRef.current);
      avatarRef.current.value = "";
    }
  }, [isOpen]);
  
  return (
  <PopupWithForm
    name="avatar"
    title="Обновить аватар"
    buttonText="Сохранить"
    onClose={onClose}
    onSubmit={handleSubmit}
    isOpen={`${isOpen ? "popup_opened" : ""}`}
  >
    <input
      required
      className="popup__input"
      ref={avatarRef}
      type="url"
      id="avatar-link"
      name="avatar"
      placeholder="Ссылка на новый аватар"
    />
    <span className="popup__error" id="avatar-link-error" />
  </PopupWithForm>
  )
}
export default EditAvatarPopup;
