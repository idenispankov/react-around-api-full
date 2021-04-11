import Card from './Card';
import { CurrentUserContext } from '../context/CurrentUserContext';
import { useContext } from 'react';

export default function Main({
  cards,
  onEditAvatar,
  onEditProfile,
  onAddPlace,
  onCardClick,
  onLikeClick,
  onDeleteClick,
}) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <main>
      <section className='profile'>
        <button className='profile__avatar-edit' onClick={onEditAvatar}>
          <img
            className='profile__avatar'
            src={currentUser.avatar}
            alt='profile avatar'
          />
        </button>
        <div className='profile__info'>
          <h1 className='profile__text'>{currentUser.name}</h1>
          <button
            className='profile__edit-button'
            onClick={onEditProfile}
            aria-label='Edit Avatar'
            type='button'
          ></button>
          <p className='profile__paragraph'>{currentUser.about}</p>
        </div>
        <button
          className='profile__add-button'
          onClick={onAddPlace}
          aria-label='Add button'
          type='button'
        ></button>
      </section>

      <section className='elements'>
        <ul className='elements__list'>
          {cards.map((card) => (
            <Card
              card={card}
              key={card._id}
              currentUserId={currentUser._id}
              onCardClick={onCardClick}
              onCardLike={onLikeClick}
              onCardDelete={onDeleteClick}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}
