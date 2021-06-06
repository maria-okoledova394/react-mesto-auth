import React from 'react';
import PopupWithForm from './PopupWithForm.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function EditProfilePopup(props) {
    const currentUser = React.useContext(CurrentUserContext);

    const [name, setName] = React.useState("");
    const [description, setDescription] = React.useState("");

    React.useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
      }, [currentUser, props.isOpen]);

    function handleNameChange(e) {
        setName(e.target.value);
    }

    function handleDescriptionChange(e) {
        setDescription(e.target.value);
    }

    function handleSubmit(e) {
      e.preventDefault();

      props.onUpdateUser({
        name: name,
        about: description,
      });
    } 

    return (
        <PopupWithForm name="edit" title="Редактировать профиль" isOpen={props.isOpen} onClose={props.onClose} onSubmit={handleSubmit}>
            <div className="popup__field">
              <input id="name-input" className="popup__input popup__input_content_name popup__input_function_edit" value={name || ''} name="name" onChange={handleNameChange} placeholder="Имя" type="text" pattern="^[ \-a-zA-Zа-яА-Я]+$" minLength="2" maxLength="40" required />
              <span className="popup__error name-input-error"></span>
            </div>
            <div className="popup__field">
              <input id="about-input" className="popup__input popup__input_content_about popup__input_function_edit" value={description || ''} name="about" onChange={handleDescriptionChange} placeholder="Деятельность" minLength="2" maxLength="200" required />
              <span className="popup__error about-input-error"></span>
            </div>
        </PopupWithForm>
    );
  }
  
  export default EditProfilePopup;