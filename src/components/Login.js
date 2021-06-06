import { Link } from 'react-router-dom';
import React, { useState } from 'react';

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
        <header className="header">
            <div className="header__logo"></div>
            <Link to="/sign-up" className="header__link">Регистрация</Link>
        </header>    
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