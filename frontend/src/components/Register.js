import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../images/header__logo.svg';
import Input from './Input';

const Register = ({ handleRegister }) => {
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
    handleRegister(email, password);
  }

  return (
    <div className='page'>
      <div className='page__container'>
        <header className='header'>
          <img className='header__logo' src={logo} alt='Around US logo' />
          <ul className='header__menu'>
            <li>
              <NavLink to='/signin' className='header__link'>
                Log in
              </NavLink>
            </li>
          </ul>
        </header>
        <form className='form__autorization' onSubmit={handleSubmit}>
          <h2 className='form__title form__title-autorization'>Sign up</h2>
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
            Sign up
          </button>
          <Link to='signin' className='form__text'>
            Already a member? Log in here!
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Register;
