import React from 'react';
import PopupWithForm from './PopupWithForm.js';

function EditAvatarPopup(props) {
    const avaterRef = React.useRef();

    function handleSubmit(e) {
      e.preventDefault();

      props.onUpdateAvatar({
        avatar: avaterRef.current.value
      });

      avaterRef.current.value = "";
    } 

    return (
        <PopupWithForm name="update-avatar" title="Обновить аватар" isOpen={props.isOpen} 
        onClose={props.onClose} onSubmit={handleSubmit}>
        <div className="popup__field">
              <input ref={avaterRef} id="avatar-input" 
                className="popup__input popup__input_content_avatar popup__input_function_update-avatar" 
                name="avatar" placeholder="Аватар" type="url" required />
              <span className="popup__error avatar-input-error"></span>
            </div>
        </PopupWithForm>
    )
  }
  
  export default EditAvatarPopup;