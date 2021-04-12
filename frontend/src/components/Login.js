import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../images/header__logo.svg';
import Input from './Input';

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleLogin(email, password);
  }

  return (
    <div className='page'>
      <div className='page__container'>
        <header className='header'>
          <img className='header__logo' src={logo} alt='Around US logo' />
          <ul className='header__menu'>
            <li>
              <NavLink to='/signup' className='header__link'>
                Sign up
              </NavLink>
            </li>
          </ul>
        </header>
        <form className='form__autorization' onSubmit={handleSubmit}>
          <h2 className='form__title form__title-autorization'>Log in</h2>
          <Input
            name='email'
            inputType='autorization'
            placeholder='Email'
            type='email'
            handleChange={handleEmailChange}
            value={email}
          />
          <Input
            name='password'
            inputType='autorization'
            placeholder='Password'
            type='password'
            handleChange={handlePasswordChange}
            value={password}
          />
          <button
            className='form__button form__button_autorization'
            type='submit'
          >
            Log in
          </button>
          <Link to='signup' className='form__text'>
            Not a member yet? Sign up here!
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
