import React from 'react';
import PopupWithForm from './PopupWithForm.js';

function AddPlacePopup(props) {

    const nameRef = React.useRef();
    const linkRef = React.useRef();

    function handleSubmit(e) {
      e.preventDefault();

      props.onAddPlace({
        name: nameRef.current.value,
        link: linkRef.current.value
      });

      nameRef.current.value = "";
      linkRef.current.value = "";
    } 

    return (
        <PopupWithForm name="add" title="Новое место" isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit}>
            <div className="popup__field">
              <input id="place-input" ref={nameRef} className="popup__input popup__input_content_place popup__input_function_add" name="name" placeholder="Название" minLength="2" maxLength="30" required />
              <span className="popup__error place-input-error"></span>
            </div>
            <div className="popup__field">
              <input id="url-input" ref={linkRef} className="popup__input popup__input_content_picture popup__input_function_add" name="link" placeholder="Ссылка на картинку" type="url" required />
              <span className="popup__error url-input-error"></span>
            </div>
        </PopupWithForm>
    )
  }
  
  export default AddPlacePopup;