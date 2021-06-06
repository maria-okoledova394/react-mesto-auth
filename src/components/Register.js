import { Link } from 'react-router-dom';
import React, { useState } from 'react';

function Register(props) {

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
    // TODO add if (!userData.email || !userData.password)
    const { email, password } = userData;

    props.onRegister({ email, password })
  }

  return (
      <>
      <header className="header">
        <div className="header__logo"></div>
        <Link to="/sign-in" className="header__link">Войти</Link>
      </header> 
      <form className="start-form" onSubmit={handleSubmit}>
        <h1 className="start-form__title">Регистрация</h1>
          <input id="email-input" name="email" className="start-form__input" placeholder="Email" 
          value={userData.email} onChange={handleChange} />
          <input id="password-input" name="password" className="start-form__input" placeholder="Пароль"
          value={userData.password} onChange={handleChange} />
          <button type="submit" className="start-form__button">Зарегистрироваться</button>
      </form>

      <div className="start__signin">
        <p>Уже зарегистрированы? <Link to="/sign-in" className="start__login-link">Войти</Link></p>
      </div>
      </>
  );
  }
  
  export default Register;