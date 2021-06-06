import React from 'react';
import successRegistrationMark from '../images/successRegistrationMark.svg'
import faildRegistrationMark from '../images/faildRegistrationMark.svg'

function InfoTooltip(props) {
    return (
      <>
        <div className={`popup ${props.isOpen ? "popup_opened" : ""}`}>
          <div className="popup__container popup__container_type_info">
            <button className="popup__close-button" type="button" onClick={props.onClose}></button>
            <img className="popup__image" src={props.isMistake ? faildRegistrationMark : successRegistrationMark}
            alt="mark"></img>
            <h2 className="popup__title popup__title_function_info">
              {props.isMistake ? "Что-то пошло не так! Попробуйте ещё раз." : "Вы успешно зарегистрировались!"}</h2>
          </div>
        </div>  
      </>
    );
  }
  
  export default InfoTooltip;