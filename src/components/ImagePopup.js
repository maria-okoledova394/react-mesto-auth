import React from 'react';

function ImagePopup(props) {
    return (
      <div className={`popup popup_function_open-image ${props.card.name ? "popup_opened" : ""}`}>
        <div className="popup__container popup__container_function_open-image">
          <img className="popup__image" alt={props.card.name} src={props.card.link} />
          <p className="popup__subscription">{props.card.name}</p>
          <button className="popup__close-button" type="button" onClick={props.onClose}></button>
        </div>
      </div>
    );
  }
  
  export default ImagePopup;