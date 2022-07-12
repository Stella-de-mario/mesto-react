import React from "react";

function PopupWithForm(props) {
  return (
    <div className={`popup popup__input_${props.name} ${props.isOpen ? 'popup_opened' : ''}`}>
    <div className="popup__container">
      <button
        type="button"
        className="popup__close-button" 
        onClick={props.onClose}
        aria-label="Закрыть"
      ></button>
      <h2 className="popup__title">{props.title}</h2>
      <form className="popup__form" name={`${props.name}`} noValidate>
      {props.children}
      <button className="popup__save-button" type="submit">{props.buttonText}</button>
     </form>
    </div>
  </div>
  )
}

export default PopupWithForm;