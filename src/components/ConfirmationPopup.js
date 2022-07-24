import React, { useEffect } from "react";
import PopupWithForm from "./PopupWithForm";

function ConfirmationPopup({ card, isOpen, onClose, onCardDelete, setSelectedCard }) {
    function handleSubmit(evt) {
        evt.preventDefault()
        onCardDelete(card);
    }

    useEffect(() => {
      if(isOpen) {
        setSelectedCard(card)
      }
    },
     [card, isOpen, setSelectedCard]);

  return (
    <PopupWithForm
        title="Вы уверены?"
        name="confirmation"
        buttonText="Да"
        isOpen={isOpen}
        onClose={onClose}
        onSubmit={handleSubmit}
      ></PopupWithForm>
  )
}

export default ConfirmationPopup;
