import React from 'react';

function Header(props) {
    return (
        <header className="header">
            <div className="header__logo"></div>
            <div>
                <h2 className="header__title">{props.email}</h2>
                <button onClick={props.onSignOut} className="header__exit">Выйти</button>
            </div>
        </header>    
    );
  }
  
  export default Header;