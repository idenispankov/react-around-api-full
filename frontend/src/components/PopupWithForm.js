export default function PopupWithForm(props) {
  return (
    <div
      className={`modal modal_type_${props.modalName} ${
        props.isOpen && 'modal_is-open'
      }`}
    >
      <form
        action='#'
        className={`form form_${props.formType}`}
        onSubmit={props.onSubmit}
      >
        <h3 className='form__title'>{props.formTitle}</h3>

        {props.children}

        <button className='form__button form__button_type_save' type='submit'>
          {props.submitText}
        </button>
        <button
          className='form__close-button'
          onClick={props.onClose}
          aria-label='Close button'
          type='reset'
        ></button>
      </form>
    </div>
  );
}
