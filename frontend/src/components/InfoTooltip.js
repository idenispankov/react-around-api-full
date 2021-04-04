import React from 'react';
import success from '../images/success.svg';
import error from '../images/error.svg';

const InfoTooltip = (props) => {
  return (
    <div
      className={`modal modal_type_${props.modalName} ${
        props.isOpen && 'modal_is-open'
      }`}
    >
      <form className='form form__success'>
        <img
          className='form__image'
          src={props.registered ? success : error}
          alt='icon'
        />
        <p className='form__text-tooltip'>
          {props.registered
            ? 'Success! You have now been registered.'
            : 'Oops, something went wrong! Please try again.'}
        </p>
        <button
          className='form__close-button'
          onClick={props.onClose}
          aria-label='Close button'
          type='reset'
        ></button>
      </form>
    </div>
  );
};

export default InfoTooltip;
