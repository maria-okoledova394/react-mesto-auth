import React from 'react';

function PopupWithForm(props) {
    return (
      <div className={`popup popup_function_${props.name} ${props.isOpen ? "popup_opened" : ""}`}>
        <form className={`popup__form popup__container popup__container_function_${props.name} popup__container_type_form`} onSubmit={props.onSubmit}>
          <button className="popup__close-button" type="button" onClick={props.onClose}></button>
          <h2 className={`popup__title popup__title_function_${props.name}`}>{props.title}</h2>
          {props.children}
          <button className={`popup__button popup__button-save popup__button-save_function_${props.name}`} type="submit">Сохранить</button>
        </form>
      </div>   
    );
  }
  
  export default PopupWithForm;