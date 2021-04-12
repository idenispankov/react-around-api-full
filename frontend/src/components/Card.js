import { CurrentUserContext } from '../context/CurrentUserContext';
import { useContext } from 'react';

export default function Card({ card, onCardClick, onCardLike, onCardDelete }) {
  const currentUser = useContext(CurrentUserContext);

  const isOwn = card.owner === currentUser._id;
  const isLiked = card.likes.some((userId) => userId === currentUser._id);

  function handleCardClick() {
    onCardClick(card);
  }

  function handleLikeClick() {
    onCardLike(card);
  }

  function handleDeleteClick() {
    onCardDelete(card);
  }

  return (
    <li className='card'>
      {isOwn && (
        <button
          className='card__delete-button'
          aria-label='Delete button'
          type='reset'
          onClick={handleDeleteClick}
        />
      )}
      <img
        className='card__image'
        alt={card.name}
        src={card.link}
        onClick={handleCardClick}
      />
      <div className='card__group'>
        <h2 className='card__text'>{card.name}</h2>
        <div className='card__like-container'>
          <button
            className={`card__like-button ${
              isLiked ? 'card__like-button_active' : null
            }`}
            aria-label='Like button'
            type='button'
            onClick={handleLikeClick}
          />
          <p className='card__like-button-count'>{card.likes.length}</p>
        </div>
      </div>
    </li>
  );
}
