import React, { useEffect } from "react";
import { useForm } from "../hooks/useForm.js";
import PopupWithForm from "./PopupWithForm.js";

function AddPlacePopup({ onAddPlace, isOpen, onClose }) {
  const { values, handleChange, setValues } = useForm({});

  function handleSubmit(evt) {
    evt.preventDefault();
    onAddPlace({
      title: values.title,
      link: values.link,
    });
  }

  useEffect(() => {
    if (isOpen) {
      setValues({});
    }
  }, [isOpen, setValues]);

  return (
    <PopupWithForm
      name="card"
      title="Новое место"
      buttonText="Сохранить"
      onClose={onClose}
      isOpen={`${isOpen ? "popup_opened" : ""}`}
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        value={values.title || ""}
        onChange={handleChange}
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
        value={values.link || ""}
        onChange={handleChange}
        className="popup__input popup__input-link"
        name="link"
        id="card-link"
        required
        placeholder="Ссылка на картинку"
      />
      <span className="popup__error" id="card-link-error" />
    </PopupWithForm>
  );
}

export default AddPlacePopup;
