import { useState, useEffect } from 'react';

import PopupWithForm from './PopupWithForm';
import Input from './Input';

function AddPlacePopup(props) {
  const [name, setName] = useState('');
  const [link, setLink] = useState('');

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleLinkChange(e) {
    setLink(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onAddPlace({
      name,
      link,
    });
    props.setSubmitStatus(true);
    setName('');
    setLink('');
  }

  useEffect(() => {
    setName('');
    setLink('');
  }, [props.isOpen]);

  return (
    <PopupWithForm
      modalName='type_add-card'
      formType='type_profile'
      formTitle='New Place'
      submitText={props.submitStatus ? 'Creating...' : 'Create'}
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <Input
        type='text'
        placeholder='Title'
        inputType='card-title'
        name='title'
        id='card-title-error'
        handleChange={handleNameChange}
        value={name}
      />
      <Input
        type='url'
        placeholder='Image Link'
        inputType='card-url'
        name='url'
        id='card-url-error'
        handleChange={handleLinkChange}
        value={link}
      />
    </PopupWithForm>
  );
}

export default AddPlacePopup;
