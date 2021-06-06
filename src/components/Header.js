import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <header className="header">
            <div className="header__logo"></div>
            <div>
                <h2 className="header__title">{props.email}</h2>
                {props.loggedIn ? <button onClick={props.onSignOut} className="header__exit">{props.nameLink}</button> : <Link to={props.way} className="header__link">{props.nameLink}</Link>}
            </div>
        </header>    
    );
  }
  
  export default Header;