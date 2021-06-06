import React from 'react';
import success_registration_mark from '../images/success_registration_mark.svg'
import faild_registration_mark from '../images/faild_registration_mark.svg'

function InfoTooltip(props) {
    return (
      <>
        <div className="start-popup">
          <form className="popup__form popup__container popup__container_type_info">
            <button className="popup__close-button" type="button" onClick={props.onClose}></button>
            <img className="popup__image" src={props.isMistake ? faild_registration_mark : success_registration_mark}
            alt="mark"></img>
            <h2 className="popup__title popup__title_function_info">
              {props.isMistake ? "Что-то пошло не так! Попробуйте ещё раз." : "Вы успешно зарегистрировались!"}</h2>
          </form>
        </div>  
      </>
    );
  }
  
  export default InfoTooltip;