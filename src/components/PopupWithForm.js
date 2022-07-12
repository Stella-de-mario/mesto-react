import React from "react";

function PopupWithForm({
  name, title, isOpen, onClose, buttonText, children
}) {
  return (
    <div className={`popup popup_${name} ${isOpen ? 'popup_opened' : ''}`}>
    <div className="popup__container">
      <button
        type="button"
        className="popup__close-button" 
        onClick={onClose}
        aria-label="Закрыть"
      ></button>
      <h2 className="popup__title">{title}</h2>
      <form className="popup__form" name={`${name}`} noValidate>
      {children}
      <button className="popup__save-button" type="submit" aria-label={buttonText}>{buttonText}</button>
     </form>
    </div>
  </div>
  )
}

export default PopupWithForm;