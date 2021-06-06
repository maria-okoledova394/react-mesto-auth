import Register from './Register.js';
import Login from './Login.js';
import InfoTooltip from './InfoTooltip.js';
import Page from './Page.js';
import ProtectedRoute from './ProtectedRoute';
import { Route, Switch, useHistory } from 'react-router-dom';
import * as auth from '../utils/auth';
import React, { useEffect, useState } from 'react';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [isMistake, setIsMistake] = useState(false);
  const [popup, setPopup] = useState(false);
  const [userData, setUserData] = useState('');

  const history = useHistory();

  useEffect(() => {
    checkToken();
  }, []);

  function handleError (error) {
    console.error(error)
  }

  function onRegister({ email, password }) {
    auth.register(password, email)
      .then((res) => {
        const email = res.data.email
        setUserData(email)
        setIsMistake(false)
        history.push('/sign-in')
      })
      .catch((error) => {
        handleError(error)
        setIsMistake(true)
      })
      .finally(() => {
        setPopup(true)
      })
  }

  function checkToken() {
    let token = localStorage.getItem('token')
    
    if (token) {
      auth.getContent(token)
        .then((res) => {
          if (res){
            setUserData(res.data.email)
            setLoggedIn(true)
            history.push("/")
          }
        })
        .catch(handleError)
    }
  }

  function onLogin({ email, password }) {
    auth.authorize(password, email)
      .then((res) => {
        const token = res.token
        if (token) {
          localStorage.setItem('token', token)
          checkToken();
        }
      })
      .catch(handleError)
  }

  function onSignOut() {
    setUserData('')
    setLoggedIn(false)
    localStorage.removeItem('token')
  }

  function onCloseStartPopup() {
    setPopup(false)
  }

  return (
    <div className="page">
    <Switch>
      {popup && <InfoTooltip isMistake={isMistake} onClose={onCloseStartPopup} />}
      <Route path="/sign-up">
        <Register onRegister={onRegister} />
      </Route>
      <Route path="/sign-in">
        <Login onLogin={onLogin} />
      </Route>
      <ProtectedRoute path="/" loggedIn={loggedIn} email={userData} component={Page} onSignOut={onSignOut} />
    </Switch>
    </div>
  )
}

export default App;
