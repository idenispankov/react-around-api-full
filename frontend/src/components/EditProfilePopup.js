import PopupWithForm from './PopupWithForm';
import Input from './Input';
import { CurrentUserContext } from '../context/CurrentUserContext';
import { useContext, useState, useEffect } from 'react';

export default function EditProfilePopup(props) {
  const currentUser = useContext(CurrentUserContext);

  const [name, setName] = useState('');
  const [about, setAbout] = useState('');

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleAboutChange(e) {
    setAbout(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateUser({
      name,
      about,
    });
    props.setSubmitStatus(true);
  }

  useEffect(() => {
    setName(currentUser.name);
    setAbout(currentUser.about);
  }, [currentUser]);

  return (
    <PopupWithForm
      modalName='edit_profile'
      formType='type_profile'
      formTitle='Edit profile'
      submitText={props.submitStatus ? 'Saving...' : 'Save'}
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <Input
        type='text'
        name='profile'
        placeholder='Name'
        inputType='type_name'
        min='2'
        max='40'
        handleChange={handleNameChange}
        value={name}
      />
      <Input
        type='text'
        name='about'
        placeholder='About me'
        inputType='type_about'
        min='2'
        max='200'
        handleChange={handleAboutChange}
        value={about}
      />
    </PopupWithForm>
  );
}
