import logo from '../images/header__logo.svg';

export default function Header({ loggedIn, onLogout, email }) {
  return (
    <header className='header'>
      <img className='header__logo' src={logo} alt='Around US logo' />
      <ul className='header__menu'>
        <li>{loggedIn ? <p className='header__email'>{email}</p> : ''}</li>
        <li>
          {loggedIn ? (
            <button className='header__button' onClick={onLogout}>
              Log out
            </button>
          ) : (
            ''
          )}
        </li>
      </ul>
    </header>
  );
}
