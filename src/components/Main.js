import React from 'react';
import Card from './Card.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main(props) {

    const currentUser = React.useContext(CurrentUserContext);

    return (
        <main>
            <section className="profile">
            <button className="profile__avatar-container profile__update-avatar-button" onClick={props.onEditAvatar} type="button">
                <img className="profile__avatar" src={currentUser.avatar} alt="Аватар" />
                <div className="profile__avatar-overlay">
                <i className="profile__icon"></i>
                </div>        
            </button>
            
            <div className="profile__info">
                <h1 className="profile__title">{currentUser.name}</h1>
                <p className="profile__subtitle">{currentUser.about}</p>
                <button className="profile__edit-button" onClick={props.onEditProfile} type="button"></button>
            </div>
            <button className="profile__add-button" onClick={props.onAddPlace} type="button"></button>
            </section>

            <section className="card-list">
              {props.cards.map((card) => {
                return(
                  <Card key={card._id} card={card} onCardClick={props.onCardClick} onCardLike={props.onCardLike} onCardDelete={props.onCardDelete} />
              )})}
            </section>
        </main>
    );
  }
  
  export default Main;