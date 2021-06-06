import React, { useState } from 'react';
import Header from './Header.js';

function Login(props) {

  const [userData, setUserData] = useState({
    email: '',
    password: '',
    message: ''
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!userData.email || !userData.password){
      return;
    }
    const { email, password } = userData;

    props.onLogin({ email, password })
  }

    return (
        <>
        <Header onSignOut={props.onSignOut} email={props.email} loggedIn={false} nameLink="Регистрация" way="/sign-up" />
        <form className="start-form" onSubmit={handleSubmit}>
          <h1 className="start-form__title">Вход</h1>
            <input id="email-input" name="email" className="start-form__input" placeholder="Email" 
            value={userData.email} onChange={handleChange} />
            <input id="password-input" name="password" className="start-form__input" placeholder="Пароль"
            value={userData.password} onChange={handleChange} />
            <button type="submit" className="start-form__button">Войти</button>
        </form>
        </>
    );
  }
  
  export default Login;