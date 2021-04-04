import PopupWithForm from './PopupWithForm';

function DeleteCardPopup(props) {
  function handleSubmit(e) {
    e.preventDefault();
    props.onDeleteCard(props.deleteCard);
    props.setSubmitStatus(true);
  }

  return (
    <PopupWithForm
      modalName='type_delete-card'
      formType='type_profile'
      formTitle='Are you sure?'
      submitText={props.submitStatus ? 'Deleting...' : 'Yes'}
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      card={props.deleteCard}
    />
  );
}
export default DeleteCardPopup;
